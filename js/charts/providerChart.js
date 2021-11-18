async function renderProvider() {
    var dataMap = await getData();
    renderProviderChart(createMapForChart(dataMap.allPlaces));
}

function renderProviderChart(placesMap) {
    Highcharts.chart('providerChart', {
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
            pointFormat: '{series.name}: <b>{point.valueAbsolute}</b>'
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
            name: 'Stations',
            data: placesMap,
            colorByPoint: true
        }]
    });
}

renderProvider();