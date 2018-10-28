import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { setId, setMac } from '../../../store/configureStore';
import PropTypes from "prop-types";
import Autosuggest from 'react-autosuggest';





// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
    <div>
        {suggestion}
    </div>
);

class AutoCompleteForm extends React.Component {
    constructor() {
        super();

        // Autosuggest is a controlled component.
        // This means that you need to provide an input value
        // and an onChange handler that updates this value (see below).
        // Suggestions also need to be provided to the Autosuggest,
        // and they are initially empty because the Autosuggest is closed.
        this.state = {
            data: [],
            value: '',
            suggestions: []
        };
    }

    onChange = (event, { newValue }) => {
        const value = event.target.value;
        if (newValue.match(/^[0-9]*$/)) {
            this.setState({
                value: newValue
            });
        }
        if (value === '') {
            this.props.dispatch(setMac(''))
        }
    };
    getSuggestions = value => {
        const data = this.state.data.map(data => (data.contactId.toString()));
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : data.filter(data =>
            data.toLowerCase().slice(0, inputLength) === inputValue
        );
    };
    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };

    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };
    onSuggestionSelected = (e, { suggestionValue }) => {
        const id = parseInt(suggestionValue, 10);
        const currentContact = [...this.state.data].filter(contact => contact.contactId === id);
        if (suggestionValue !== '') {
            this.props.dispatch(setId(id));
            this.props.dispatch(setMac(currentContact[0].mac))
        } else {
            this.props.dispatch(setId(''));
            this.props.dispatch(setMac(''))
        }

    }
    componentWillMount() {
        this.setState(() => ({
            data: [...this.props.contacts]
        }))
    }
    render() {
        const { value, suggestions } = this.state;

        // Autosuggest will pass through all these props to the input.
        const inputProps = {
            placeholder: 'Contact ID',
            value,
            onChange: this.onChange
        };

        // Finally, render it!
        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
                onSuggestionSelected={this.onSuggestionSelected}
            />
        );
    }
}
const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    }
}
export default connect(mapStateToProps)(AutoCompleteForm);