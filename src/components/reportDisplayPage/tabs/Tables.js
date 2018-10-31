import React from 'react';
import { Grid, Row, Col, } from 'react-bootstrap';
import TablesStatus from './TablesStatus/TablesStatus';
import TableBitRates from './TableBitRates/TableBitRates';
import TableWifiStatus from './TableWifiStatus/TableWifiStatus';




const Tables = (props) => (
    <div>
        <Grid fluid={true}>
            <Row>
                <Col md={3}>
                    <TablesStatus data={props.data} />
                </Col>
                <Col md={3}>
                    <TableBitRates data={props.data} />
                </Col>
                <Col md={2}>
                    <TableWifiStatus data={props.data} />
                </Col>
            </Row>
        </Grid>
    </div>
)

export default Tables;