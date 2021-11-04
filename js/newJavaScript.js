async function getData() {
    let url = 'https://data.geo.admin.ch/ch.bfe.ladestellen-elektromobilitaet/status/oicp/ch.bfe.ladestellen-elektromobilitaet.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderTable() {
    let data = await getData();
    let allAvailibilities = [];

    for (let i = 0; i < data.EVSEStatuses.length; i++) {
        for (let k = 0; k < data.EVSEStatuses[i].EVSEStatusRecord.length; k++) {
            const availability = data.EVSEStatuses[i].EVSEStatusRecord[k].EVSEStatus;
            allAvailibilities.push(availability);
        }
    }

    let mapWithCount = {};
    allAvailibilities.forEach(function (x) { mapWithCount[x] = (mapWithCount[x] || 0) + 1; })

    renderAvailabilityTable(mapWithCount['Available'], mapWithCount['Occupied'], mapWithCount['OutOfService'], mapWithCount['Unknown']);
}

renderTable();