//js file that holds the chart scripts

//line chart function
function makeLine(data){
    console.log("***************");

    Highcharts.chart('char1', {
        chart: {
            backgroundColor: 'transparent'
        },
        title: {
            text: 'Nominal GDP'
        },
        subtitle: {
            text: 'World Economy Dashboard'
        },
        yAxis: {
            title: {
                text: 'Nominal GDP'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
            pointStart: 2010
            }
        },
        series: data,
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    });
}

//pie chart function
function makePie(pie){

    Highcharts.chart('char2', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            backgroundColor: 'transparent',
            type: 'pie'
        },
        title: {
            text: 'Nominal GDP'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>${point.y:.1f}</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'GDP',
            colorByPoint: true,
            data: pie
        }]
    });
}

function getMap(){
    console.log("Here at map");
    //basic map config with custom fills, mercator projection
    var map = new Datamap({
        scope: 'world',
        element: document.getElementById('random'),
        //height: 500,
        responsive: true,
        projection: 'mercator',
        height: 500,
        fills: {
            defaultFill: '#f0af0a',
            lt50: 'rgba(26, 188, 156,1.0)',
            gt50: 'rgba(231, 76, 60,1.0)'
        },
        data: {
            USA: {fillKey: 'lt50' },
            RUS: {fillKey: 'lt50' },
            CAN: {fillKey: 'lt50' },
            BRA: {fillKey: 'gt50' },
            ARG: {fillKey: 'gt50'},
            COL: {fillKey: 'gt50' },
            AUS: {fillKey: 'gt50' },
            ZAF: {fillKey: 'gt50' },
            MAD: {fillKey: 'gt50' }
        },
        done: function(datamap) {
            datamap.svg.call(d3.behavior.zoom().on("zoom", redraw));

            function redraw() {
                    datamap.svg.selectAll("g").attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
            }

            window.addEventListener('resize', function(event){
                map.resize();
        });
    }
    })
}