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
function GDP(gdp){

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
            data: gdp
        }]
    });
}

function PPP(ppp){

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
            data: ppp
        }]
    });
}

function Popul(pop){

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
            data: pop
        }]
    });
}

function livStand(liv){

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
            data: liv
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

function easeDB(ease){

    Highcharts.chart('char6', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            backgroundColor: 'transparent',
            type: 'column'
        },
        title: {
            text: 'Ease of Doing Business'
        },
        subtitle: {
            text: 'When obstacles and the burden of doing business are high, profitability and growth are hindered'
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
            data: ease
        }]
    });
}

//7
function GroupGPDreal(gdpreal){
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
        series: gdpreal,
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

//8
function GroupGPDnom(){
    //stacked area chart
}

//9
function GroupPop(graph){

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

//US, Canada, Japan
function G7realGDP1(g7gdp1){
    console.log("***************");

    Highcharts.chart('char10', {
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
        series: g7gdp1,
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

//France, Germany, Italy, UK
function G7realGDP2(g7gdp2){
    console.log("***************");

    Highcharts.chart('char11', {
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
        series: g7gdp2,
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

//US, Canada, Japan
function G7_CPI1(g7cpi1){
    console.log("***************");

    Highcharts.chart('char12', {
        chart: {
            backgroundColor: 'transparent'
        },
        title: {
            text: 'CPI YOY Change'
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
        series: g7cpi1,
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

//France, Germany, Italy, UK
function G7_CPI2(g7cpi2){
    console.log("***************");

    Highcharts.chart('char13', {
        chart: {
            backgroundColor: 'transparent'
        },
        title: {
            text: 'CPI YOY Change'
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
        series: g7cpi2,
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

function BRICrealGDP(bricgdp){
    console.log("***************");

    Highcharts.chart('char14', {
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
        series: bricgdp,
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

function BRIC_CPI(briccpi){
    console.log("***************");

    Highcharts.chart('char15', {
        chart: {
            backgroundColor: 'transparent'
        },
        title: {
            text: 'CPI YOY Change'
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
        series: briccpi,
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

//India, China
function BRICpop1(bricpop1a, bricpop1b){

    Highcharts.chart('char16', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            backgroundColor: 'transparent',
            type: 'column'
        },
        title: {
            text: 'Population'
        },
        subtitle: {
            text: ' '
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
            name: 'India',
            data: bricpop1a
        }, {
            name: 'China',
            data: bricpop1b
        }]
    });
}

//Brazil, Russia
function BRICpop2(bricpop2a, bricpop2b){

    Highcharts.chart('char17', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            backgroundColor: 'transparent',
            type: 'column'
        },
        title: {
            text: 'Population'
        },
        subtitle: {
            text: ' '
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
            name: 'Brazil',
            data: bricpop2a
        }, {
            name: 'Russia',
            data: bricpop2b
        }]
    });
}

function MISTrealGDP(mistgdp){
    console.log("***************");

    Highcharts.chart('char18', {
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
        series: mistgdp,
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

function MIST_CPI(mistcpi){
    console.log("***************");

    Highcharts.chart('char19', {
        chart: {
            backgroundColor: 'transparent'
        },
        title: {
            text: 'CPI YOY Change'
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
        series: mistcpi,
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

function MISTpop(mistpopa, mistpopb, mistpopc, mistpopd){

    Highcharts.chart('char20', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            backgroundColor: 'transparent',
            type: 'column'
        },
        title: {
            text: 'Population'
        },
        subtitle: {
            text: ' '
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
            name: 'Mexico',
            data: mistpopa
        }, {
            name: 'Indonesia',
            data: mistpopb
        },{  
            name: 'South Korea',
            data: mistpopc
        }, {
            name: 'Turkey',
            data: mistpopd
        }]
    });
}

function Tier4realGDP(gdp4){
    console.log("***************");

    Highcharts.chart('char21', {
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
        series: gdp4,
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

function Tier4_CPI(cpi4){
    console.log("***************");

    Highcharts.chart('char22', {
        chart: {
            backgroundColor: 'transparent'
        },
        title: {
            text: 'CPI YOY Change'
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
        series: cpi4,
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

function Tier4pop(pop4a, pop4b, pop4c, pop4d, pop4e, pop4f){

    Highcharts.chart('char23', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            backgroundColor: 'transparent',
            type: 'column'
        },
        title: {
            text: 'Population'
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
            name: 'Singapore',
            data: pop4a
        }, {
            name: 'Hong Kong',
            data: pop4b
        },{  
            name: 'Australia',
            data: pop4c
        },{  
            name: 'South Africa',
            data: pop4d
        },{  
            name: 'Nigeria',
            data: pop4e    
        }, {
            name: 'Saudi Arabia',
            data: pop4f
        }]
    });
}

function G7unemp(ug7){
    console.log("***************");

    Highcharts.chart('char24', {
        chart: {
            backgroundColor: 'transparent'
        },
        title: {
            text: 'G7'
        },
        subtitle: {
            text: 'World Economy Dashboard'
        },
        yAxis: {
            title: {
                text: 'Unemployment'
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
        series: ug7,
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

function BRICunemp(ubric){
    console.log("***************");

    Highcharts.chart('char25', {
        chart: {
            backgroundColor: 'transparent'
        },
        title: {
            text: 'Unemployment'
        },
        subtitle: {
            text: 'BRIC'
        },
        yAxis: {
            title: {
                text: 'Unemployment'
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
        series: ubric,
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

function MISTunemp(umist){
    console.log("***************");

    Highcharts.chart('char26', {
        chart: {
            backgroundColor: 'transparent'
        },
        title: {
            text: 'Unemployment'
        },
        subtitle: {
            text: 'MIST'
        },
        yAxis: {
            title: {
                text: 'Unemployment'
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
        series: umist,
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

function Tier4unemp(u4){
    console.log("***************");

    Highcharts.chart('char27', {
        chart: {
            backgroundColor: 'transparent'
        },
        title: {
            text: 'Unemployment'
        },
        subtitle: {
            text: 'Tier 4'
        },
        yAxis: {
            title: {
                text: 'Unemployment'
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
        series: u4,
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

function G7retail(retg7){
    console.log("***************");

    Highcharts.chart('char28', {
        chart: {
            backgroundColor: 'transparent'
        },
        title: {
            text: 'Retail Sales'
        },
        subtitle: {
            text: 'G7'
        },
        yAxis: {
            title: {
                text: ''
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
        series: retg7,
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

function BRICretail(retbric){
    console.log("***************");

    Highcharts.chart('char29', {
        chart: {
            backgroundColor: 'transparent'
        },
        title: {
            text: 'Retail Sales'
        },
        subtitle: {
            text: 'BRIC'
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
        series: retbric,
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

function MISTretail(retmist){
    console.log("***************");

    Highcharts.chart('char30', {
        chart: {
            backgroundColor: 'transparent'
        },
        title: {
            text: 'Retail Sales'
        },
        subtitle: {
            text: 'MIST'
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
        series: retmist,
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

function Tier4retail(ret4){
    console.log("***************");

    Highcharts.chart('char31', {
        chart: {
            backgroundColor: 'transparent'
        },
        title: {
            text: 'Retail Sales'
        },
        subtitle: {
            text: 'Tier 4'
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
        series: ret4,
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

/* function getMap(){
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
} */

function getMap(){
    console.log("Here at map");
    $.getJSON('https://cdn.rawgit.com/highcharts/highcharts/057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/world-population-density.json', function (data) {

        // Prevent logarithmic errors in color calulcation
        $.each(data, function () {
            this.value = (this.value < 1 ? 1 : this.value);
        });

        // Initiate the chart
        Highcharts.mapChart('random', {

            chart: {
                map: 'custom/world',
                backgroundColor: null
            },

            title: {
                text: 'Population Density'
            },

            legend: {
                title: {
                    text: 'Population density per km²',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                    }
                }
            },

            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },

            tooltip: {
                backgroundColor: 'none',
                borderWidth: 0,
                shadow: false,
                useHTML: true,
                padding: 10,
                pointFormat: '<span class="f32"><span class="flag {point.properties.hc-key}">' +
                    '</span></span> {point.name}<br>' +
                    '<span style="font-size:30px">{point.value}/km²</span>',
                positioner: function () {
                    return { x: 0, y: 250 };
                }
            },

            colorAxis: {
                min: 1,
                max: 1000,
                type: 'logarithmic'
            },

            series: [{
                data: data,
                joinBy: ['iso-a3', 'code3'],
                name: 'Population density',
                states: {
                    hover: {
                        color: '#a4edba'
                    }
                }
            }]
        })
    });

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

$('#one').change(function() {
    var val = $("#one option:selected").text();
    alert(val);
    var id = 'one';
    alert(id);
    $.ajax({
        type: "POST",
        url: "/sss", //Your required php page
        data: {val, id}, //pass your required data here
        success: function () { //You obtain the response that you echo from your controller
            console.log('success');
            //GDP(data);
        },
        error: function () {
            alert("Failed to pass in year and function id");
        }
    }
)});