import React from 'react';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

class ResponsiveGraph extends React.Component {

    render() {
        const data = this.props.data[0].graphs.interterence;
        const options = {
            
    
            title: {
                text: this.props.name
            },
    
    
            rangeSelector: {
                selected: 1
            },
    
            series: [{
                name: 'AAPL Stock Price',
                data: this.props.data,
                type: 'area',
                threshold: null,
                tooltip: {
                    valueDecimals: 2
                }
            }],
    
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        chart: {
                            height: 300
                        },
                        subtitle: {
                            text: null
                        },
                        navigator: {
                            enabled: false
                        }
                    }
                }]
            }
                
        }
        return (
            <div>
                <HighchartsReact
                    constructorType={'stockChart'}
                    highcharts={Highcharts}
                    options={options}
                />

            </div>
        )
    }
}
export default ResponsiveGraph;