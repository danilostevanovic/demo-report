import React from 'react';
import ReportDisplayPage from '../components/reportDisplayPage/ReportDisplayPage';
import Header from '../components/Header';
import Search from '../components/search/Search';

const ReportDashBoardPage = (props) => {
  return (
    <div>
      <Header />
      <Search />
      <ReportDisplayPage />
    </div>
  )
}

export default ReportDashBoardPage;