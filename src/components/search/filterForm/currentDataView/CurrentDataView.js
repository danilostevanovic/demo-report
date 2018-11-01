import React from 'react';

const CurrentDataView = ({ mac, city, contactId }) => (
    <div className="viewData__wrapper">
        <div className="viewData">
            <p className="viewData-header">Currently viewing data:</p>
            <p className="viewData-data-name">MAC address:  <span className="viewData-data-value">{mac}</span></p>
            <p className="viewData-data-name">Contact ID: <span className="viewData-data-value">{contactId}</span></p>
            <p className="viewData-data-name">City: <span className="viewData-data-value">{city}</span></p>
        </div>
    </div>
)
export default CurrentDataView;