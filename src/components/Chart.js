import React, {Component} from 'react'
import { Bar } from 'react-chartjs-2';
import Button from 'react-bootstrap'
class Chart extends Component{
    constructor(props){
        super(props)
        this.state={
            chartData:{
                labels:[1,2,3,4,5,6,7,8,9,10],
                datasets:[{
                    label:'Asset balance',
                    data:[
                        140, 180,260,340,490,590, 650, 790, 810, 930
                    ],
                    backgroundColor:'#1a75ff'
                }]
            }
        }
    }
    render(){
        return(
          <div style={{backgroundColor:'white'}}>
          <div style={{marginLeft:'65rem', marginTop:'2rem'}}>
          <button type="button" className="btn btn-primary">10 y</button><button type="button" className="btn btn-light">20 y</button><button type="button" className="btn btn-primary">30 y</button>
            </div>
            <div className='chart col-md-7 offset-md-3 my-3'>
                <Bar
                  data={this.state.chartData}
                  width={100}
                  height={300}
                  options={{ maintainAspectRatio: false, title:{display:true, text:'Annual Projection'},
                  legend:{display:true, position:'right'}, bar: {groupWidth: "40%"}, scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Assets balance (In Lakhs)',
      
      }
    }],
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'No. of years',
        
      }
    }],
  } }}
                  />
            </div>
            </div>
        )
    }
}

export default Chart
