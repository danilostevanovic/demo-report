import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
import configureStore from './store/configureStore';
import { setStartDate, resetFilters, setEndDate } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import moment from 'moment';


const store = configureStore();

console.log(store.getState())

const jsx = (
    <Provider store={store}>
        <div>
            <AppRouter />
        </div>
    </Provider>
)




ReactDOM.render(jsx, document.getElementById('app'));

