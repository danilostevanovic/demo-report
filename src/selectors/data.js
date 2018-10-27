import moment from 'moment';

const getData = (id, data, { date }) => {
    return data.filter(data => {
        const idMatch = data.contactId === id;
        const dateMatch = moment(date).isSame(data.createdAt, 'day');  
        return idMatch && dateMatch 
    })

};


export default getData
