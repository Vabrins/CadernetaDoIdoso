import React from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class ChartGlucoseControl extends React.Component {
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
                        label: 'Glicose mg / dL',
                        data: [response.glucose[year]['01'], response.glucose[year]['02'], response.glucose[year]['03'], response.glucose[year]['04'], response.glucose[year]['05'], response.glucose[year]['06'], response.glucose[year]['07'], response.glucose[year]['08'], response.glucose[year]['09'], response.glucose[year]['10'], response.glucose[year]['11'], response.glucose[year]['12']],
                        backgroundColor: "rgba(2,117,216,1)",
                        borderColor: "rgba(2,117,216,1)"
                    }],  
                } 
            });
          }.bind(this)
        });
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
                    position:'left'
                }
              }}              
            />
        </div>
    )
  }

}

  export default ChartGlucoseControl;