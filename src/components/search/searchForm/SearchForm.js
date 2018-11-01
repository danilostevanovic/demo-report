import React from 'react';
import AutoCompleteForm from './AutoCompleteForm';
import MacForm from './MacForm';
import ApplyFiltersButton from '../buttons/ApplyFiltersButton';
import { Alert, Button, Grid, Row, Col } from 'react-bootstrap';
import { setShowData, setMac } from '../../../store/configureStore';
import { connect } from 'react-redux';

class SearchForm extends React.Component {

    state = {
        error: undefined,
        show: true,
        macValue: ''
    }
    handleDismiss = () => {
        this.setState(() => ({
            show: false,
            error: undefined
        }));
    }

    handleShow = () => {
        this.setState(() => ({
            show: true
        }));
    }
    applyFilters = (e) => {
        e.preventDefault();
        let mac = this.props.filters.mac || this.state.macValue;
        if ((this.props.filters.mac !== '' || this.state.macValue !== '') && mac.match(/^(([\da-fA-F]{2}[-:]){5}[\da-fA-F]{2})$/)) {
            const macAddress = this.props.contacts.map(contact => contact.mac);
            const isMatch = macAddress.includes(mac);
            if (isMatch) {
                this.props.dispatch(setMac(mac));
                this.props.dispatch(setShowData(true));
                this.setState(() => ({ error: undefined }));
            } else if (!isMatch) {
                this.setState(() => ({ error: 'This mac does not exist in base' }))
            }
        }
        else {
            this.setState(() => ({ error: 'You probably entered a wrong format for mac address Or have not filled any field' }));
        }
    }
    setMac = (e) => {
        let mac = e.target.value;
        this.setState(() => ({ macValue: mac }))
    }
    render() {
        return (
            <div className="searchForm">
                <form onSubmit={this.applyFilters}>
                    <Grid fluid={true}>
                        <Row>
                            <Col md={3}>
                                <MacForm mac={this.props.filters.mac === '' ? this.state.macValue : this.props.filters.mac} onChange={this.setMac} />
                            </Col>
                            <Col md={3}>
                                <AutoCompleteForm />
                            </Col>
                            <Col md={3}>
                                <ApplyFiltersButton onClick={this.applyFilters} />
                            </Col>
                        </Row>
                    </Grid>
                </form>
                {this.state.error && (
                    <div className="error">
                        <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
                            <h4>Oh snap! You got an error!</h4>
                            <p>
                                {this.state.error}
                            </p>
                            <p>
                                <Button onClick={this.handleDismiss}>Hide Alert</Button>
                            </p>
                        </Alert>
                    </div>
                )}
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