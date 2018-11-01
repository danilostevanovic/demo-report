import React from 'react';
import SearchForm from './searchForm/SearchForm';
import FilterForm from './filterForm/FilterForm';
import { connect } from 'react-redux';

class Search extends React.Component {
    render() {
        return (
            <div >
                {this.props.filters.showData ? <FilterForm /> : <SearchForm />}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}
export default connect(mapStateToProps)(Search);