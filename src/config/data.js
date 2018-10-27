import moment from 'moment';


const randomStatus = () => {
    let status = ['Medium', 'Bad', 'Good'];
    return status[ Math.floor(Math.random() * status.length)]
};

const randomNumbers = (start, end, count) => {
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

const generateData = (contactId, howMany) => {
    let arrayOfData = [];
    for (let i = 0; i < howMany; i++) {
        let data = {
            contactId: contactId,
            createdAt: moment(`${randomNumbers(1, 28, 1)[0]}/10/2018`),
            graphs: {
                'status': randomNumbers(5, 100, 10),
                'interterence': randomNumbers(5, 100, 10),
                'TotalNoOfInteferenceNetwork': randomNumbers(5, 100, 10),
                'RSS': randomNumbers(5, 100, 10),
                'bitRate': randomNumbers(5, 100, 10),
                'numberOfRetransimission': randomNumbers(5, 100, 10),
                'numberOfClients': randomNumbers(5, 100, 10),
                'totalTransfer': randomNumbers(1, 20, 1)[0]
            },
            tables:{
                OveralStatus:randomStatus(),
                RSSStatus:randomStatus(),
                ClientRssStatus:randomStatus(),
                StickyClientStatus:randomStatus(),
                InteferenceStatusChanel:randomStatus(),
                InteferenceStatusOverall:randomStatus(),
                InteferenceStatusAdjacent:randomStatus(),
                HGwInteference:{
                    Unifi:randomStatus(),
                    Home:randomStatus()
                },
                RetransmissionStatus:{
                    status:randomStatus(),
                    numberOfRetransmissions:randomNumbers(1000,5000,1)[0]
                },
                totalNumberOfClients:randomNumbers(1,20,1)[0],
                numberOfStickyClients:randomNumbers(1,10,1)[0],
                dataTransfered:randomNumbers(1,50,1)[0],
                HGwBitrate:randomNumbers(1,20,4),
                HGwTotalTrafic:randomNumbers(1,40,1)[0],
                HGwRss:randomNumbers(10,40,4),
                HGwInteferenceNetworkRSS:randomNumbers(1,40,4),
                WifiConectionTime:randomNumbers(10,50,1)[0],
                HGwWifiUsage:randomNumbers(10,50,1)[0],
                HGwInteferenceSecondUse:randomNumbers(10,50,1)[0],
                HGwInteferenceHome:randomNumbers(10,50,1)[0],
                HGwChanel:randomNumbers(30,50,2),
                HGwTimeWithStickyClients:randomNumbers(10,50,1)[0],
                HGwRssStatus:randomNumbers(20,60,1)[0]
            }
        }
        arrayOfData.push(data);
    }
    return arrayOfData
};

const data = [
    ...generateData(54867972,7),
    ...generateData(31495080,7),
    ...generateData(31452503,7),
    ...generateData(79238775,7),
    ...generateData(39531833,7),
    ...generateData(33992438,7),
    ...generateData(93603004,7)
]


export default data;