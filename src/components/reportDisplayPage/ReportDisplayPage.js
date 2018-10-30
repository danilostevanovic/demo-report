import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import getData from '../../selectors/data';
import { Tabs, Tab } from 'react-bootstrap';
import Tables from './tabs/Tables';
import HgwInfo from './HGwIinfo/HgwInfo';
import Graphs from './graphs/Graphs';




class ReportDisplayPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showInfo: false,
        }
    }
    showInfo = () => {
        this.setState((prevState) => ({ showInfo: !prevState.showInfo }))
    }
    render() {
        return (
            <div>
                <Tabs defaultActiveKey={2} id="Tabs" animation={false} >
                    <Tab eventKey={1} title="Table">
                    {this.props.data.length === 0? <h1>There is no data at this time</h1>:<Tables />}
                    </Tab>
                    <Tab eventKey={2} title="Graphs" animation={false} id='Graphs' onSelect={this.reloadGraphs}>
                        {this.props.data.length === 0 ? <h1>There is no data at this time</h1> : (
                            <div>
                                <Grid>
                                    <Row>
                                        <Col md={13}>
                                            <div className="buttton-area">
                                                <button onClick={this.showInfo} className={this.state.showInfo ? "hgwButton-active" : "hgwButton"}>HGw Info</button>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={10}>
                                            <Graphs data={this.props.data} info={this.state.showInfo} />
                                        </Col>
                                        <Col md={2}>{this.state.showInfo && <HgwInfo />}</Col>
                                    </Row>
                                </Grid>
                            </div>
                        )}
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