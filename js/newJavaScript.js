async function getData() {
    let url = 'https://data.geo.admin.ch/ch.bfe.ladestellen-elektromobilitaet/data/ch.bfe.ladestellen-elektromobilitaet_de.json';
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

    for (let i = 0; i < data.features.length; i++) {
        const availability = data.features[i].properties.Availability;
        allAvailibilities.push(availability);
    }

    let mapWithCount = {};
    allAvailibilities.forEach(function (x) { mapWithCount[x] = (mapWithCount[x] || 0) + 1; })

    renderAvailabilityTable(mapWithCount['Available'], mapWithCount['Occupied'], mapWithCount['OutOfService'], mapWithCount['Unknown']);
}

renderTable();