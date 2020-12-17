import React from 'react';
import {Bar} from 'react-chartjs-2';
function MonthlyBar()
{
    const data = {
        labels:['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
        datasets:[
            {
                label:'Added Points',
                data:[120000,22000,110000,100000,90000,102500,70000,0,0,0,0,0,0,10,0,1000,2000,3000,4000,5000,5000,500,10,20,30,40,50,60,70,100],
                backgroundColor:[
                    '#003f5c',
                    '#003f5c',
                    '#003f5c',
                    '#003f5c',
                    '#003f5c',
                    '#003f5c',
                    '#003f5c',
                    '#003f5c',
                    '#003f5c',
                    '#003f5c',
                    '#003f5c',
                    '#003f5c',
                    '#003f5c',
                    '#003f5c',
                    '#003f5c',
                    '#003f5c',
                    '#003f5c',
                    '#003f5c',
                    '#003f5c',
                    '#003f5c',
                    '#003f5c',
                    '#003f5c',
                    '#003f5c',
                    '#003f5c',
                    '#003f5c',
                    '#003f5c',
                    '#003f5c',
                    '#003f5c',  
                    '#003f5c',
                    '#003f5c'
                ],
            
            },
            {
            label:'Used Points',
            data:[120000,22000,110000,100000,90000,102500,70000,10,0,0,0,0,0,10,0,1000,2000,3000,4000,5000,5000,500,1000,2000,3000,40000,50,60,70,100],
                backgroundColor:[
                    '#ff6e54',
                    '#ff6e54',
                    '#ff6e54',
                    '#ff6e54',
                    '#ff6e54',
                    '#ff6e54',
                    '#ff6e54',
                    '#ff6e54',
                    '#ff6e54',
                    '#ff6e54',
                    '#ff6e54',
                    '#ff6e54',
                    '#ff6e54',
                    '#ff6e54',
                    '#ff6e54',
                    '#ff6e54',
                    '#ff6e54',
                    '#ff6e54',
                    '#ff6e54',
                    '#ff6e54',
                    '#ff6e54',
                    '#ff6e54',
                    '#ff6e54',
                    '#ff6e54',
                    '#ff6e54',
                    '#ff6e54',
                    '#ff6e54',
                    '#ff6e54',
                    '#ff6e54',
                    '#ff6e54'
                  
                ],
  
            }
        ]
    }
    const options = {
        title:{
            display:true,
            text:'Monthly Chart Schedule'
        },
        scales:{
            yAxes:[
                {
                    ticks:{
                        min:0,
                        max:600000,
                        stepSize:150000
                    }
                }
            ]
        }
    }
    return <Bar data={data} options={options}/>
}
export default MonthlyBar;