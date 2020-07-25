import React,{ useState,useEffect } from "react"
import { fetchDailyData } from "../../api"
import styles from "./Chart.module.css"
import { Line, Bar } from 'react-chartjs-2'

const Chart=({data,country}) => {
    const [dailyData,setDailyData]=useState([])

    useEffect(() =>{
        const fetchAPI = async () =>{
            const initialDailyData = await fetchDailyData()
            setDailyData(initialDailyData)
        }
       
        fetchAPI()
    },[]);
   
    const lineChart =(
        dailyData.length
        ?(<Line 
        data={{
            labels:dailyData.map(({ date }) => date),
            datasets:[{
                  data:dailyData.map((data) => data.confirmed),
                  label:'Infected',
                  borderColor: "#1a66ff",
                  fill:true, 
            },{
                data:dailyData.map((data) => data.deaths),
                label:'Deaths',
                borderColor:'red',
                backgroundColor:'rgba(255,0,0,0.5)',
                fill:true,
            },],
        }}
        options={{
            maintainAspectRatio:false,
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {   // To format the scale Lebel
                        display: true,
                        //labelString: 'X axe name',
                        fontColor:'white',
                        fontSize:10
                    },
                    ticks: {
                       fontColor: "#d1c5c5", // To format the ticks, coming on the axis/lables which we are passing.
                       fontSize: 14
                      }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {   // To format the scale Lebel
                        display: true,
                        labelString: '<-----Number of people---->',
                        fontColor:'#d1c5c5',
                        fontSize:10
                    },
                    ticks: {
                       fontColor: "#d1c5c5", // To format the ticks, coming on the axis/lables which we are passing.
                       fontSize: 14
                      }
                }]
            }
        }}
        
        />):null
    )
    const barChart =(
        data.confirmed
        ? (
            <Bar 
                data={{
                    labels:['infected','recovered','Deaths'],
                    datasets:[{
                        label:'people',
                        backgroundColor:["steelblue","rgba(0, 255,0, 0.5)","red"],
                        data:[data.confirmed.value,data.recovered.value,data.deaths.value]
                    }]
                }}
                options={{
                    legend:{display:false},
                    title:{display:true,text:`current state in ${country}`},
                    maintainAspectRatio:false,
                    scales: {
                        xAxes: [{
                            display: true,
                            scaleLabel: {   // To format the scale Lebel
                                display: true,
                                //labelString: 'X axe name',
                                fontColor:'white',
                                fontSize:10
                            },
                            ticks: {
                               fontColor: "#d1c5c5", // To format the ticks, coming on the axis/lables which we are passing.
                               fontSize: 13
                              }
                        }],
                        yAxes: [{
                            display: true,
                            scaleLabel: {   // To format the scale Lebel
                                display: true,
                                labelString: '<-----Number of people---->',
                                fontColor:'#d1c5c5',
                                fontSize:10
                            },
                            ticks: {
                               fontColor: "#d1c5c5", // To format the ticks, coming on the axis/lables which we are passing.
                               fontSize: 14
                              }
                        }]
                    }

                }}
            />
        ): null
    )
    return(
        <div className={styles.container}>
            {country ? barChart:lineChart}
        </div>
    )
}  
export default Chart