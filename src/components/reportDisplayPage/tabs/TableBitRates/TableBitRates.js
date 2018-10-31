import React from 'react';

const TableBitRates = (props) => (
    <div>
        <div className="tabs__bitRate">
            <p className="tabs__bitRate-header">Hgw Bitrate[Mbps]</p>
            <div className="tabs__bitRate-table">
                <table>
                    <tr>
                        <td colSpan="2" className="tabs__bitRate-table-headerName">KPI Name</td>
                        <td className="tabs__bitRate-table-valueSet">Min</td>
                        <td className="tabs__bitRate-table-valueSet">Avg</td>
                        <td className="tabs__bitRate-table-valueSet">Max</td>
                        <td className="tabs__bitRate-table-valueSet">Last</td>
                    </tr>
                    <tr style={{ background: '#F7F1F3' }}>
                        <td colSpan="2" className="tabs__bitRate-table-headerValue">Bitrate</td>
                        {props.data[0].tables.HGwBitrate.map((rate, index) => {
                            return (<td className={index !== 1 ? "tabs__bitRate-value" : "tabs__bitRate-value-red"} key={index}>{rate}</td>)
                        })}
                    </tr>
                </table>
            </div>
        </div>
        <div className="tabs__status">
            <div className="tabs__status-data">
                <p className="tabs__status-header"> HGW total trafic [GB]</p>
                <p className="tabs__status-value-number">{props.data[0].tables.HGwTotalTrafic}</p>
            </div>
        </div>
        <div className="tabs__bitRate">
            <p className="tabs__bitRate-header">Hgw RSS</p>
            <div className="tabs__bitRate-table">
                <table>
                    <tr>
                        <td colSpan="2" className="tabs__bitRate-table-headerName">KPI Name</td>
                        <td className="tabs__bitRate-table-valueSet">Min</td>
                        <td className="tabs__bitRate-table-valueSet">Avg</td>
                        <td className="tabs__bitRate-table-valueSet">Max</td>
                        <td className="tabs__bitRate-table-valueSet">Last</td>
                    </tr>
                    <tr style={{ background: '#F7F1F3' }}>
                        <td colSpan="2" className="tabs__bitRate-table-headerValue">{`RSS[dBm]`}</td>
                        {props.data[0].tables.HGwRss.map((rate, index) => {
                            return (<td className={index !== 1 ? "tabs__bitRate-value" : "tabs__bitRate-value-red"} key={index}>{rate}</td>)
                        })}
                    </tr>
                </table>
            </div>
        </div>
        <div className="tabs__bitRate">
            <p className="tabs__bitRate-header">Hgw Inteference network RSS</p>
            <div className="tabs__bitRate-table">
                <table>
                    <tr>
                        <td colSpan="2" className="tabs__bitRate-table-headerName">KPI Name</td>
                        <td className="tabs__bitRate-table-valueSet">Min</td>
                        <td className="tabs__bitRate-table-valueSet">Avg</td>
                        <td className="tabs__bitRate-table-valueSet">Max</td>
                        <td className="tabs__bitRate-table-valueSet">Last</td>
                    </tr>
                    <tr style={{ background: '#F7F1F3' }}>
                        <td colSpan="2" className="tabs__bitRate-table-headerValue">{`RSS[dBm]`}</td>
                        {props.data[0].tables.HGwInteferenceNetworkRSS.map((rate, index) => {
                            return (<td className={index !== 1 ? "tabs__bitRate-value" : "tabs__bitRate-value-red"} key={index}>{rate}</td>)
                        })}
                    </tr>
                </table>
            </div>
        </div>
    </div>
)


export default TableBitRates;