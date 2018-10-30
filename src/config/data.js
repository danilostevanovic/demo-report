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
        returnArray.push(randomNumber)
    }
    return returnArray;
};

const generateData = (contactId,mac, howMany) => {
    let arrayOfData = [];
    for (let i = 0; i < howMany; i++) {
        let data = {
            contactId: contactId,
            mac:mac,
            createdAt:moment().subtract(i-1, 'days'),
            graphs: {
                'status': randomNumbers(5, 300, 20),
                'interterence': randomNumbers(5, 300, 20),
                'TotalNoOfInteferenceNetwork': randomNumbers(5, 300, 20),
                'RSS': randomNumbers(5, 300, 100),
                'bitRate': randomNumbers(5, 300, 100),
                'numberOfRetransimission': randomNumbers(5, 300, 20),
                'numberOfClients': randomNumbers(5, 300, 20),
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
    ...generateData(31495080,'5A-3D-30-13-8F-15',700),
    ...generateData(31452503,'A3-43-AE-41-2E-D7',600),
    ...generateData(39531833,'9D-01-4A-A4-CB-91',400),
    ...generateData(33992438,'D7-C4-71-4A-47-35',300),
    ...generateData(54867972,'58-90-77-22-75-5C',200),
    ...generateData(79238775,'B6-06-F6-C7-D5-04',150),
    ...generateData(93603004,'0D-D3-6B-05-86-59',100)
]


export default data;