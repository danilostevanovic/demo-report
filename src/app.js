import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReportDashBoardPage from './components/ReportDashBoardPage';
import { store} from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import  'react-dates/lib/css/_datepicker.css';





const jsx = (
    <Provider store={store}>
        <ReportDashBoardPage />
    </Provider>
)





ReactDOM.render(jsx, document.getElementById('app'));