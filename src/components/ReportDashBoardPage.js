import React from 'react';
import ReportDisplayPage from '../components/reportDisplayPage';
import SearchForm from '../components/searchForm';
const ReportDashBoardPage = (props) => {
  return (
    <div>
       This is dushboard page
        <SearchForm />
       <ReportDisplayPage />
     </div>
  )
}

export default ReportDashBoardPage;