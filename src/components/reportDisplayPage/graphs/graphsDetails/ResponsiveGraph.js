import React from 'react';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

class ResponsiveGraph extends React.Component {

    render() {
        const data = this.props.data[0].graphs
        const options = {
            
    
            title: {
                text: this.props.name,
                align:'left'
            },
    
            chart: {
                zoomType: 'x',
                spacingBottom: 15,
                spacingTop: 10,
                spacingLeft: 10,
                spacingRight: 10,
        
                // Explicitly tell the width and height of a chart
                width: null,
                height: 200
            },
    
            series: [{
                name: 'Max',
                data: this.props.data,
                type: 'area',
                threshold: null,
            }],
    
          
                
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