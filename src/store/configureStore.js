import { createStore, combineReducers } from 'redux';
import contactsReducer from '../reducers/contacts';
import dataReducer from '../reducers/data';
import filtersReducer from '../reducers/filters';

export default () => {
    const store = createStore(
        combineReducers({
            contacts: contactsReducer,
            data: dataReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store
}