import React from 'react'
import '../popup.css'
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


interface SleepIntakePopupProps{
  setShowSleepIntakePopup: React.Dispatch<React.SetStateAction<boolean>>;
}
const SleepIntakePopup: React.FC<SleepIntakePopupProps> = ({ setShowSleepIntakePopup}) => {
  const color = '#ffc20e'
  const [items, setItems] = React.useState<any>([]);
  const [time , setTime] = React.useState<any>(dayjs(new Date()))
  const [date, setDate] = React.useState<Dayjs>(dayjs())
  const [sleepIntake ,setSleepIntake] = React.useState<any>({
    date:'',
    durationInHrs:''
  })
  const[item,setItem]= React.useState<any>([])

  const saveSleepIntake = async ()=>{
    let tempdate = date.format('YYYY-MM-DD')
    let temptime = time.format('HH:mm:ss')
    let tempdatetime = tempdate +' ' + temptime
    let finaldatetime = new Date(tempdatetime)

    fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/SleepTrack/addsleepentry',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials:'include',
      body: JSON.stringify({
        date: finaldatetime,
        durationInhrs:sleepIntake.sleep
        })
    })
    .then(res => res.json())
    .then(data => {
      if(data.ok){
      toast.success('Sleep entry added sucessfully')
      getSleepIntake();
    }
    else{
      toast.error('Failed to add Sleep Entry')

    }
  })
  .catch(err2 =>{
    toast.error('Failed to add Calorie Intake')
    console.log(err2)
  })
  }



  const getSleepIntake = async ()=>{
    setItems([])
    fetch(process.env.NEXT_PUBLIC_BACKEND_API+'/SleepTrack/getusersleep',{
      method: 'POST',
      headers:{
        "Content-Type":"application/json",
      },
      credentials:'include',
      body: JSON.stringify({
        date : date,
        goal : sleepIntake.goalsleep
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
  const deleteSleepIntake = async (item:any)=>{
    fetch(process.env.NEXT_PUBLIC_BACKEND_API+'/sleeptrack/deletesleepentry',{
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
        getSleepIntake()
      }else{
        toast.error("error in deleting calorie intake")
      }
    })
    .catch(err=>{
      toast.error("Error in deleting calorie intake")
    })
  }


  React.useEffect(()=>{
    getSleepIntake();
  }, [date])


  const selectedDay =(val:Dayjs) =>{
    setDate(val)
  }


  return (
    <div className='popupout'>
      <div className="popupbox">
        <button className="close" onClick={()=>setShowSleepIntakePopup(false)}><AiOutlineClose 
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
          setSleepIntake({...sleepIntake,item: e.target.value})
        }}/>

        <TextField id="outlined-basic" 
        label="Amount in grams" variant='outlined' color='warning'
        onChange={(e)=>{
          setSleepIntake({...sleepIntake,durationInHrs: e.target.value})
        }}/>

        <div className="timebox">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker label="Time" value={time} 
            onChange={(newValue:any)=> setTime(newValue)}/>
          </LocalizationProvider>
        </div>

        <Button variant='contained' color='warning'
        onClick={saveSleepIntake}>Save</Button>

      <div className="hrline"></div>
      <div className="items">
        {
          items.map((item: any) => {
            return (
              <div className="item">
                <h3>{item.item}</h3>
                <h3>{item.quantity}{item.quantitytype}</h3>
                <button onClick={() => {
                  deleteSleepIntake(item);
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

export default SleepIntakePopup