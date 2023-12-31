import React from 'react'
import '../../popup.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AiFillDelete, AiOutlineClose } from 'react-icons/ai'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import{toast} from 'react-toastify'
import { error } from 'console';


interface CaloriIntakePopupProps {
  setShowCalorieIntakePopup: React.Dispatch<React.SetStateAction<boolean>>;
}
const CalorieIntakePopup: React.FC<CaloriIntakePopupProps> = ({ setShowCalorieIntakePopup }) => {
  const color = '#ffc20e'
  const [items, setItems] = React.useState<any>([]);
  const [time , setTime] = React.useState<any>(dayjs(new Date()))
  const [date, setDate] = React.useState<Dayjs>(dayjs())
  const [calorieIntake ,setCalorieIntake] = React.useState<any>({
    item:'',
    date:'',
    quantity:'',
    quantitytype:'g'
  })
  const[item,setItem]= React.useState<any>([])

  const saveCalorieIntake = async ()=>{
    let tempdate = date.format('YYYY-MM-DD')
    let temptime = time.format('HH:mm:ss')
    let tempdatetime = tempdate +' ' + temptime
    let finaldatetime = new Date(tempdatetime)

    fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/calorieintake/addcalorieintake',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials:'include',
      body: JSON.stringify({
        item: calorieIntake.item,
        date: finaldatetime,
        quantity: calorieIntake.quantity,
        quantitytype: calorieIntake.quantitytype
        })
    })
    .then(res => res.json())
    .then(data => {
      if(data.ok){
      toast.success('Calorie Intake added sucessfully')
      getCalorieIntake();
    }
    else{
      toast.error('Failed to add Calorie Intake')

    }
  })
  .catch(err2 =>{
    toast.error('Failed to add Calorie Intake')
    console.log(err2)
  })
  }



  const getCalorieIntake = async ()=>{
    setItems([])
    fetch(process.env.NEXT_PUBLIC_BACKEND_API+'/calorieintake/getcalorieintakebydate',{
      method: 'POST',
      headers:{
        "Content-Type":"application/json",
      },
      credentials:'include',
      body: JSON.stringify({
        date : date
      })
    })
    .then(res => res.json())
    .then(data =>{
      if(data.ok){
        console.log(data.data,'Calorie intake data for date')
        setItems(data.data)
      }
      else{
        toast.error("error in getting calorie intake")
      }
    })
    .catch(err =>{
      toast.error('Error in getting calorie intake')
      console.log(err)
    })

  }
  const deleteCalorieIntake = async (item:any)=>{
    fetch(process.env.NEXT_PUBLIC_BACKEND_API+'/calorieintake/deletecalorieintake',{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      },
      credentials: "include",
      body: JSON.stringify({
        item: item.item,
        date: item.date
      })
    })
    .then(res => res.json())
    .then(data =>{
      if(data.ok){
        toast.success("Deleted Successfuly")
        getCalorieIntake()
      }else{
        toast.error("error in deleting calorie intake")
      }
    })
    .catch(err=>{
      toast.error("Error in deleting calorie intake")
    })
  }


  React.useEffect(()=>{
    getCalorieIntake();
  }, [date])


  const selectedDay =(val:Dayjs) =>{
    setDate(val)
  }


  return (
    <div className='popupout'>
      <div className="popupbox">
        <button className="close" onClick={()=>setShowCalorieIntakePopup(false)}><AiOutlineClose 
        style={
          {
            color:'black'
          }
        }/></button>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="Select Date" value={date} 
          onChange={(newValue :any) =>{
            selectedDay(newValue)}}/>
        </LocalizationProvider>

        <TextField id="outlined-basic" 
        label="Food Item Name" variant='outlined' color='warning'
        onChange={(e)=>{
          setCalorieIntake({...calorieIntake,item: e.target.value})
        }}/>

        <TextField id="outlined-basic" 
        label="Amount in grams" variant='outlined' color='warning'
        onChange={(e)=>{
          setCalorieIntake({...calorieIntake,quantity: e.target.value})
        }}/>

        <div className="timebox">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker label="Time" value={time} 
            onChange={(newValue:any)=> setTime(newValue)}/>
          </LocalizationProvider>
        </div>

        <Button variant='contained' color='warning'
        onClick={saveCalorieIntake}>Save</Button>

      <div className="hrline"></div>
      <div className="items">
        {
          items.map((item: any) => {
            return (
              <div className="item">
                <h3>{item.item}</h3>
                <h3>{item.quantity}{item.quantitytype}</h3>
                <button onClick={() => {
                  deleteCalorieIntake(item);
                }}
                ><AiFillDelete /></button>
              </div>
            );
          })
        }
      </div>

      </div>
  </div>

  )
}

export default CalorieIntakePopup