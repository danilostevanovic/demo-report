import React from 'react';


const MacForm = (props) => (
     <div>
        <input type="text" placeholder="Mac Address" value={props.mac} onChange={props.onChange} />
     </div>
)
export default MacForm