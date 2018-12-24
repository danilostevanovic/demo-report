import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReportDashBoardPage from './components/ReportDashBoardPage';
import { store} from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import  'react-dates/lib/css/_datepicker.css';

<<<<<<< HEAD
// this is merge
=======
// this is only for test 2
>>>>>>> 9ca87e1ab05d8563a9d962e49f394558bba2a39c




const jsx = (
    <Provider store={store}>
        <ReportDashBoardPage />
    </Provider>
)





ReactDOM.render(jsx, document.getElementById('app'));
