async function getData() {
    let url = 'https://data.geo.admin.ch/ch.bfe.ladestellen-elektromobilitaet/data/ch.bfe.ladestellen-elektromobilitaet_de.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    let data = await getData();
    console.log(data);
    let available = 0;
    let outOfService = 0;
    let occupied = 0;
    let unknown = 0;
    let total = 0;

    for (let i = 0; i < data.features.length; i++) {
        const availability = data.features[i].properties.Availability;
        total++;
        switch (availability) {
            case 'Available':
                available++;
                break;
            case 'OutOfService':
                outOfService++;
                break;
            case 'Occupied':
                occupied++;
                break;
            case 'Unknown':
                unknown++;
                break;
            default:
                break;
        }
    }


    var table = `<table id="availabilityTable">
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
    availabilityTable.innerHTML = table;

    const totalStations = document.getElementById('totalStations');
    totalStations.innerHTML = total;

    if (availabilityTable) {
        new simpleDatatables.DataTable(availabilityTable, { searchable: false, perPageSelect: false });
    }

}

renderUsers();