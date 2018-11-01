import React from 'react';
import { connect } from 'react-redux';
import { resetFilters } from '../../../store/configureStore';


const ResetFilterButton = (props) => (
    <div>
        <button className="btn-reset" onClick={() => {
            props.dispatch(resetFilters())
        }} >Reset filters </button>
    </div>
)
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}
export default connect(mapStateToProps)(ResetFilterButton);