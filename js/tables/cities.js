function renderCitiesTable(cityTableRows) {
    let allCities = '';
    for (var k = 0; k < cityTableRows.length; k++) {
        allCities += cityTableRows[k];
    }
    var citiesTable = `<table id="datatablesSimple">
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>City</th>
                            <th>Postal code</th>
                            <th>Street & no</th>
                            <th>Coordinates</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Country</th>
                            <th>City</th>
                            <th>Postal code</th>
                            <th>Street & no</th>
                            <th>Coordinates</th>
                        </tr>
                    </tfoot>
                    <tbod>${allCities}</tbod>
                </table>`;

    const datatableCities = document.getElementById('citiesTable');
    datatableCities.innerHTML = citiesTable;
    document.getElementById('removable').remove(); //remove loading
    if (datatableCities) {
        new simpleDatatables.DataTable(datatableCities);
    }
}