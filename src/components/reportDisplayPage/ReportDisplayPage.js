import React from 'react';
import { connect } from 'react-redux';
import getData from '../../selectors/data';
import { Tabs, Tab } from 'react-bootstrap';


class ReportDisplayPage extends React.Component {
    componentDidUpdate() {
        console.log('provera', this.props.data)
    }
    render() {
        return (
            <div>
                <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="Table">
                        {this.props.data.length === 0 && <h1>There is no data at  this time</h1>}
                    </Tab>
                    <Tab eventKey={2} title="Graphs">
                    {this.props.data.length === 0 && <h1>There is no data at  this time</h1>}
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