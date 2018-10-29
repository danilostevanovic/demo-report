import React from 'react';

const CurrentDataView = ({ mac, city, contactId }) => (
    <div>
        <h5>Currently viewing data:</h5>
        <p>MAC address: {mac}</p>
        <p>Contact ID: {contactId}</p>
        <p>City : {city}</p>
    </div>
)
export default CurrentDataView;