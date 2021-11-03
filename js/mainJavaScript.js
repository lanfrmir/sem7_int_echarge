async function getData() {
    let url = 'https://upload.geo.admin.ch/ch.bfe.ladestellen-elektromobilitaet/data/oicp/ch.bfe.ladestellen-elektromobilitaet.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderCharts() {
    let data = await getData();
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
            cityTableRows.push(`<tr><td>${country}</td><td>${city}</td><td>${postalCode}</td><td>${street} ${houseNo}</td></tr>`)

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
        });
    }
    return listWithKeyValue;
}
