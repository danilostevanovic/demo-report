import React from 'react';
import { connect } from 'react-redux';
import getContact from '../../../selectors/contacts';

class HgwInfo extends React.Component {
    render() {
        const data = this.props.contact;
        return (
            <div className="hgw-card">
                <h3 className="hgw-header">HGw info</h3>
                <hr />
                {data.map(info => {
                    const data = info.HGwInfo
                    return (
                        <div>
                            <div className="hgw">
                                <p className="hgw-prop">AutoChanel Enabled:</p>
                                <p className="hgw-value">{data.AutoChanelEnabled}</p>
                            </div>
                            <div className="hgw">
                                <p className="hgw-prop">Bandwith:</p>
                                <p className="hgw-value">{data.Bandwith}</p>
                            </div>
                            <div className="hgw">
                                <p className="hgw-prop">Brand:</p>
                                <p className="hgw-value">{data.Brand}</p>
                            </div>
                            <div className="hgw">
                                <p className="hgw-prop">CMTSID:</p>
                                <p className="hgw-value">{data.CMTSID}</p>
                            </div>
                            <div className="hgw">
                                <p className="hgw-prop">Chanel:</p>
                                <p className="hgw-value">{data.Chanel}</p>
                            </div>
                            <div className="hgw">
                                <p className="hgw-prop">Contact No:</p>
                                <p className="hgw-value">{data.ContactNo}</p>
                            </div>
                            <div className="hgw">
                                <p className="hgw-prop">Description:</p>
                                <p className="hgw-value">{data.Description}</p>
                            </div>
                            <div className="hgw">
                                <p className="hgw-prop">Equiapment:</p>
                                <p className="hgw-value">{data.Equiapment}</p>
                            </div>
                            <div className="hgw">
                                <p className="hgw-prop">Firmware:</p>
                                <p className="hgw-value">{data.Firmware}</p>
                            </div>
                            <div className="hgw">
                                <p className="hgw-prop">HGw Standard:</p>
                                <p className="hgw-value">{data.HGwStandard}</p>
                            </div>
                            <div className="hgw">
                                <p className="hgw-prop">Hidden SSID:</p>
                                <p className="hgw-value">{data.HiddenSSID}</p>
                            </div>
                            <div className="hgw">
                                <p className="hgw-prop">Ip Adress:</p>
                                <p className="hgw-value">{data.IpAdress}</p>
                            </div>
                            <div className="hgw">
                                <p className="hgw-prop">SSID:</p>
                                <p className="hgw-value">{data.SSID}</p>
                            </div>
                            <div className="hgw">
                                <p className="hgw-prop">Security:</p>
                                <p className="hgw-value">{data.Security}</p>
                            </div>
                            <div className="hgw">
                                <p className="hgw-prop">Up Time:</p>
                                <p className="hgw-value">{data.UpTime}</p>
                            </div>
                            <div className="hgw">
                                <p className="hgw-prop">Wifi Enabled:</p>
                                <p className="hgw-value">{data.WifiEnabled}</p>
                            </div>
                            <div className="hgw">
                                <p className="hgw-prop">MAC:</p>
                                <p className="hgw-value">{data.mac}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        contact: getContact(state.contacts, state.filters)
    }
}

export default connect(mapStateToProps)(HgwInfo);