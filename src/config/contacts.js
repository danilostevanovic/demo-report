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
const randomIp = () => {
    const random = randomNumbers(1, 10, 2);
    return `192.168.${random[0]}.${random[1]}`
};
const randomCity = () => {
    const city = ['Belgrade', 'Budapest', 'London', 'Vienna', 'Paris'];
    return city[Math.floor(Math.random() * city.length)]
}
const randomEnabled = () => {
    const enabled = ['yes', 'No'];
    return enabled[Math.floor(Math.random() * enabled.length)]
}

const generateData = (id, mac, howMany) => {
    let arrayOfData = [];
    for (let i = 0; i < howMany; i++) {
        let data = {
            mac: mac,
            contactId: id,
            city: randomCity(),
            HGwInfo: {
                WifiEnabled: randomEnabled(),
                HGwStandard: '802.11b',
                IpAdress: randomIp(),
                mac: mac,
                ContactNo: randomNumbers(10000, 50000, 1)[0],
                AutoChanelEnabled: randomEnabled(),
                SSID: 'ibis-wifi',
                Chanel: randomNumbers(1, 10, 1)[0],
                Security: 'WPA/WPA2-PSK',
                Brand: '2,4Ghz',
                HiddenSSID: randomEnabled(),
                Bandwith: `${randomNumbers(20, 30, 1)[0]}MHZ`,
                UpTime: `${randomNumbers(1, 20, 1)[0]} days`,
                Equiapment: 'ABC',
                Description: 'modem',
                CMTSID: 'BG-C-1-IBS',
                Firmware: '2.2.1005.76'
            },
        }
        arrayOfData.push(data)
    }
    return arrayOfData
}
const contacts = [
    ...generateData(54867972, '58-90-77-22-75-5C', 1),
    ...generateData(31495080, '5A-3D-30-13-8F-15', 1),
    ...generateData(31452503, 'A3-43-AE-41-2E-D7', 1),
    ...generateData(79238775, 'B6-06-F6-C7-D5-04', 1),
    ...generateData(39531833, '9D-01-4A-A4-CB-91', 1),
    ...generateData(33992438, 'D7-C4-71-4A-47-35', 1),
    ...generateData(93603004, '0D-D3-6B-05-86-59', 1),
]


export default contacts