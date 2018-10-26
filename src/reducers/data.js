import data from '../config/data';

const dataState = [...data];

const dataReducer = (state=dataState,actions)=>state

export default dataReducer;