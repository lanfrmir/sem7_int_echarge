async function renderTopTen() {
    var dataMap = await getData();

    var allmap = createMapForChart(dataMap.allPlaces);
    var top = [];
    for (let i = 0; i < allmap.length; i++) {
        const element = allmap[i];
        if (element.valueAbsolute > 100) {
            top.push(`<tr><td>${element.name}</td><td>${element.valueAbsolute}</td></tr>`)
        }
        
    }
    renderTopTenTable(top);
}

function renderTopTenTable(cityTableRows) {
    let allCities = '';
    for (var k = 0; k < cityTableRows.length; k++) {
        allCities += cityTableRows[k];
    }
    var citiesTable = `<table id="datatablesSimple">
                    <thead>
                        <tr>
                            <th>Provider</th>
                            <th>Number</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Provider</th>
                            <th>Number</th>
                        </tr>
                    </tfoot>
                    <tbod>${allCities}</tbod>
                </table>`;

    const datatableCities = document.getElementById('topTen');
    datatableCities.innerHTML = citiesTable;
    document.getElementById('removable').remove(); //remove loading
    if (datatableCities) {
        new simpleDatatables.DataTable(datatableCities);
    }
}

renderTopTen();