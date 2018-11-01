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

const TableWifiStatus = (props) => (
    <div>
        <div className="card">
            <div className="wifi__status">
                <p className="wifi__status-header">Wifi connected time</p>
                <div className="wifi__status-data">
                    <div className="wifi__status-data-bullet">
                        <ul className="wifi__status-list">
                            <li className="wifi__status-list-green">Percent of time with connected users</li>
                        </ul>
                    </div>
                    <div className="wifi__status-data-pie">
                        <p className="wifi__status-total-green">{`${props.data[0].tables.HGwWifiUsage}%`}</p>
                        <PieChart
                            lineWidth={30}
                            rounded={30}
                            animate={true}
                            animationDuration={500}
                            animationEasing={"ease-out"}
                            data={[
                                { value: props.data[0].tables.HGwWifiUsage, color: pieColor.green },
                                { value: props.data[0].tables.WifiConectionTime, color: pieColor.grey },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="wifi__status">
                <p className="wifi__status-header">HGw Wifi Usage</p>
                <div className="wifi__status-data">
                    <div className="wifi__status-data-proc">
                        <ul className="wifi__status-list">
                            <li className="wifi__status-list-proc-green">{`${props.data[0].tables.HGwWifiUsage}%`}</li>
                            <li className="wifi__status-list-proc-orange">{`${props.data[0].tables.WifiConectionTime}%`}</li>
                            <li className="wifi__status-list-proc-red">{`${props.data[0].tables.HGwWifiUsage}%`}</li>
                        </ul>
                    </div>
                    <div className="wifi__status-data-bullet">
                        <ul className="wifi__status-list">
                            <li className="wifi__status-list-green">Low</li>
                            <li className="wifi__status-list-orange">Medium</li>
                            <li className="wifi__status-list-red">High</li>
                        </ul>
                    </div>
                    <div className="wifi__status-data-pie">
                    <p className="wifi__status-total-green">{`${props.data[0].tables.HGwWifiUsage}%`}</p>
                        <PieChart
                            lineWidth={30}
                            rounded={30}
                            animate={true}
                            animationDuration={500}
                            animationEasing={"ease-out"}
                            data={[
                                { value: props.data[0].tables.HGwWifiUsage, color: pieColor.green },
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
                <p className="wifi__status-header">HGw Inteference</p>
                <div className="wifi__status-data">
                    <div className="wifi__status-data-proc">
                        <ul className="wifi__status-list">
                            <li className="wifi__status-list-proc-green">{`${props.data[0].tables.HGwInteferenceHome}%`}</li>
                            <li className="wifi__status-list-proc-orange">{`${props.data[0].tables.HGwTimeWithStickyClients}%`}</li>
                            <li className="wifi__status-list-proc-red">{`${props.data[0].tables.HGwTimeWithStickyClients}%`}</li>
                        </ul>
                    </div>
                    <div className="wifi__status-data-bullet">
                        <ul className="wifi__status-list">
                            <li className="wifi__status-list-green">Low</li>
                            <li className="wifi__status-list-orange">Medium</li>
                            <li className="wifi__status-list-red">High</li>
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
                                { value: props.data[0].tables.HGwWifiUsage, color: pieColor.green },
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
                <p className="wifi__status-header">HGw Home</p>
                <div className="wifi__status-data">
                    <div className="wifi__status-data-proc">
                        <ul className="wifi__status-list">
                            <li className="wifi__status-list-proc-green">{`${props.data[0].tables.HGwInteferenceSecondUse}%`}</li>
                            <li className="wifi__status-list-proc-orange">{`${props.data[0].tables.HGwTotalTrafic}%`}</li>
                            <li className="wifi__status-list-proc-red">{`${props.data[0].tables.HGwWifiUsage}%`}</li>
                        </ul>
                    </div>
                    <div className="wifi__status-data-bullet">
                        <ul className="wifi__status-list">
                            <li className="wifi__status-list-green">Low</li>
                            <li className="wifi__status-list-orange">Medium</li>
                            <li className="wifi__status-list-red">High</li>
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
                                { value: props.data[0].tables.HGwWifiUsage, color: pieColor.green },
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

export default TableWifiStatus;