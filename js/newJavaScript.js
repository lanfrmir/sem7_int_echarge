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


    renderAvailabilityTable(available, occupied, outOfService, unknown);
}

renderTable();
