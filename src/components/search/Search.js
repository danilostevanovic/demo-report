import React from 'react';
import SearchForm from './searchForm/SearchForm';
import { connect } from 'react-redux';

class Search extends React.Component{
     render() {
         return(
            <div>
                <SearchForm />
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