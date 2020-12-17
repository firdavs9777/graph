import React from 'react';
import {Bar} from 'react-chartjs-2'
function BarChart()
{
    const data = {
        labels:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        datasets:[
            {
                label:'Added Points',
                data:[12000,2200,11000,10000,9000,12500,7000],
                backgroundColor:[
                    '#003f5c',
                    '#003f5c',
                    '#003f5c',
                    '#003f5c',
                    '#003f5c',
                    '#003f5c',
                    '#003f5c',
                ],
            
            },
            {
            label:'Used Points',
                data:[11000,2200,11000,10000,9000,12500,7000],
                backgroundColor:[
                    '#ff6e54',
                    '#ff6e54',
                    '#ff6e54',
                    '#ff6e54',
                    '#ff6e54',
                    '#ff6e54',
                    '#ff6e54',
                ],
  
            }
        ]
    }
    const options = {
        title:{
            display:true,
            text:'Weekly Chart'
        },
        scales:{
            yAxes:[
                {
                    ticks:{
                        min:0,
                        max:24000,
                        stepSize:6000
                    }
                }
            ]
        }
    }
    return <Bar data={data} options={options}/>
}
export default BarChart;