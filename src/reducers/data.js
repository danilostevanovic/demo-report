import data from '../config/data';

const dataState = [...data];

const dataReducer = (state=dataState)=>state

export default dataReducer;