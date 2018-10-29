import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { resetFilters } from '../../../store/configureStore';


const ResetFilterButton = (props) => (
    <div>
        <Button onClick={() => {
            props.dispatch(resetFilters())
        }} >Reset filters </Button>
    </div>
)
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}
export default connect(mapStateToProps)(ResetFilterButton);