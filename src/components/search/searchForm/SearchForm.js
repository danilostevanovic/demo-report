import React from 'react';
import AutoCompleteForm from './AutoCompleteForm';
import MacForm from './MacForm';
import ApplyFiltersButton from '../buttons/ApplyFiltersButton';
import { setShowData } from '../../../store/configureStore';
import { connect } from 'react-redux';

class SearchForm extends React.Component {

    state = {
        error:undefined
    }

    applyFilters = () => {
        if (this.props.filters.mac != '' && this.props.filters.id !== '') {
            this.props.dispatch(setShowData(true));
            this.setState(()=>({error:undefined}))
        }else{
            this.setState(()=>({error:'you must fill contact Id'}))
        }
    }
    render() {
        return (
            <div>
                <MacForm mac={this.props.filters.mac} />
                <AutoCompleteForm />
                {this.state.error && <p>{this.state.error}</p>}
                <ApplyFiltersButton onClick={this.applyFilters} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        contacts: state.contacts,
        filters: state.filters
    }
}
export default connect(mapStateToProps)(SearchForm);