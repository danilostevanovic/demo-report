import React from 'react';
import { Grid, Row, Col, } from 'react-bootstrap';
import TablesStatus from './TablesStatus/TablesStatus';
import TableBitRates from './TableBitRates/TableBitRates';
import TableWifiStatus from './TableWifiStatus/TableWifiStatus';
import TableChanelStatus from './TableChanel/TableChanelStatus';
import HgwInfo from '../HGwIinfo/HgwInfo';


class Tables extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showInfo: true
        }
    }
    showInfo = () => {
        this.setState((prevState) => ({ showInfo: !prevState.showInfo }))
    }
    render() {
        return (
            <div>
                <Grid fluid={true}>
                    <Row>
                        <Col md={12}>
                            <div className="buttton-area">
                                <button onClick={this.showInfo} className={this.state.showInfo ? "hgwButton-active" : "hgwButton"}>HGw Info</button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} md={2} lg={3}>
                            <TablesStatus data={this.props.data} />
                        </Col>
                        <Col sm={6} md={2} lg={3}>
                            <TableBitRates data={this.props.data} />
                        </Col>
                        <Col sm={6} md={3} lg={2} >
                            <TableWifiStatus data={this.props.data} />
                        </Col>
                        <Col sm={6} md={3} lg={2}>
                            <TableChanelStatus data={this.props.data} />
                        </Col>
                        <Col sm={1} md={1}>
                            {this.state.showInfo && <HgwInfo />}
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Tables;