import React from 'react';


const MacForm = (props) => (
     <div>
        <input type="text" placeholder="Mac Address" value={props.mac} onChange={props.onChange} className="react-autosuggest__input"/>
     </div>
)
export default MacForm