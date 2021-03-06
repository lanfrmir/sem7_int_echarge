async function renderPlugs() {
    var dataMap = await getData();
    renderPlugsChart(createMapForChart(dataMap.allPlugs));
}

function renderPlugsChart(plugs) {
    Highcharts.chart('plugsChart', {
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
            name: 'Count',
            colorByPoint: true,
            data: plugs
        }]
    });
}

renderPlugs();