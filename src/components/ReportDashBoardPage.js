import React from 'react';
import ReportDisplayPage from '../components/reportDisplayPage';
import SearchForm from '../components/searchForm';
import Header from '../components/Header';
const ReportDashBoardPage = (props) => {
  return (
    <div>
        <Header />
        <SearchForm />
       <ReportDisplayPage />
     </div>
  )
}

export default ReportDashBoardPage;