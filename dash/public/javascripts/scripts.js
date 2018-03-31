//js file that holds the chart scripts

//line chart function
/*
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
*/
//pie chart function
function pieGDP(p1){

    Highcharts.chart('char1', {
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
            data: p1
        }]
    });
}

function piePPP(p2){

    Highcharts.chart('char2', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            backgroundColor: 'transparent',
            type: 'pie'
        },
        title: {
            text: 'GDP PPP'
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
            name: 'GDP PPP',
            colorByPoint: true,
            data: p2
        }]
    });
}

function piePopulation(p3){

    Highcharts.chart('char3', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            backgroundColor: 'transparent',
            type: 'pie'
        },
        title: {
            text: 'Population'
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
            name: 'GDP PPP',
            colorByPoint: true,
            data: p3
        }]
    });
}

function lineGDPGrowth1(l2){
    console.log("***************");

    Highcharts.chart('char6', {
        chart: {
            backgroundColor: 'transparent'
        },
        title: {
            text: 'Real GDP YOY Growth'
        },
        subtitle: {
            text: 'World Economy Dashboard'
        },
        yAxis: {
            title: {
                text: 'GDP'
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
        series: l2,
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

function lineGDPGrowth2(l3){
    console.log("***************");

    Highcharts.chart('char7', {
        chart: {
            backgroundColor: 'transparent'
        },
        title: {
            text: 'Real GDP YOY Growth'
        },
        subtitle: {
            text: 'World Economy Dashboard'
        },
        yAxis: {
            title: {
                text: 'GDP'
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
        series: l3,
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

function livingStand(graph){

    Highcharts.chart('char4', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            backgroundColor: 'transparent',
            type: 'column'
        },
        title: {
            text: 'Standard of Living'
        },
        subtitle: {
            text: 'GDP per Capita in US dollars on a purchasing power parity(PPP)'
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}k</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        xAxis:{
            categories: null,
            title:{
                text:['Countries']
            },
            crosshair: true
        },
        yAxis: {
            min: 0,
            title:{
                text: '$USD',
                align: 'high'}
                ,
                labels: {
                    overflow: 'justify'
                }
            }
        ,
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth:0,
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
            data: graph
        }]
    });
}

function cSpend(spend){

    Highcharts.chart('char5', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            backgroundColor: 'transparent',
            type: 'column'
        },
        title: {
            text: 'Significance of Consumer Spending'
        },
        subtitle: {
            text: 'Domestic demand is normally more stable than exports, buffering a nation from price shocks and barriers.'
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        xAxis:{
            categories: null,
            title:{
                text:['Countries']
            },
            crosshair: true
        },
        yAxis: {
            min: 0,
            title:{
                text: '$USD',
                align: 'high'}
                ,
                labels: {
                    overflow: 'justify'
                }
            }
        ,
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth:0,
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
            data: spend
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

/* function getWorld(){
    
    // Load the data from a Google Spreadsheet
    // https://docs.google.com/spreadsheets/d/1WBx3mRqiomXk_ks1a5sEAtJGvYukguhAkcCuRDrY1L0/pubhtml
    Highcharts.data({
        googleSpreadsheetKey: '1WBx3mRqiomXk_ks1a5sEAtJGvYukguhAkcCuRDrY1L0',

        // Custom handler when the spreadsheet is parsed
        parsed: function (columns) {

            // Read the columns into the data array
            var data = [];
            Highcharts.each(columns[0], function (code, i) {
                data.push({
                    code: code.toUpperCase(),
                    value: parseFloat(columns[2][i]),
                    name: columns[1][i]
                });
            });

            // Initiate the chart
            Highcharts.mapChart('worldMap', {
                chart: {
                    map: 'custom/world',
                    borderWidth: 1
                },

                colors: ['rgba(19,64,117,0.05)', 'rgba(19,64,117,0.2)', 'rgba(19,64,117,0.4)',
                    'rgba(19,64,117,0.5)', 'rgba(19,64,117,0.6)', 'rgba(19,64,117,0.8)', 'rgba(19,64,117,1)'],

                title: {
                    text: 'Population density by country (/km²)'
                },

                mapNavigation: {
                    enabled: true
                },

                legend: {
                    title: {
                        text: 'Individuals per km²',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                        }
                    },
                    align: 'left',
                    verticalAlign: 'bottom',
                    floating: true,
                    layout: 'vertical',
                    valueDecimals: 0,
                    backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(255, 255, 255, 0.85)',
                    symbolRadius: 0,
                    symbolHeight: 14
                },

                colorAxis: {
                    dataClasses: [{
                        to: 3
                    }, {
                        from: 3,
                        to: 10
                    }, {
                        from: 10,
                        to: 30
                    }, {
                        from: 30,
                        to: 100
                    }, {
                        from: 100,
                        to: 300
                    }, {
                        from: 300,
                        to: 1000
                    }, {
                        from: 1000
                    }]
                },

                series: [{
                    data: data,
                    joinBy: ['iso-a3', 'code'],
                    animation: true,
                    name: 'Population density',
                    states: {
                        hover: {
                            color: '#a4edba'
                        }
                    },
                    tooltip: {
                        valueSuffix: '/km²'
                    },
                    shadow: false
                }]
            });
        },
        error: function () {
            document.getElementById('container').innerHTML = '<div class="loading">' +
                '<i class="icon-frown icon-large"></i> ' +
                'Error loading data from Google Spreadsheets' +
                '</div>';
        }
    });

} */