import React from 'react';
import DateButton from '../../buttons/DateButton';
// import { SingleDatePicker } from 'react-dates';
// import 'react-dates/initialize';


class DatePicker extends React.Component{
     render() { 
        return(
            <div>
                <div>
                    <DateButton />
                </div>
                <div>
                    Date picker go here
                </div>
            </div>
        )
     }
}
export default DatePicker;