import React from 'react';
import { connect } from 'react-redux';
import getData from '../../selectors/data';
import { Tabs, Tab, TabContainer, TabContent } from 'react-bootstrap';
import Graphs from './graphs/Graphs';




class ReportDisplayPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showInfo: false
        }
    }
    componentDidUpdate() {
        console.log('provera', this.props.data)
    }
    render() {
        return (
            <div>
                <Tabs defaultActiveKey={2} id="uncontrolled-tab-example" className="tab">
                    <Tab eventKey={1} title="Table">


                    </Tab>
                    <Tab eventKey={2} title="Graphs" className="tab-content">
                        {this.props.data.length === 0 ? <h1>There is no data at this time</h1> : <Graphs data={this.props.data} info={this.state.showInfo} />}
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