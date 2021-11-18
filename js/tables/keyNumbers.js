async function renderKeyNumbers() {
    var dataMap = await getData();
    renderKeyNumbersTable(dataMap.allAccessibility.length, dataMap.allPlugs);
}

function renderKeyNumbersTable(countTotal, allPlugs) {
    var keyNumbers = `<table id="keyNumbers">
                        <thead>
                            <tr>
                                <th>Total electric stations</th>
                                <th>Total number of plugs</th>
                            </tr>
                        </thead>
                        <tbod>
                            <tr>
                                <td>${countTotal}</td>
                                <td>${allPlugs.length}</td>
                            </tr>
                        </tbod>
                    </table>`;


    const keyNumbersTable = document.getElementById('keyNumbers');
    keyNumbersTable.innerHTML = keyNumbers;
    document.getElementById('keyNumbersRemovable').remove(); //remove loading

    if (keyNumbersTable) {
        new simpleDatatables.DataTable(keyNumbersTable, { searchable: false, perPageSelect: false });
    }
}

renderKeyNumbers();