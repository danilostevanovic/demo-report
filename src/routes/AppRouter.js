import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import ReportDashBoardPage from '../components/reportDashBoardPage';



const AppRouter = () => (
    
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ReportDashBoardPage} exact={true} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;