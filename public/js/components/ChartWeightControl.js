import React from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class ChartWeightControl extends React.Component {
    constructor (props) {
        super(props)    
        this.state = {
            chartData:{
                labels: [],
                datasets:[
                {
                    label: '',
                    data:[],
                    backgroundColor:[ ]
                }]
            }
        }
    }

    componentWillMount() {
        let d = new Date();
        let y = d.getFullYear().toString();
        let year = y.substr(2);

        $.ajax({
          url: "/api/v1/elderly/getChart",
          dataType: "json",
          method: "GET",
          success:function(response){

            this.setState({chartData: {labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'] } });
            
            this.setState({
                chartData: {
                    datasets: [{ 
                        label: 'Peso Kg.',
                        borderColor: "rgba(136, 26, 26, 0.5)", pointRadius: 5, pointBackgroundColor: "rgba(136, 26, 26, 0.5)", pointBorderColor: "rrgba(136, 26, 26, 0.5)", pointHoverRadius: 5, pointHoverBackgroundColor: "rgba(136, 26, 26, 0.5)", pointHitRadius: 20, pointBorderWidth: 2,
                        data: [response.weight[year]['01'], response.weight[year]['02'], response.weight[year]['03'], response.weight[year]['04'], response.weight[year]['05'], response.weight[year]['06'], response.weight[year]['07'], response.weight[year]['08'], response.weight[year]['09'], response.weight[year]['10'], response.weight[year]['11'], response.weight[year]['12']],
                        backgroundColor: ['rgba(136, 26, 26, 0.4)', 'rgba(136, 26, 26, 0.7)', 'rgba(136, 26, 26, 0.4)']
                    }],  
                } 
            });
          }.bind(this)
        });
    }

  render () {
    return (
        <div className="chart">
            <Line
              data={this.state.chartData}
              options={{
                title:{
                    display:false,
                },
                legend:{
                    display:true,
                    position:'left'
                }
              }}              
            />
        </div>
    )
  }

}

  export default ChartWeightControl;