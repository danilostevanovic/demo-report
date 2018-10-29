import React from 'react';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import BasicAreaGraph from './graphsDetails/ColumnGraph';
import ColumnGraph from './graphsDetails/ColumnGraph';
import TimeSeriesGraph from './graphsDetails/TimeSeriesGraph';

class Graphs extends React.Component {

    render() {
        const data = this.props.data[0].graphs;
        return (
            <div>
              
                 <TimeSeriesGraph name={'Status'} data={[...data.bitRate]} />  
              
            </div>
        )
    }
}
export default Graphs;