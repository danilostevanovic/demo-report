import React from 'react';

const CurrentDataView = ({mac,city,contactId}) => (
     <div>
        <h6>Currently viewing data:</h6>
        <p>MAC address: {mac}</p>
        <p>Contact ID: {contactId}</p>
        <p>City : {city}</p>
     </div>
)
export default CurrentDataView;