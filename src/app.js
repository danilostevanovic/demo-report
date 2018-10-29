import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReportDashBoardPage from './components/ReportDashBoardPage';
import getData from './selectors/data';
import moment from 'moment';
import { store, setDate,resetFilters,setId ,setShowData} from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';







// store.dispatch(setDate(moment().subtract(20,'day')));
// store.dispatch(setId(54867972))
// store.dispatch(setShowData(true))

const state = store.getState();

console.log(state);
console.log(getData(state.data,state.filters));





const jsx = (
    <Provider store={store}>
        <ReportDashBoardPage />
    </Provider>
)








ReactDOM.render(jsx, document.getElementById('app'));

