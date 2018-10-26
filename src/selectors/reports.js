import moment from 'moment';

export default (reports,{startDate,endDate,info})=>{
    return reports.filter((report)=>{
        const createdAtMoment = moment();
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const infoMatch = info,

        return startDateMatch && endDateMatch
    })
}