import moment from 'moment';

const getData = (data, { date, id, showData }) => {
    return data.filter(data => {
        const idMatch = data.contactId === id;
        const dateMatch = moment(date).isSame(data.createdAt, 'day');
        return idMatch && dateMatch && showData
    })

};


export default getData
