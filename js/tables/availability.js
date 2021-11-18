async function renderAvailability() {
    var dataMap = await getTableData();
    renderAvailabilityTable(dataMap.Available, dataMap.Occupied, dataMap.OutOfService, dataMap.Unknown);
}

function renderAvailabilityTable(available, occupied, outOfService, unknown) {
    var availability = `<table id="availabilityTable">
                    <thead>
                        <tr>
                            <th>Available</th>
                            <th>Occupied</th>
                            <th>Out of Service</th>
                            <th>Unknown</th>
                        </tr>
                    </thead>
                    <tbod>
                        <tr>
                            <td>${available}</td>
                            <td>${occupied}</td>
                            <td>${outOfService}</td>
                            <td>${unknown}</td>
                        </tr>
                    </tbod>
                </table>`;

    const availabilityTable = document.getElementById('availabilityTable');
    availabilityTable.innerHTML = availability;

    if (availabilityTable) {
        new simpleDatatables.DataTable(availabilityTable, { searchable: false, perPageSelect: false });
    }
}

renderAvailability();