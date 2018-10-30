import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import GraphCard from './graphsDetails/GraphCard';
import BasicAreaGraph from './graphsDetails/ColumnGraph';
import ColumnGraph from './graphsDetails/ColumnGraph';
import TimeSeriesGraph from './graphsDetails/TimeSeriesGraph';
import ResponsiveGraph from './graphsDetails/ResponsiveGraph';

class Graphs extends React.Component {

    render() {
        const data = this.props.data[0].graphs;
        return (
            <div>
                <Grid>
                    <Row >
                        <Col md={6}>
                            <GraphCard>
                                <TimeSeriesGraph name={'HGw status'} data={[...data.bitRate]} />
                            </GraphCard>
                        </Col>
                        <Col md={6}>
                            <GraphCard>
                                <BasicAreaGraph name={'Hgw status rss'} data={[...data.status]} data1={[...data.numberOfRetransimission]} data2={[...data.numberOfClients]} />
                            </GraphCard>
                        </Col>
                    </Row>
                    <Row >
                        <Col md={6}>
                            <GraphCard>
                                <ColumnGraph name={'HGW Inerterence'} data={[...data.interterence]}  data1={[...data.TotalNoOfInteferenceNetwork]} data2={[...data.bitRate]} data3={[...data.RSS]}/>
                            </GraphCard>
                        </Col>
                        <Col md={6}>
                            <GraphCard>
                                <ResponsiveGraph name={'Total No. Of interference Network'} data={[...data.status]}  />
                            </GraphCard>
                        </Col>
                    </Row>
                    <Row >
                    <Col md={6}>
                        <GraphCard>
                            <TimeSeriesGraph name={'HGw RSS'} data={[...data.bitRate]} />
                        </GraphCard>
                    </Col>
                    <Col md={6}>
                        <GraphCard>
                            <BasicAreaGraph name={'Hgw Bit rate'} data={[...data.status]} data1={[...data.numberOfRetransimission]} data2={[...data.numberOfClients]} />
                        </GraphCard>
                    </Col>
                </Row>
                <Row >
                    <Col md={6}>
                            <GraphCard>
                                <ColumnGraph name={'HGW Number of transmmisions'} data={[...data.interterence]}  data1={[...data.TotalNoOfInteferenceNetwork]} data2={[...data.bitRate]} data3={[...data.RSS]}/>
                            </GraphCard>
                        </Col>
                        <Col md={6}>
                            <GraphCard>
                                <ResponsiveGraph name={'HGw Number of clients'} data={[...data.status]}  />
                            </GraphCard>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
export default Graphs;