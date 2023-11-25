"use client"
import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import './ReportPage.css'
import { AiFillEdit } from 'react-icons/ai'
import CaloriIntakePopup from '@/components/ReportFormPopup/CalorieIntake/CalorieIntakePopup';
import SleepInTakePopup from '@/components/ReportFormPopup/SleepIntake/SleepIntake'
import { usePathname } from 'next/navigation';

const page = () => {
    const color = '#ffc20e'
    const pathname = usePathname();
    console.log(pathname)
    const chartsParams = {
        // margin: { bottom: 20, left: 25, right: 5 },
        height: 300,

    };

    const [dataS1, setDataS1] = React.useState<any>(null)
    const[dataS2, setDataS2] = React.useState<any>(null)
    const[dataS3, setDataS3] = React.useState<any>(null)
    const[dataS4, setDataS4] = React.useState<any>(null)
        if(pathname == '/report/Calorie%20Intake'){
            const getDataForS1 = async()=>{
            fetch(process.env.NEXT_PUBLIC_BACKEND_API+'/calorieintake/getcalorieintakebylimit',{
                method: 'POST',
                credentials:'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({limit:10})    
            })
            .then(res => res.json())

            .then(data => {
                if(data.ok){
                    let temp =  data.data.map((item:any) =>{
                        return{
                            date:item.date,
                            value: item.calorieIntake,
                            unit:'kcal'

                        }
                })
                let dataForLineChart = temp.map((item:any)=>{
                    let val = JSON.stringify(item.value)
                    return val;
                })
                
                let dataForXAxis = temp.map((item: any) => {                         
                    let val = new Date(item.date)
                    return val
            })

                setDataS1({
                    data: dataForLineChart,
                    title: '1 Day Calorie Intake',
                    color: color,
                    xAxis: {
                        data: dataForXAxis,
                        label  : "Last 10 Days",
                        scaleType: 'time'
                    }
                })
            }
            })
            .catch(err=>{
                    console.log(err)
            })

            }
            getDataForS1();
        }
        else if(pathname=='/report/sleep')
        {
            const getDataForS2 = async()=>{
            fetch(process.env.NEXT_PUBLIC_BACKEND_API+'/SleepTrack/getsleepbyLimit',{
                method: 'POST',
                credentials:'include',
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({limit:10})
         })
         .then(res => res.json())

            .then(data => {
                if(data.ok){
                    let temp =  data.data.map((item:any) =>{
                        return{
                            date:item.date,
                            value: item.sleep,
                            unit:'hrs'

                        }
                })
                let dataForLineChart = temp.map((item:any)=>{
                    let val = JSON.stringify(item.value)
                    return val;
                })
                
                let dataForXAxis = temp.map((item: any) => {                         
                    let val = new Date(item.date)
                    return val
            })

                setDataS2({
                    data: dataForLineChart,
                    title: '1 Day Calorie Intake',
                    color: color,
                    xAxis: {
                        data: dataForXAxis,
                        label  : "Last 10 Days",
                        scaleType: 'time'
                    }
                })
            }
            })
            .catch(err=>{
                    console.log(err)
            })
            

        }
        getDataForS2();
    }

        // let temp = [
        //     {
        //         date: 'Thu Sep 28 2023 20:30:30 GMT+0530 (India Standard Time)',
        //         value: 2000,
        //         unit: 'kcal'
        //     },
        //     {
        //         date: 'Wed Sep 27 2023 20:30:30 GMT+0530 (India Standard Time)',
        //         value: 2500,
        //         unit: 'kcal'
        //     },
        //     {
        //         date: 'Tue Sep 26 2023 20:30:30 GMT+0530 (India Standard Time)',
        //         value: 2700,
        //         unit: 'kcal'
        //     },
        //     {
        //         date: 'Mon Sep 25 2023 20:30:30 GMT+0530 (India Standard Time)',
        //         value: 3000,
        //         unit: 'kcal'
        //     },
        //     {
        //         date: 'Sun Sep 24 2023 20:30:30 GMT+0530 (India Standard Time)',
        //         value: 2000,
        //         unit: 'kcal'
        //     },
        //     {
        //         date: 'Sat Sep 23 2023 20:30:30 GMT+0530 (India Standard Time)',
        //         value: 2300,
        //         unit: 'kcal'
        //     },
        //     {
        //         date: 'Fri Sep 22 2023 20:30:30 GMT+0530 (India Standard Time)',
        //         value: 2500,
        //         unit: 'kcal'
        //     },
        //     {
        //         date: 'Thu Sep 21 2023 20:30:30 GMT+0530 (India Standard Time)',
        //         value: 2700,
        //         unit: 'kcal'
        //     },
        // ]

        // let dataForLineChart = temp.map((item: any) => {
        //     let val = JSON.stringify(item.value)
        //     return val
        // })

        // let dataForXAxis = temp.map((item: any) => {
        //     let val = new Date(item.date)
        //     return val
        // })

        // console.log({
        //     data: dataForLineChart,
        //     title: '1 Day Calorie Intake',
        //     color: color,
        //     xAxis: {
        //         data: dataForXAxis,
        //         label: 'Last 10 Days',
        //         scaleType: 'time'
        //     }
        // })

        // setDataS1({
        //     data: dataForLineChart,
        //     title: '1 Day Calorie Intake',
        //     color: color,
        //     xAxis: {
        //         data: dataForXAxis,
        //         label: 'Last 10 Days',
        //         scaleType: 'time'
        //     }
        // })
    

    const [showCalorieIntakePopup, setShowCalorieIntakePopup] = React.useState<boolean>(false)
    const [showSleepIntakePopup, setShowSleepIntakePopup] = React.useState<boolean>(false)

    return (
        <div className='reportpage'>
        <div className='s1'>
                {dataS1 && dataS1.data.length > 0 ? (
                    <LineChart
                        xAxis={[{
                            id: 'Day',
                            data: dataS1.xAxis.data,
                            scaleType: dataS1.xAxis.scaleType,
                            label: dataS1.xAxis.label,
                            valueFormatter: (date: any) => {
                                return date.getDate();
                            }
                        }]}
                        
                        series={[
                            {
                                data: dataS1.data,
                                label: dataS1.title,
                                color: dataS1.color,
                            },
                        ]}
                        {...chartsParams}
                    />
                ) : (
                    <div>Enter Data to get the graph</div>
                )}
            </div>
            <button className='editbutton'
                onClick={() => {
                    if(pathname == '/report/Calorie%20Intake')
                    {
                        setShowCalorieIntakePopup(true)

                    }
                    else if(pathname== '/report/sleep'){
                        setShowSleepIntakePopup(true)
                    }
                    
                }}
            >
                <AiFillEdit />
            </button>

            {
                showCalorieIntakePopup &&

                <CaloriIntakePopup setShowCalorieIntakePopup={setShowCalorieIntakePopup} />

            }
        </div>
    )
}

export default page