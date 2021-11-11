function renderMap(values) {
    let allCantons = [];
    for (let i = 0; i < values.length; i++) {
        const element = values[i];
        let gemeinde = postalCodes.find(el => el.PLZ == element);
        if (gemeinde != undefined) {
            allCantons.push(`ch-${gemeinde.Kanton.toLowerCase()}`);
        }
        
    }
    let mapTest = createMapForChart(allCantons);
    let newArray = [];
    for (let k = 0; k < mapTest.length; k++) {
        const element = mapTest[k];
        newArray.push([element.name, element.valueAbsolute]);
    }

    // Create the chart
    Highcharts.mapChart('swissMap', {
        chart: {
            map: 'countries/ch/ch-all'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
        colorAxis: {
            min: 0
        },
        series: [{
            data: newArray,
            name: 'Random data',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });



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