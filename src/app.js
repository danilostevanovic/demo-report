import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
import configureStore from './store/configureStore';
import { setStartDate, resetFilters, setEndDate } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import moment from 'moment';
import filtersReducer from './reducers/filters';
import getContact from './selectors/contacts';



const store = configureStore();

console.log(store.getState())

const jsx = (
    <Provider store={store}>
        <div>
            <AppRouter />
        </div>
    </Provider>
)
const state = store.getState();




console.log('iz selektora contact',getContact(54867972,state.contacts))




ReactDOM.render(jsx, document.getElementById('app'));

