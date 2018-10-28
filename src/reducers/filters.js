
const filtersReducerDefaultState = {
  date: '',
  id: '',
  mac: '',
  showData: false
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
        id: '',
        mac: '',
        showData: false
      }
    case 'SET_ID':
      return {
        ...state,
        id: action.id
      }
    case 'SET_MAC':
      return {
        ...state,
        mac: action.mac
      }
    case 'SET_SHOW_DATA':
      return {
        ...state,
        showData: action.showData
      }
    default:
      return state
  }
};


export default filtersReducer;