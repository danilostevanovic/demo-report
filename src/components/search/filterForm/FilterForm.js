import React from 'react';
import CurrentDataView  from './currentDataView/CurrentDataView';
import DatePicker from './datePicker/DatePicker';
import ResetFilterButton from '../buttons/ResetFilterButton';
import getContact from '../../../selectors/contacts';
import { connect } from 'react-redux';


class FilterForm extends React.Component{
   render() { 
     return(
      <div>
       <div>
            <CurrentDataView {...this.props.contacts[0]} />
            <DatePicker />
            <ResetFilterButton />
       </div>
     </div>
     )
   }
}
const mapStateToProps = (state) => {
  return {
      contacts:  getContact(state.contacts,state.filters)
  }
}

export default connect(mapStateToProps)(FilterForm);