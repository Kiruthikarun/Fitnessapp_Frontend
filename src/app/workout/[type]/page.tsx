"use client"
import React from 'react'
import './workoutPage.css'

export type WorkoutType = {
    type:string,
    imageUrl:string,
    durationInMin:Number,
    exercises:{
        exercise:string,
        videoUrl:string
        sets:Number,
        reps:Number,
        rest:Number,
        description:string
    }[]
}
const page = () => {
    const [workout, setWorkout] = React.useState<any>(null)
    
    const getworkout = async () => {
        let data:WorkoutType={} as WorkoutType;
        const workoutType =window.location.pathname.slice(9);
        switch(workoutType){
            case 'Chest':
                    data = {
                    type: 'Chest',
                    imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
                    durationInMin: 30,
                    exercises: [
                        {
                            exercise: 'Flat Bench Press',
                            videoUrl: 'https://gymvisual.com/img/p/1/7/5/5/2/17552.gif',
                            sets: 3,
                            reps: 10,
                            rest: 60,
                            description: 'Execute a flat bench press by lying on a flat bench, gripping the barbell, and pressing it upward from the mid-chest to engage the pectoral muscles.'
                        },
                        {
                            exercise: 'Incline Bench Press',
                            videoUrl: 'https://gymvisual.com/img/p/1/0/3/9/8/10398.gif',
                            sets: 3,
                            reps: 10,
                            rest: 60,
                            description: 'Perform an incline bench press by lying on an inclined bench, gripping the barbell, and pressing it upward from the upper chest, targeting the upper pectoral muscles.'
        
                        },
                        {
                            exercise: 'Decline Bench Press',
                            videoUrl: 'https://gymvisual.com/img/p/6/5/2/3/6523.gif',
                            sets: 3,
                            reps: 10,
                            rest: 60,
                            description: 'Conduct a decline bench press by lying on a decline bench, gripping the barbell, and pressing it upward from the lower chest to engage the lower pectoral muscles.'
        
                        }
                    ],
                }
                
                break;

            case 'Abs':
                data = {
                    type: 'Abs',
                    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
                    durationInMin: 30,
                    exercises: [
                        {
                            exercise: 'Crunches',
                            videoUrl: 'https://gymvisual.com/img/p/2/2/5/9/0/22590.gif',
                            sets: 3,
                            reps: 10,
                            rest: 60,
                            description: 'Complete crunches by lying on your back, bending your knees, and lifting your upper body toward your knees, engaging the abdominal muscles in a controlled manner.'
                        },
                        {
                            exercise: 'Heel Touch',
                            videoUrl: 'https://gymvisual.com/img/p/2/8/9/7/1/28971.gif',
                            sets: 3,
                            reps: 10,
                            rest: 60,
                            description: 'Execute heel touches by lying on your back, lifting your shoulders off the ground, and reaching alternately towards your heels, engaging the obliques for a lateral abdominal workout.'
        
                        },
                        {
                            exercise: 'Hanging Leg rises',
                            videoUrl: 'https://gymvisual.com/img/p/1/0/1/6/5/10165.gif',
                            sets: 3,
                            reps: 10,
                            rest: 60,
                            description: 'Perform hanging leg raises by hanging from a bar, lifting your legs straight up towards the ceiling, engaging the lower abdominal muscles for a challenging core exercise.'
        
                        }
                    ],
                }
                break;

            case 'Shoulder':
              data = {
                type: 'Shoulder',
                imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
                durationInMin: 30,
                exercises: [
                    {
                        exercise: 'Barbell Clean and Press',
                        videoUrl: 'https://gymvisual.com/img/p/4/7/5/9/4759.gif',
                        sets: 3,
                        reps: 10,
                        rest: 60,
                        description: 'Conduct a barbell clean and press by lifting the barbell from the ground to the shoulders, then pressing it overhead in one fluid motion, engaging the entire body for a compound strength exercise.'
                    },
                    {
                        exercise: 'Barbell Drag Curl',
                        videoUrl: 'https://gymvisual.com/img/p/1/4/8/7/2/14872.gif',
                        sets: 3,
                        reps: 10,
                        rest: 60,
                        description: 'Execute a barbell drag curl by keeping the barbell close to your body and dragging it up along your torso, targeting the biceps with a focus on the contraction.'
    
                    },
                    {
                        exercise: 'Barbell Front Raise',
                        videoUrl: 'https://gymvisual.com/img/p/4/7/7/2/4772.gif',
                        sets: 3,
                        reps: 10,
                        rest: 60,
                        description: 'Perform a barbell front raise by holding a barbell with an overhand grip and lifting it directly in front of you, targeting the front deltoids for shoulder development.                        '
    
                    }
                ],
            }
            break;

            case 'Back':
              data = {
                type: 'Back',
                imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
                durationInMin: 30,
                exercises: [
                    {
                        exercise: 'Archer Pull-up',
                        videoUrl: 'https://gymvisual.com/img/p/1/3/1/4/2/13142.gif',
                        sets: 3,
                        reps: 10,
                        rest: 60,
                        description: 'Conduct an Archer Pull-up by gripping the pull-up bar with one hand while extending the other arm straight to the side, then perform a pull-up with emphasis on one side, targeting the upper body muscles.'
                    },
                    {
                        exercise: 'Alternate Lateral Pulldown',
                        videoUrl: 'https://gymvisual.com/img/p/4/7/3/8/4738.gif',
                        sets: 3,
                        reps: 10,
                        rest: 60,
                        description: 'Execute alternate lateral pulldowns by using a cable machine, pulling the cable down to the side with one arm while keeping the other arm extended, targeting the lat muscles.'
    
                    },
                    {
                        exercise: 'Assisted Close grip Underhand Chin up',
                        videoUrl: 'https://gymvisual.com/img/p/5/9/1/0/5910.gif',
                        sets: 3,
                        reps: 10,
                        rest: 60,
                        description: 'Perform an assisted close grip underhand chin-up by gripping the bar with palms facing you, using assistance as needed, and pulling your body up to engage the biceps and upper back muscles.'
    
                    }
                ],
            }
            break;

            case 'Biceps':
              data = {
                type: 'Biceps',
                imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
                durationInMin: 30,
                exercises: [
                    {
                        exercise: 'Assisted Standing Triceps Dip',
                        videoUrl: 'https://gymvisual.com/img/p/5/7/3/8/5738.gif',
                        sets: 3,
                        reps: 10,
                        rest: 60,
                        description: 'Conduct an assisted standing triceps dip by gripping a stable surface with hands, lowering your body by bending your elbows, and then pushing back up, engaging the triceps.'
                    },
                    {
                        exercise: 'Assisted Triceps Dip (kneeling)',
                        videoUrl: 'https://gymvisual.com/img/p/4/7/5/0/4750.gif',
                        sets: 3,
                        reps: 10,
                        rest: 60,
                        description: 'Execute an assisted triceps dip kneeling by gripping parallel bars, lowering your body by bending your elbows, and pushing back up, engaging the triceps with support on your knees.'
    
                    },
                    {
                        exercise: 'Alternate Biceps Curl (with band)',
                        videoUrl: 'https://gymvisual.com/img/p/4/7/3/6/4736.gif',
                        sets: 3,
                        reps: 10,
                        rest: 60,
                        description: 'Perform alternate biceps curls with a band by stepping on the band, gripping handles in each hand, and curling one arm at a time to target the biceps muscles.'
    
                    }
                ],
            }
            break;

            case 'Triceps':
              data = {
                type: 'Triceps',
                imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
                durationInMin: 30,
                exercises: [
                    {
                        exercise: 'Band pushdown',
                        videoUrl: 'https://gymvisual.com/img/p/5/6/3/2/5632.gif',
                        sets: 3,
                        reps: 10,
                        rest: 60,
                        description: 'Perform a band pushdown by attaching a resistance band to a high anchor, gripping it with both hands, and pushing down to extend your arms, targeting the triceps muscles.'
                    },
                    {
                        exercise: 'Band Triceps Kickback',
                        videoUrl: 'https://gymvisual.com/img/p/2/1/5/3/9/21539.gif',
                        sets: 3,
                        reps: 10,
                        rest: 60,
                        description: 'Execute a band triceps kickback by holding a resistance band, bending at the waist, and extending your arm backward, engaging the triceps muscles.'
    
                    },
                    {
                        exercise: 'Band Skull Crusher',
                        videoUrl: 'https://gymvisual.com/img/p/6/9/7/1/6971.gif',
                        sets: 3,
                        reps: 10,
                        rest: 60,
                        description: 'Perform a band skull crusher by lying on your back, holding a resistance band with extended arms, and lowering your hands towards your forehead while keeping elbows stationary to target the triceps.'
    
                    }
                ],
            }
            break;

            case 'Legs':
              data = {
                type: 'Leg',
                imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
                durationInMin: 30,
                exercises: [
                    {
                        exercise: 'Air Squat',
                        videoUrl: 'https://gymvisual.com/img/p/1/7/3/1/3/17313.gif',
                        sets: 3,
                        reps: 10,
                        rest: 60,
                        description: 'Perform air squats by standing with feet shoulder-width apart, lowering your body by bending your knees and hips, then returning to the starting position, targeting the lower body muscles.'
                    },
                    {
                        exercise: 'All Fours Squad Stretch',
                        videoUrl: 'https://gymvisual.com/img/p/6/9/7/9/6979.gif',
                        sets: 3,
                        reps: 10,
                        rest: 60,
                        description: 'Assume an all-fours position, then sit back onto your heels, stretching the hips and lower back, in the all-fours squat stretch.'
    
                    },
                    {
                        exercise: 'Assisted Bulgarian Split Squat',
                        videoUrl: 'https://gymvisual.com/img/p/2/1/6/9/1/21691.gif',
                        sets: 3,
                        reps: 10,
                        rest: 60,
                        description: 'Execute an assisted Bulgarian split squat by placing one foot on an elevated surface behind you, while using a support for balance, and lower your body into a lunge position to target the legs and glutes.'
    
                    }
                ],
            }
            break;

            case 'cardio':
              data = {
                type: 'Cardio ',
                imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
                durationInMin: 30,
                exercises: [
                    {
                        exercise: 'Astride Jumps',
                        videoUrl: 'https://gymvisual.com/img/p/1/2/9/4/4/12944.gif',
                        sets: 3,
                        reps: 10,
                        rest: 60,
                        description: 'Perform astride jumps by jumping and spreading your legs apart while in mid-air, then bringing them back together upon landing, engaging lower body muscles and improving agility.'
                    },
                    {
                        exercise: 'Assault Bike Run',
                        videoUrl: 'https://gymvisual.com/img/p/1/8/4/4/3/18443.gif',
                        sets: 3,
                        reps: 10,
                        rest: 60,
                        description: 'Engage in an Assault Bike Run by pedaling vigorously on an assault bike to elevate your heart rate and engage both upper and lower body muscles for an effective cardiovascular workout.'
    
                    },
                    {
                        exercise: 'Back And Forth Step',
                        videoUrl: 'https://gymvisual.com/img/p/1/4/7/5/4/14754.gif',
                        sets: 3,
                        reps: 10,
                        rest: 60,
                        description: 'Execute back and forth steps by stepping alternately forward and backward, engaging lower body muscles and enhancing coordination and balance.'
    
                    }
                ],
            }
            break;

            case 'Forearms':
              data = {
                type: 'Forearm',
                imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
                durationInMin: 30,
                exercises: [
                    {
                        exercise: 'Band wrist curl',
                        videoUrl: 'https://gymvisual.com/img/p/5/7/2/9/5729.gif',
                        sets: 3,
                        reps: 10,
                        rest: 60,
                        description: 'Secure a resistance band around your hand, extend your arm forward, and perform wrist curls by flexing your wrist against the resistance to target forearm muscles.'
                    },
                    {
                        exercise: 'Barbell Behind Back Finger Curl',
                        videoUrl: 'https://gymvisual.com/img/p/7/0/7/7/7077.gif',
                        sets: 3,
                        reps: 10,
                        rest: 60,
                        description: 'Hold a barbell behind your back with palms facing away, and curl your fingers upward to engage and strengthen the forearm and grip muscles.'
    
                    },
                    {
                        exercise: 'Barbell Palms Up Wrist Curl Over A Bench',
                        videoUrl: 'https://gymvisual.com/img/p/6/6/7/3/6673.gif',
                        sets: 3,
                        reps: 10,
                        rest: 60,
                        description: 'While seated with forearms resting on a bench, grasp a barbell with palms facing upward and perform wrist curls, lifting the barbell to strengthen the forearm muscles.'
    
                    }
                ],
            }
            break;
                }
        setWorkout(data)      

    }

    React.useEffect(() => {
        getworkout()
    }, [])
    return (
        <div className='workout'>
            <h1 className='mainhead1'> {workout?.type}</h1>
            <div className='workout__exercises'>
                {
                    workout?.exercises.map((item: any, index: number)=>{
                        return (
                            <div className={
                                index % 2 === 0 ? 'workout__exercise' : 'workout__exercise workout__exercise--reverse'
                            }>
                                <h3>{index+1}</h3>
                                <div className='workout__exercise__image'>
                                    <img src={item.videoUrl} alt="" />
                                </div>
                                <div className='workout__exercise__content'>
                                    <h2>{item.exercise}</h2>
                                    <span>{item.sets} sets X {item.reps} reps</span>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default page