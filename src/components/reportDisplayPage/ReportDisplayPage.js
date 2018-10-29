import React from 'react';
import { connect } from 'react-redux';
import getData from '../../selectors/data';
import { Tabs, Tab } from 'react-bootstrap';
import Graphs from './graphs/Graphs';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'


const options = {
    chart: {
        type: 'histogram'
    },
    title: {
        text: 'HGw Inteference'
    },
    series: [{
        data: [3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4]
    }]
}

class ReportDisplayPage extends React.Component {
    componentDidUpdate() {
        console.log('provera', this.props.data)
    }
    render() {
        return (
            <div>
                <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">

                    <Tab eventKey={1} title="Table">


                    </Tab>
                    <Tab eventKey={2} title="Graphs">
                        {this.props.data.length === 0 ? <h1>There is no data at this time</h1> : <Graphs data={this.props.data} />}
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: getData(state.data, state.filters)
    }
}
export default connect(mapStateToProps)(ReportDisplayPage);