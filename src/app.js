import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReportDashBoardPage from './components/ReportDashBoardPage';
import getData from './selectors/data';
import moment from 'moment';
import { store, setDate,resetFilters } from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';




store.dispatch(setDate(moment().subtract(5,'day')));

const state = store.getState();


console.log(getData(54867972,state.data,state.filters));





const jsx = (
    <Provider store={store}>
        <ReportDashBoardPage />
    </Provider>
)








ReactDOM.render(jsx, document.getElementById('app'));

