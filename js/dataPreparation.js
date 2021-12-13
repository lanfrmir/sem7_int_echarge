
// Fetch and prepare data
async function fetchData(url) {
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function getData() {
    let data = await fetchData('https://upload.geo.admin.ch/ch.bfe.ladestellen-elektromobilitaet/data/oicp/ch.bfe.ladestellen-elektromobilitaet.json');
    let placesMap = [];
    let cityTableRows = [];
    let allPlugs = [];
    let allAccessibility = [];
    let allPlaces = [];
    let allPostalCodes = [];

    for (var i = 0; i < data.EVSEData.length; i++) {
        var place = data.EVSEData[i].OperatorName;
        var record = data.EVSEData[i].EVSEDataRecord;
        var operatorName = data.EVSEData[i].OperatorName;
        let countPerPlace = 0;

        for (var j = 0; j < record.length; j++) {
            countPerPlace += 1;
            allAccessibility.push(record[j].Accessibility);
            allPlaces.push(operatorName);

            // Creating row for cities table
            let address = record[j].Address;
            let country = address.Country;
            let city = address.City;
            let postalCode = address.PostalCode;
            let street = address.Street;
            let houseNo = address.HouseNum;
            let coordinates = record[j].GeoCoordinates.Google;
            allPostalCodes.push(postalCode);
            cityTableRows.push(`<tr><td>${country}</td><td>${city}</td><td>${postalCode}</td><td>${street} ${houseNo}</td><td id="coordinates" onclick="openMap('${coordinates}')"><button type="button" class="btn btn-link">open in Google Maps</button></td></tr>`)

            // Plug types
            var plugs = record[j].Plugs;
            for (var m = 0; m < plugs.length; m++) {
                allPlugs.push(plugs[m]);
            }
        }
        placesMap.push([place, countPerPlace]);

    }

    return {
        'allPostalCodes': allPostalCodes,
        'cityTableRows': cityTableRows,
        'allAccessibility': allAccessibility,
        'allPlugs': allPlugs,
        'allPlaces': allPlaces,
    }
}

async function getTableData() {
    let data = await fetchData('https://data.geo.admin.ch/ch.bfe.ladestellen-elektromobilitaet/status/oicp/ch.bfe.ladestellen-elektromobilitaet.json');
    let allAvailibilities = [];

    for (let i = 0; i < data.EVSEStatuses.length; i++) {
        for (let k = 0; k < data.EVSEStatuses[i].EVSEStatusRecord.length; k++) {
            const availability = data.EVSEStatuses[i].EVSEStatusRecord[k].EVSEStatus;
            allAvailibilities.push(availability);
        }
    }

    let mapWithCount = {};
    allAvailibilities.forEach(function (x) { mapWithCount[x] = (mapWithCount[x] || 0) + 1; });
    return mapWithCount;
}

// Helper functions
function createMapForChart(allEntries) {
    let mapWithCount = {};
    allEntries.forEach(function (x) { mapWithCount[x] = (mapWithCount[x] || 0) + 1; });

    let listWithKeyValue = [];
    for (const [key, value] of Object.entries(mapWithCount)) {
        let y = value / allEntries.length * 100;
        listWithKeyValue.push({
            name: key,
            y: y,
            valueAbsolute: value,
        });
    }
    return listWithKeyValue;
}

function openMap(value) {
    let coordinates = value.split(' ');
    url = `https://maps.google.com/?q=${coordinates[0]},${coordinates[1]}&ll=${coordinates[0]},${coordinates[1]},12z=14`;
    window.open(url, '_blank');
}