import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { setStartDate,resetFilters,setEndDate } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

console.log(store.getState())

const jsx = (
    <Provider store={store}>
        <h1>This is a test</h1>
    </Provider>
)




ReactDOM.render(jsx, document.getElementById('app'));

