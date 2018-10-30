import React from 'react';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

class ColumnGraph extends React.Component{
    render() {
        
        const options = {
            chart: {
                type: 'column',
                zoomType: 'x',
                spacingBottom: 15,
                spacingTop: 10,
                spacingLeft: 10,
                spacingRight: 10,
        
                // Explicitly tell the width and height of a chart
                width: null,
                height: 200
            },
            title: {
                text: this.props.name,
                align:'left'
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