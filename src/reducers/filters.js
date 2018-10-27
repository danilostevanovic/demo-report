import moment from 'moment';

const filtersReducerDefaultState = {
  date: moment(),
  info: true
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    case 'RESET_FILTERS':
      return {
        ...state,
        startDate: '',
        endDate: ''
      }
    case 'HIDE_INFO':
      return {
        ...state,
        info: action.info
      }
    default:
      return state;
  }
};

export default filtersReducer;