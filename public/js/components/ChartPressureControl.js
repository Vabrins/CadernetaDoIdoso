import React from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class ChartPressureControl extends React.Component {
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
            console.log(response);
            this.setState({
                chartData: {
                    datasets: [{ 
                        label: 'Controle de Pressão mmHg',
                        data: [response.pressure[year]['01'], response.pressure[year]['02'], response.pressure[year]['03'], response.pressure[year]['04'], response.pressure[year]['05'], response.pressure[year]['06'], response.pressure[year]['07'], response.pressure[year]['08'], response.pressure[year]['09'], response.pressure[year]['10'], response.pressure[year]['11'], response.pressure[year]['12']],
                        backgroundColor: "#28a745",
                        borderColor: "#b3ed6d"
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

  export default ChartPressureControl;