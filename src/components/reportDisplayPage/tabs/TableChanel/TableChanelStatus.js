import React from 'react';
import PieChart from 'react-minimal-pie-chart';

const pieColor = {
    green: '#3AE996',
    blue: '#1BA3EB',
    lightBlue: '#8CFDFE',
    grey: '#CCD2D3',
    orange: '#FC9A0C',
    red: '#F6575B'
}
const TableChanelStatus = (props) => (
    <div>
        <div className="card">
            <div className="wifi__status">
                <p className="wifi__status-header">HGw Chanel</p>
                <div className="wifi__status-data">
                    <div className="wifi__status-data-proc">
                        <ul className="wifi__status-list">
                            <li className="wifi__status-list-proc-lightBlue">{`${props.data[0].tables.HGwInteferenceHome}%`}</li>
                            <li className="wifi__status-list-proc-blue">{`${props.data[0].tables.HGwTimeWithStickyClients}%`}</li>
                        </ul>
                    </div>
                    <div className="wifi__status-data-bullet">
                        <ul className="wifi__status-list">
                            <li className="wifi__status-list-lightBlue">Auto:Yes</li>
                            <li className="wifi__status-list-blue">Auto:Yes</li>
                        </ul>
                    </div>
                    <div className="wifi__status-data-pie">
                    <p className="wifi__status-total-green">{`${props.data[0].tables.HGwInteferenceHome}%`}</p>
                        <PieChart
                            lineWidth={30}
                            rounded={30}
                            animate={true}
                            animationDuration={500}
                            animationEasing={"ease-out"}
                            data={[
                                { value: props.data[0].tables.HGwWifiUsage, color: pieColor.lightBlue },
                                { value: props.data[0].tables.WifiConectionTime, color: pieColor.blue },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="wifi__status">
                <p className="wifi__status-header">Hgw Percent of  Sticky Clients</p>
                <div className="wifi__status-data">
                    <div className="wifi__status-data-bullet">
                        <ul className="wifi__status-list">
                            <li className="wifi__status-list-blue">Percent of time with sith sticky Clients</li>
                        </ul>
                    </div>
                    <div className="wifi__status-data-pie">
                    <p className="wifi__status-total-blue">{`${props.data[0].tables.HGwTimeWithStickyClients}%`}</p>
                        <PieChart
                            lineWidth={30}
                            rounded={30}
                            animate={true}
                            animationDuration={500}
                            animationEasing={"ease-out"}
                            data={[
                                { value: props.data[0].tables.HGwTimeWithStickyClients, color: pieColor.blue },
                                { value: props.data[0].tables.WifiConectionTime, color: pieColor.grey },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="wifi__status">
                <p className="wifi__status-header">HGw  RSS status</p>
                <div className="wifi__status-data">
                    <div className="wifi__status-data-proc">
                        <ul className="wifi__status-list">
                            <li className="wifi__status-list-proc-green">{`${props.data[0].tables.HGwRssStatus}%`}</li>
                            <li className="wifi__status-list-proc-orange">{`${props.data[0].tables.HGwTimeWithStickyClients}%`}</li>
                            <li className="wifi__status-list-proc-red">{`${props.data[0].tables.HGwTimeWithStickyClients}%`}</li>
                        </ul>
                    </div>
                    <div className="wifi__status-data-bullet">
                        <ul className="wifi__status-list">
                            <li className="wifi__status-list-green">Good</li>
                            <li className="wifi__status-list-orange">Medium</li>
                            <li className="wifi__status-list-red">Bad</li>
                        </ul>
                    </div>
                    <div className="wifi__status-data-pie">
                    <p className="wifi__status-total-green">{`${props.data[0].tables.HGwRssStatus}%`}</p>
                        <PieChart
                            lineWidth={30}
                            rounded={30}
                            animate={true}
                            animationDuration={500}
                            animationEasing={"ease-out"}
                            data={[
                                { value: props.data[0].tables.HGwRssStatus, color: pieColor.green },
                                { value: props.data[0].tables.WifiConectionTime, color: pieColor.red },
                                { value: props.data[0].tables.HGwWifiUsage, color: pieColor.orange },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="wifi__status">
                <p className="wifi__status-header">HGw Client's RSS status</p>
                <div className="wifi__status-data">
                    <div className="wifi__status-data-proc">
                        <ul className="wifi__status-list">
                            <li className="wifi__status-list-proc-green">{`${props.data[0].tables.HGwInteferenceSecondUse}%`}</li>
                            <li className="wifi__status-list-proc-orange">{`${props.data[0].tables.HGwTimeWithStickyClients}%`}</li>
                            <li className="wifi__status-list-proc-red">{`${props.data[0].tables.HGwTimeWithStickyClients}%`}</li>
                        </ul>
                    </div>
                    <div className="wifi__status-data-bullet">
                        <ul className="wifi__status-list">
                            <li className="wifi__status-list-green">Good</li>
                            <li className="wifi__status-list-orange">Medium</li>
                            <li className="wifi__status-list-red">Bad</li>
                        </ul>
                    </div>
                    <div className="wifi__status-data-pie">
                    <p className="wifi__status-total-green">{`${props.data[0].tables.HGwInteferenceSecondUse}%`}</p>
                        <PieChart
                            lineWidth={30}
                            rounded={30}
                            animate={true}
                            animationDuration={500}
                            animationEasing={"ease-out"}
                            data={[
                                { value: props.data[0].tables.HGwRssStatus, color: pieColor.green },
                                { value: props.data[0].tables.WifiConectionTime, color: pieColor.red },
                                { value: props.data[0].tables.HGwWifiUsage, color: pieColor.orange },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default TableChanelStatus;