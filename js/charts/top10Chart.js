async function renderTep10() {
    var dataMap = await getData();
    var test = createMapForChart(dataMap.allPlaces);
    console.log(test);
    var newTest = [];
    for (let i = 0; i < test.length; i++) {
        const element = test[i];
        if (element.valueAbsolute > 100) {
            newTest.push(element);
        }
        
    }
    renderTop10Chart(newTest);
}

function renderTop10Chart(accessibility) {
    Highcharts.chart('top10', {
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

renderTep10();