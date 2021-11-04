async function getData(url) {
    // let url = 'https://upload.geo.admin.ch/ch.bfe.ladestellen-elektromobilitaet/data/oicp/ch.bfe.ladestellen-elektromobilitaet.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function getPlzData(url) {
    // let url = 'https://upload.geo.admin.ch/ch.bfe.ladestellen-elektromobilitaet/data/oicp/ch.bfe.ladestellen-elektromobilitaet.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderCharts() {
    let data = await getData('https://upload.geo.admin.ch/ch.bfe.ladestellen-elektromobilitaet/data/oicp/ch.bfe.ladestellen-elektromobilitaet.json');
    let placesMap = [];
    let cityTableRows = [];
    let allPlugs = [];
    let allAccessibility = [];
    let allPlaces = [];

    console.log(data.EVSEData);

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
            cityTableRows.push(`<tr><td>${country}</td><td>${city}</td><td>${postalCode}</td><td>${street} ${houseNo}</td><td id="coordinates" onclick="openMap('${coordinates}')"><button type="button" class="btn btn-link">open in Google Maps</button></td></tr>`)

            // Plug types
            var plugs = record[j].Plugs;
            for (var m = 0; m < plugs.length; m++) {
                allPlugs.push(plugs[m]);
            }
        }
        placesMap.push([place, countPerPlace]);

    }

    // Tables
    renderCitiesTable(cityTableRows);
    renderKeyNumbersTable(allAccessibility.length, allPlugs);

    // Charts
    renderProviderChart(createMapForChart(allPlaces));
    renderAccessibilityChart(createMapForChart(allAccessibility));
    renderPlugsChart(createMapForChart(allPlugs));
}

renderCharts();

function openMap(value) {
    let coordinates = value.split(' ');
    url = `https://maps.google.com/?q=${coordinates[0]},${coordinates[1]}&ll=${coordinates[0]},${coordinates[1]},12z=14`;
    window.open(url, '_blank');
}

function createMapForChart(allEntries) {
    let mapWithCount = {};
    allEntries.forEach(function (x) { mapWithCount[x] = (mapWithCount[x] || 0) + 1; });

    console.log(mapWithCount);
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
