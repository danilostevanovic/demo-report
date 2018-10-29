import React from 'react';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

class ColumnGraph extends React.Component{
    render() {
        
        const options = {
            chart: {
                type: 'column'
            },
            title: {
                text: this.props.name
            },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Inteference'
                    }
                },
            series: [{
                name:'A',
                data: this.props.data
            },
            {
                name:'B',
                data: this.props.data1 || this.props.data
            },
            {
                name:'C',
                data: this.props.data2 || this.props.data
            },
            {
                name:'D',
                data: this.props.data3 || this.props.data
            }]
        }
        return (
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />

            </div>
        )
    }
}
export default ColumnGraph ;