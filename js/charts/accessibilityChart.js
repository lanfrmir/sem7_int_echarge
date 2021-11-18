async function renderAccessibility() {
    var dataMap = await renderCharts();
    renderAccessibilityChart(createMapForChart(dataMap.allAccessibility));
}

function renderAccessibilityChart(accessibility) {
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
            name: 'Accessibility',
            colorByPoint: true,
            data: accessibility,
        }]
    });
}


renderAccessibility();