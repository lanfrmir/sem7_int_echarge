async function getData() {
    let url = 'https://upload.geo.admin.ch/ch.bfe.ladestellen-elektromobilitaet/data/oicp/ch.bfe.ladestellen-elektromobilitaet.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    let data = await getData();
    let countFreeAccess = 0;
    let countPayingAccess = 0;
    let countRestricted = 0;
    let countOthers = 0;
    let countTotal = 0;
    let placesMap = [];
    let tableRowData = [];

    console.log(data.EVSEData);

    for (var i = 0; i < data.EVSEData.length; i++) {
        var place = data.EVSEData[i].OperatorName;
        var record = data.EVSEData[i].EVSEDataRecord;
        let countPerPlace = 0;

        for (var j = 0; j < record.length; j++) {
            countPerPlace += 1;
            countTotal += 1;
            if (record[j].Accessibility == 'Free publicly accessible') {
                countFreeAccess += 1;
            } else if (record[j].Accessibility == 'Paying publicly accessible') {
                countPayingAccess += 1;
            } else if (record[j].Accessibility == 'Restricted access') {
                countRestricted += 1;
            } else {
                countOthers += 1;
            }

            let address = record[j].Address;
            let country = address.Country;
            let city = address.City;
            let postalCode = address.PostalCode;
            let street = address.Street;
            let houseNo = address.HouseNum;

            tableRowData.push(`<tr><td>${country}</td><td>${city}</td><td>${postalCode}</td><td>${street} ${houseNo}</td></tr>`)
        }
        placesMap.push([place, countPerPlace]);
    }
    let percentageFreeAccess = countFreeAccess / countTotal * 100;
    let percentagePayingAccess = countPayingAccess / countTotal * 100;
    let percentageRestricted = countRestricted / countTotal * 100;
    let percentageOthers = countOthers / countTotal * 100;



    let myBigString = '';
    for (var k = 0; k < tableRowData.length; k++) {
        myBigString += tableRowData[k];
    }



    var table = `<table id="datatablesSimple">
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>City</th>
                            <th>Postal code</th>
                            <th>Street & no</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Country</th>
                            <th>City</th>
                            <th>Postal code</th>
                            <th>Street & no</th>
                        </tr>
                    </tfoot>
                    <tbod>${myBigString}</tbod>
                </table>`;

    const datatablesSimple = document.getElementById('datatablesSimple');
    datatablesSimple.innerHTML = table;
    document.getElementById('removable').remove(); //remove loading

    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
    }

    renderAccessibilityChart(placesMap);
    renderBarChart(percentageFreeAccess, percentagePayingAccess, percentageRestricted, percentageOthers);
}

renderUsers();


function renderBarChart(percentageFreeAccess, percentagePayingAccess, percentageRestricted, percentageOthers) {
    Highcharts.chart('accessibility', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            name: 'Accessibility',
            colorByPoint: true,
            data: [{
                name: 'Free publicly accessible',
                y: percentageFreeAccess,
                sliced: true,
                selected: true
            }, {
                name: 'Paying publicly accessible',
                y: percentagePayingAccess
            }, {
                name: 'Restricted access',
                y: percentageRestricted
            }, {
                name: 'Others',
                y: percentageOthers
            }]
        }]
    });
}

function renderAccessibilityChart(placesMap) {
    Highcharts.chart('container2', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population (millions)'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
        },
        series: [{
            name: 'Population',
            data: placesMap,
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}',
                y: 10,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
}

