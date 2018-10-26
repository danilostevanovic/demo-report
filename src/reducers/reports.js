import reportsData from '../config/reports-data';

const reportsState = [...reportsData];


const reportsReducer = (state = reportsState, action) => state

export default reportsReducer