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