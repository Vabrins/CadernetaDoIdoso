import React from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class ChartWeightControl extends React.Component {
    constructor (props) {
        super(props)    
        this.state = {
            chartData:{
                labels:['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
                datasets:[
                {
                    label: 'Peso',
                    data:[
                        73,
                        72.500,
                        77,
                        83,
                        80,
                        76.700,
                        74,
                        75.541,
                        78.378,
                        77,
                        79.222,
                        78.322
                    ],
                        backgroundColor:[
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(54, 99, 133, 0.2)',
                        'rgba(54, 65, 235, 0.2)',
                        'rgba(255, 206, 54, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 64, 255, 0.2)',
                        'rgba(255, 55, 64, 0.2)',
                    ]
                }]
            }
        }
    }

  render () {
    return (
        <div className="chart">
            <Bar
              data={this.state.chartData}
              options={{
                title:{
                    display:false,
                },
                legend:{
                    display:true,
                    position:'bottom'
                }
              }}              
            />
        </div>
    )
  }

}

  export default ChartWeightControl;