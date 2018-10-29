import React from 'react';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

class BasicAreaGraph extends React.Component {

    render() {
        const options = {
            chart: {
                type: 'area'
            },
            title: {
                text: this.props.name
            },
            xAxis: {
                allowDecimals: false,
                labels: {
                    formatter: function () {
                        return this.value; // clean, unformatted number for year
                    }
                }
            },
            yAxis: {
                title: {
                    text: this.props.name
                },
                labels: {
                    formatter: function () {
                        return this.value / 1000 + 'k';
                    }
                }
            },
            plotOptions: {
                area: {
                    pointStart: 1940,
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            },
            series: [{
                name: 'Maximum',
                data: this.props.data
            }, {
                name: 'Averge',
                data: this.props.data1 || this.props.data
            },{
                name:'Minimum',
                data:this.props.data2 || this.props.data
            }]
                
        }
        return (
            <div>
                <HighchartsReact
                    constructorType={'chart'}
                    highcharts={Highcharts}
                    options={options}
                />

            </div>
        )
    }
}
export default BasicAreaGraph