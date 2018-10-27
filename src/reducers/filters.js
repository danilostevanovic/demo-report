
const filtersReducerDefaultState = {
  date: '',
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_DATE':
      return {
        ...state,
        date: action.date
      }
    case 'RESET_FILTERS':
      return {
        ...state,
        date: '',
        info: false
      }
    default:
      return state
  }
};


export default filtersReducer;