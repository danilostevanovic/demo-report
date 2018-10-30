import React from 'react';
import { connect } from 'react-redux';
import getData from '../../../../selectors/data';


class TablesStatus extends React.Component {
    getColor = (status) => {
        if (status === 'Bad') {
            return 'red'
        } else if (status === 'Good') {
            return '#1AFB8E'
        } else {
            return '#E3A448'
        }
    }
    render() {
        let table = this.props.data[0].tables;
        return (
            <div>
                <div className="tabs__status">
                    <div className="tabs__status-data">
                        <p className="tabs__status-header">Overal status</p>
                        <p className="tabs__status-value" style={{ background: this.getColor(table.OveralStatus) }}>{table.OveralStatus}</p>
                    </div>
                </div>
                <div className="tabs__status">
                    <div className="tabs__status-data">
                        <p className="tabs__status-header">RSS Status</p>
                        <p className="tabs__status-value" style={{ background: this.getColor(table.RSSStatus) }}>{table.RSSStatus}</p>
                    </div>
                </div>
                <div className="tabs__status">
                    <div className="tabs__status-data">
                        <p className="tabs__status-header">Client RSS Status</p>
                        <p className="tabs__status-value" style={{ background: this.getColor(table.ClientRssStatus) }}>{table.ClientRssStatus}</p>
                    </div>
                </div>
                <div className="tabs__status">
                    <div className="tabs__status-data">
                        <p className="tabs__status-header" > Sticky Status</p>
                        <p className="tabs__status-value" style={{ background: this.getColor(table.StickyClientStatus) }}>{table.StickyClientStatus}</p>
                    </div>
                </div>
                <div className="tabs__status">
                    <div className="tabs__status-data">
                        <p className="tabs__status-header"> Inteference Status - overall</p>
                        <p className="tabs__status-value" style={{ background: this.getColor(table.InteferenceStatusOverall) }}>{table.InteferenceStatusOverall}</p>
                    </div>
                    <div className="tabs__status-data">
                        <p className="tabs__status-header"> Inteference Status Co Chanel </p>
                        <p className="tabs__status-value" style={{ background: this.getColor(table.InteferenceStatusChanel) }}>{table.InteferenceStatusChanel}</p>
                    </div>
                    <div className="tabs__status-data">
                        <p className="tabs__status-header"> Inteference Adjacent </p>
                        <p className="tabs__status-value" style={{ background: this.getColor(table.InteferenceStatusAdjacent) }}>{table.InteferenceStatusAdjacent}</p>
                    </div>
                </div>
                <div className="tabs__status">
                    <div className="tabs__status-data">
                        <p className="tabs__status-header"> HGw Inteference</p>
                    </div>
                    <div className="tabs__status-data">
                        <div className="tabs__status-data">
                            <p className="tabs__status-header-litle" style={{marginRight:'2'}}>Unifi</p>
                            <p className="tabs__status-value" style={{ background: this.getColor(table.HGwInteference['Unifi']),marginLeft:'2' }}>{table.HGwInteference['Unifi']}</p>
                        </div>
                        <div className="tabs__status-data">
                            <p className="tabs__status-header-litle">Home</p>
                            <p className="tabs__status-value" style={{ background: this.getColor(table.HGwInteference['Home']),marginLeft:'2' }}>{table.HGwInteference['Home']}</p>
                        </div>
                    </div>
                </div>
                <div className="tabs__status">
                    <div className="tabs__status-data">
                        <p className="tabs__status-header-litle"> Total Number of Clients</p>
                        <p className="tabs__status-value-number">{table.totalNumberOfClients}</p>
                    </div>
                    <div className="tabs__status-data">
                        <p className="tabs__status-header-litle"> Max number of concurrent clients</p>
                        <p className="tabs__status-value-number">{Math.floor(Math.random() * 20)}</p>
                    </div>
                </div>
                <div className="tabs__status">
                    <div className="tabs__status-data">
                        <p className="tabs__status-header"> HGw Combined status</p>
                    </div>
                    <div className="tabs__status-data">
                        <p className="tabs__status-header-litle"> Hgw Number of clients</p>
                        <p className="tabs__status-value-number">{Math.floor(Math.random() * 20)}</p>
                    </div>
                    <div className="tabs__status-data">
                        <p className="tabs__status-header-litle"> Hgw Number of sticky clients</p>
                        <p className="tabs__status-value-number">{Math.floor(Math.random() * 20)}</p>
                    </div>
                    <div className="tabs__status-data">
                        <p className="tabs__status-header-litle">Data transfered[GB]</p>
                        <p className="tabs__status-value-number">{table.dataTransfered}</p>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        data: getData(state.data, state.filters)
    }
}
export default connect(mapStateToProps)(TablesStatus);