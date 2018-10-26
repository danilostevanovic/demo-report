import reports from '../config/reports';

const reportsState = [...reports];


const reportsReducer = (state = reportsState, action) => state

export default reportsReducer