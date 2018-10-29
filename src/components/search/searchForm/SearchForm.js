import React from 'react';
import AutoCompleteForm from './AutoCompleteForm';
import MacForm from './MacForm';
import ApplyFiltersButton from '../buttons/ApplyFiltersButton';
import { Alert,Button } from 'react-bootstrap';
import { setShowData, setMac } from '../../../store/configureStore';
import { connect } from 'react-redux';

class SearchForm extends React.Component {

    state = {
        error: undefined,
        show: true
    }
    handleDismiss = () => {
        this.setState(()=>({
            show:false,
            error:undefined
        }));
    }

    handleShow = () => {
        this.setState(()=>({
            show:true
        }));
    }
    applyFilters = () => {
        if (this.props.filters.mac != '') {
            this.props.dispatch(setShowData(true));
        } else {
            this.setState(() => ({ error: 'you must fill contact Id or paste mac address in mac field' }))
            setTimeout(() => {
                this.setState(() => ({ error: undefined }))
            }, 3000)
        }
    }
    setMac = (e) => {
        let mac = e.target.value;
        if (mac.match(/^(([\da-fA-F]{2}[-:]){5}[\da-fA-F]{2})$/)) {
            const macAddress = this.props.contacts.map(contact => contact.mac);
            const isMatch = macAddress.includes(mac);
            if (isMatch) {
                this.props.dispatch(setMac(mac));
                this.setState(() => ({ error: undefined }));
            }
            else {
                this.setState(() => ({ error: 'sorry that mac address does not exist in base! please fill contact Id field' }));
                setTimeout(() => {
                    this.setState(() => ({ error: undefined }))
                }, 3000)
            }
        } else {
            this.setState(() => ({ error: 'not valid format for mac address' }));
            setTimeout(() => {
                this.setState(() => ({ error: undefined }))
            }, 3000)
        }

    }
    render() {
        return (
            <div>
                <MacForm mac={this.props.filters.mac} onChange={this.setMac} />
                <AutoCompleteForm />
                {this.state.error && (
                    
                    <p>{this.state.error}</p>)}
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