// SET_START_DATE
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});
// RESET FILTERS
export const resetFilters = () => ({
    type: 'RESET_FILTERS'
})
//HIDE INFO
export const hideInfo = (info = true) => ({
    type: 'HIDE_INFO',
    info
})