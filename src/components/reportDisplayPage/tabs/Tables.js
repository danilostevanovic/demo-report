import React from 'react';
import { Grid, Row, Col, } from 'react-bootstrap';
import TablesStatus from './TablesStatus/TablesStatus';



const Tables = () => (
    <div>
        <Grid>
            <Row>
                <Col md={4}>
                    <TablesStatus />
                </Col>
            </Row>
        </Grid>
    </div>
)

export default Tables;