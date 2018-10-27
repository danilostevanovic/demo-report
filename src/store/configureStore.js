import { createStore, combineReducers } from 'redux';
import contactsReducer from '../reducers/contacts';
import dataReducer from '../reducers/data';
import filtersReducer from '../reducers/filters';

/////// ACTIONS

// SET_DATE
export const setDate = (date) => ({
    type: 'SET_DATE',
    date: date
})

// RESET FILTERS
export const resetFilters = () => ({
    type: 'RESET_FILTERS'
})


export const store = createStore(
    combineReducers(
        {
            contacts:contactsReducer,
            data:dataReducer,
            filters:filtersReducer
        }
    )
);



