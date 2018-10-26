import moment from 'moment';

const randomNumbers =  (start, end, count)=> {
    let returnArray = [],
        randomNumber;
    for (let i = 0; i < count; i++) {
        randomNumber = Math.floor(Math.random() * (end - start)) + start;
        if (returnArray.indexOf(randomNumber) == -1) {
            returnArray.push(randomNumber);
        } else {
            --i;
        }
    }
    return returnArray;
};

const data = [
    {
        contactId: 54867972,
        createdAt: moment("25/10/2018"),
        'status': randomNumbers(5,100,10),
        'interterence': randomNumbers(5,100,10),
        'TotalNoOfInteferenceNetwork': randomNumbers(5,100,10),
        'RSS': randomNumbers(5,100,10),
        'bitRate': randomNumbers(5,100,10),
        'numberOfRetransimission': randomNumbers(5,100,10),
        'numberOfClients': randomNumbers(5,100,10),
        'totalTransfer': 17
    },
    {
        contactId: 54867972,
        createdAt: moment("26/10/2018"),
        'status': randomNumbers(10,100,10),
        'interterence':  randomNumbers(10,100,10),
        'TotalNoOfInteferenceNetwork':  randomNumbers(10,100,10),
        'RSS':  randomNumbers(10,100,10),
        'bitRate':  randomNumbers(10,100,10),
        'numberOfRetransimission':  randomNumbers(10,100,10),
        'numberOfClients':  randomNumbers(10,100,10),
        'totalTransfer': 100
    },
    {
        contactId: 54867972,
        createdAt: moment("27/10/2018"),
        'status': randomNumbers(10,100,10),
        'interterence':  randomNumbers(10,100,10),
        'TotalNoOfInteferenceNetwork':  randomNumbers(10,100,10),
        'RSS':  randomNumbers(10,100,10),
        'bitRate':  randomNumbers(10,100,10),
        'numberOfRetransimission':  randomNumbers(10,100,10),
        'numberOfClients':  randomNumbers(10,100,10),
        'totalTransfer': 100
    },
    {
        contactId:31495080,
        createdAt: moment("27/10/2018"),
        'status': randomNumbers(10,100,10),
        'interterence':  randomNumbers(10,100,10),
        'TotalNoOfInteferenceNetwork':  randomNumbers(10,100,10),
        'RSS':  randomNumbers(10,100,10),
        'bitRate':  randomNumbers(10,100,10),
        'numberOfRetransimission':  randomNumbers(10,100,10),
        'numberOfClients':  randomNumbers(10,100,10),
        'totalTransfer': 100
    },
    {
        contactId:31495080,
        createdAt: moment("29/10/2018"),
        'status': randomNumbers(10,100,10),
        'interterence':  randomNumbers(10,100,10),
        'TotalNoOfInteferenceNetwork':  randomNumbers(10,100,10),
        'RSS':  randomNumbers(10,100,10),
        'bitRate':  randomNumbers(10,100,10),
        'numberOfRetransimission':  randomNumbers(10,100,10),
        'numberOfClients':  randomNumbers(10,100,10),
        'totalTransfer': 100
    },
    {
        contactId:31495080,
        createdAt: moment("30/10/2018"),
        'status': randomNumbers(10,100,10),
        'interterence':  randomNumbers(10,100,10),
        'TotalNoOfInteferenceNetwork':  randomNumbers(10,100,10),
        'RSS':  randomNumbers(10,100,10),
        'bitRate':  randomNumbers(10,100,10),
        'numberOfRetransimission':  randomNumbers(10,100,10),
        'numberOfClients':  randomNumbers(10,100,10),
        'totalTransfer': 100
    },
    {
        contactId:31452503,
        createdAt: moment("29/10/2018"),
        'status': randomNumbers(10,100,10),
        'interterence':  randomNumbers(10,100,10),
        'TotalNoOfInteferenceNetwork':  randomNumbers(10,100,10),
        'RSS':  randomNumbers(10,100,10),
        'bitRate':  randomNumbers(10,100,10),
        'numberOfRetransimission':  randomNumbers(10,100,10),
        'numberOfClients':  randomNumbers(10,100,10),
        'totalTransfer': 100
    },
    {
        contactId:31452503,
        createdAt: moment("25/10/2018"),
        'status': randomNumbers(10,100,10),
        'interterence':  randomNumbers(10,100,10),
        'TotalNoOfInteferenceNetwork':  randomNumbers(10,100,10),
        'RSS':  randomNumbers(10,100,10),
        'bitRate':  randomNumbers(10,100,10),
        'numberOfRetransimission':  randomNumbers(10,100,10),
        'numberOfClients':  randomNumbers(10,100,10),
        'totalTransfer': 100
    },
    {
        contactId:31452503,
        createdAt: moment("26/10/2018"),
        'status': randomNumbers(10,100,10),
        'interterence':  randomNumbers(10,100,10),
        'TotalNoOfInteferenceNetwork':  randomNumbers(10,100,10),
        'RSS':  randomNumbers(10,100,10),
        'bitRate':  randomNumbers(10,100,10),
        'numberOfRetransimission':  randomNumbers(10,100,10),
        'numberOfClients':  randomNumbers(10,100,10),
        'totalTransfer': 100
    },
    {
        contactId:79238775,
        createdAt: moment("26/10/2018"),
        'status': randomNumbers(10,100,10),
        'interterence':  randomNumbers(10,100,10),
        'TotalNoOfInteferenceNetwork':  randomNumbers(10,100,10),
        'RSS':  randomNumbers(10,100,10),
        'bitRate':  randomNumbers(10,100,10),
        'numberOfRetransimission':  randomNumbers(10,100,10),
        'numberOfClients':  randomNumbers(10,100,10),
        'totalTransfer': 100
    },
    {
        contactId:79238775,
        createdAt: moment("27/10/2018"),
        'status': randomNumbers(10,100,10),
        'interterence':  randomNumbers(10,100,10),
        'TotalNoOfInteferenceNetwork':  randomNumbers(10,100,10),
        'RSS':  randomNumbers(10,100,10),
        'bitRate':  randomNumbers(10,100,10),
        'numberOfRetransimission':  randomNumbers(10,100,10),
        'numberOfClients':  randomNumbers(10,100,10),
        'totalTransfer': 100
    },
    {
        contactId:79238775,
        createdAt: moment("30/10/2018"),
        'status': randomNumbers(10,100,10),
        'interterence':  randomNumbers(10,100,10),
        'TotalNoOfInteferenceNetwork':  randomNumbers(10,100,10),
        'RSS':  randomNumbers(10,100,10),
        'bitRate':  randomNumbers(10,100,10),
        'numberOfRetransimission':  randomNumbers(10,100,10),
        'numberOfClients':  randomNumbers(10,100,10),
        'totalTransfer': 100
    },
    {
        contactId:39531833,
        createdAt: moment("1/10/2018"),
        'status': randomNumbers(10,100,10),
        'interterence':  randomNumbers(10,100,10),
        'TotalNoOfInteferenceNetwork':  randomNumbers(10,100,10),
        'RSS':  randomNumbers(10,100,10),
        'bitRate':  randomNumbers(10,100,10),
        'numberOfRetransimission':  randomNumbers(10,100,10),
        'numberOfClients':  randomNumbers(10,100,10),
        'totalTransfer': 100
    },
    {
        contactId:39531833,
        createdAt: moment("7/10/2018"),
        'status': randomNumbers(10,100,10),
        'interterence':  randomNumbers(10,100,10),
        'TotalNoOfInteferenceNetwork':  randomNumbers(10,100,10),
        'RSS':  randomNumbers(10,100,10),
        'bitRate':  randomNumbers(10,100,10),
        'numberOfRetransimission':  randomNumbers(10,100,10),
        'numberOfClients':  randomNumbers(10,100,10),
        'totalTransfer': 100
    },
    {
        contactId:33992438,
        createdAt: moment("1/10/2018"),
        'status': randomNumbers(10,100,10),
        'interterence':  randomNumbers(10,100,10),
        'TotalNoOfInteferenceNetwork':  randomNumbers(10,100,10),
        'RSS':  randomNumbers(10,100,10),
        'bitRate':  randomNumbers(10,100,10),
        'numberOfRetransimission':  randomNumbers(10,100,10),
        'numberOfClients':  randomNumbers(10,100,10),
        'totalTransfer': 100
    },
    {
        contactId:33992438,
        createdAt: moment("25/10/2018"),
        'status': randomNumbers(10,100,10),
        'interterence':  randomNumbers(10,100,10),
        'TotalNoOfInteferenceNetwork':  randomNumbers(10,100,10),
        'RSS':  randomNumbers(10,100,10),
        'bitRate':  randomNumbers(10,100,10),
        'numberOfRetransimission':  randomNumbers(10,100,10),
        'numberOfClients':  randomNumbers(10,100,10),
        'totalTransfer': 100
    },
    {
        contactId:93603004,
        createdAt: moment("25/10/2018"),
        'status': randomNumbers(10,100,10),
        'interterence':  randomNumbers(10,100,10),
        'TotalNoOfInteferenceNetwork':  randomNumbers(10,100,10),
        'RSS':  randomNumbers(10,100,10),
        'bitRate':  randomNumbers(10,100,10),
        'numberOfRetransimission':  randomNumbers(10,100,10),
        'numberOfClients':  randomNumbers(10,100,10),
        'totalTransfer': 100
    },
    {
        contactId:93603004,
        createdAt: moment("31/10/2018"),
        'status': randomNumbers(10,100,10),
        'interterence':  randomNumbers(10,100,10),
        'TotalNoOfInteferenceNetwork':  randomNumbers(10,100,10),
        'RSS':  randomNumbers(10,100,10),
        'bitRate':  randomNumbers(10,100,10),
        'numberOfRetransimission':  randomNumbers(10,100,10),
        'numberOfClients':  randomNumbers(10,100,10),
        'totalTransfer': 100
    },
    {
        contactId:93603004,
        createdAt: moment("31/10/2018"),
        'status': randomNumbers(10,100,10),
        'interterence':  randomNumbers(10,100,10),
        'TotalNoOfInteferenceNetwork':  randomNumbers(10,100,10),
        'RSS':  randomNumbers(10,100,10),
        'bitRate':  randomNumbers(10,100,10),
        'numberOfRetransimission':  randomNumbers(10,100,10),
        'numberOfClients':  randomNumbers(10,100,10),
        'totalTransfer': 100
    },
    
]

export default data;