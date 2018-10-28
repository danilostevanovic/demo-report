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

// SET ID
export const setId = (id) =>({
    type:'SET_ID',
    id
})

// SET MAC
export const setMac = (mac) =>({
    type:'SET_MAC',
    mac
})

// SET SHOW DATA
export const setShowData = (showData) => ({
     type:'SET_SHOW_DATA',
     showData
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



