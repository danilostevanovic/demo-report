import React from 'react';
import DateButton from '../../buttons/DateButton';
import { SingleDatePicker } from 'react-dates';
import { setDate } from '../../../../store/configureStore';
import { connect } from 'react-redux';
import moment from 'moment';

import 'react-dates/initialize';


class DatePicker extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            focused: false
        }
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ focused: focused }))
    }
    onDateChange = (date) => {
        if (date) {
            this.props.dispatch(setDate(date))
        }
    }
    previousDay = () => {
        const previousDay = moment(this.props.filters.date).subtract(1, 'days');
        this.props.dispatch(setDate(previousDay))
    }
    previousSevenDays = ()=>{
        const previousSevenDays = moment(this.props.filters.date).subtract(7, 'days');
        this.props.dispatch(setDate(previousSevenDays))
    }
    render() {
        return (
            <div>
                <div>
                    <DateButton previousDay={this.previousDay} previousSevenDays={this.previousSevenDays} />
                </div>
                <div className="dateButton-wrapper-setDate">
                    <SingleDatePicker
                        startDateId={1}
                        endDateId={2}
                        date={this.props.filters.date} // momentPropTypes.momentObj or null
                        onDateChange={this.onDateChange} // PropTypes.func.isRequired
                        focused={this.state.focused} // PropTypes.bool
                        onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}
export default connect(mapStateToProps)(DatePicker);