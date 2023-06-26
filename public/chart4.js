/*
######################################################
## CHART 4                                          ##
## Global land distribution 100% stacked area chart ##
######################################################
*/

///////////////
// VARIABLES //
///////////////


/////////////////
// START CHART //
/////////////////

// Initialise dataset CSV(s), and build chart(s)
Plotly.d3.csv(require("./assets/data/data4.csv"), rawData => {
    // Unpack outputs a row from a given dataset and key term
    const unpack = (data, key) => data.map(row => row[key]);
    
    // Climate scenarios/diversity loss line graph
    // Init setting vars
    const year = unpack(rawData, 'year');
        // Lines
        const landCities = unpack(rawData, 'Cities');
        const landVillage = unpack(rawData, 'Villages');
        const landCrop = unpack(rawData, 'Cropland');
        const landRange = unpack(rawData, 'Rangeland');
        const landSemi = unpack(rawData, 'Seminatural');
        const landWild = unpack(rawData, 'Wild');
        const landOverallHuman = unpack(rawData, 'humanfactor');

        // Traces
        var trace1 = {
            x: year,
            y: landWild,
            name: 'Wild',
            stackgroup: 'one',
            legendgroup: 'group2',
            legendgrouptitle: {
                text: '<b>Natural</b>'
            },
            text: 'Wild',
            textposition: 'auto',
            
            width: 0.65,
            marker: {
                color: 'hsl(250, 30%, 50%)',
            },
            hovertemplate: '<b style="font-size: 25px; font-weight: 600 !important">%{y:.2%}</b><br>'+
                           '<b style="color: darkgray">%{x}</b>',
        };
        var trace2 = {
            x: year,
            y: landSemi,
            name: 'Seminatural',
            stackgroup: 'one',
            legendgroup: 'group2',

            width: 0.65,
            marker: {
                color: 'hsl(245, 25%, 43%)',
            },
            hovertemplate: '<b style="font-size: 25px; font-weight: 600 !important">%{y:.2%}</b><br>'+
                           '<b style="color: darkgray">%{x}</b>',
        };
        var trace3 = {
            x: year,
            y: landRange,
            name: 'Rangeland',
            stackgroup: 'one',
            legendgroup: 'group',
            legendgrouptitle: {
                text: '<b>Human</b>'
            },

            width: 0.65,
            marker: {
                color: 'hsl(350, 25%, 50%)',
            },
            hovertemplate: '<b style="font-size: 25px; font-weight: 600 !important">%{y:.2%}</b><br>'+
                           '<b style="color: darkgray">%{x}</b>',
        };
        var trace4 = {
            x: year,
            y: landCrop,
            name: 'Cropland',
            stackgroup: 'one',
            legendgroup: 'group',

            width: 0.65,
            marker: {
                color: 'hsl(340, 25%, 45%)',
            },
            hovertemplate: '<b style="font-size: 25px; font-weight: 600 !important">%{y:.2%}</b><br>'+
                           '<b style="color: darkgray">%{x}</b>',
        };
        var trace5 = {
            x: year,
            y: landVillage,
            name: 'Villages',
            stackgroup: 'one',
            legendgroup: 'group',

            width: 0.65,
            marker: {
                color: 'hsl(330, 25%, 40%)',
            },
            hovertemplate: '<b style="font-size: 25px; font-weight: 600 !important">%{y:.2%}</b><br>'+
                           '<b style="color: darkgray">%{x}</b>',
        };
        var trace6 = {
            x: year,
            y: landCities,
            name: 'Cities',
            stackgroup: 'one',
            legendgroup: 'group',
            legendwidth: 100,

            width: 0.65,
            marker: {
                color: 'hsl(320, 25%, 35%)',
            },
            hovertemplate: '<b style="font-size: 25px; font-weight: 600 !important">%{y:.2%}</b><br>'+
                           '<b style="color: darkgray">%{x}</b>',
            hoverinfo: 'x',
            hovertext: 'test'
        };
        var trace7 = {
            x: year,
            y: landOverallHuman,
            name: 'Human share',
            type: 'line',
            showlegend: false,
        }
    
    var chartData = [trace1,trace2,trace3,trace4,trace5,trace6];
    const chartLayout = {
        // Point out present century
        annotations: [
            {
                x: 65,
                y: 1,
                text: 'Present century',
                showarrow: true,
                arrowhead: 0,
                ax: 0,
                ay: -20
            },
        ],
        // Darken non-present bit of histogram
        shapes: [
            {
                type: 'rect',
                xref: 'x',
                yref: 'paper',
                x0: -0.5,
                y0: 0,
                x1: 56.5,
                y1: 1,
                opacity: 0.35,
                fillcolor: 'hsl(225, 5%, 17%)',
                line: {
                    width: 0,
                },
            },
        ],

        showlegend: true,
	    legend: {
            itemclick: false,
            itemdoubleclick: false,
            title: {
                text:'<b style="color: hsl(225, 5%, 70%); font-weight: 500 !important">Human<br><br><br><br><br><br><br><br><br>Natural</b>',
                font: {
                    size: 12,
                    color: 'hsl(225, 5%, 65%)'
                  }
            },
            orientation: 'v',
            x: 1.065,
            xanchor: 'left',
            y: 0.92,
            font: {
              size: 11,
            },
            //bgcolor: 'hsl(225, 5%, 17%)'
        },
        barmode: 'stack',
        margin: {
            l: 50,
            r: 60,
            b: 50,
            t: 60,
            pad: 0
          },

        title: {
            text:'<b>Total global land use: 10,000 BC to 2015</b>',
            font: {
              size: 18,
              color: 'hsl(225, 5%, 82%)'
            },
            xref: 'plot',
            x: 0.065,
            y: 0.93
        },
        xaxis: {
            showspikes: true,
            spikethickness: 1,
            spikedash: 'dash',
            spikesnap: 'cursor',

            type: 'category',
            range: [0,72],
            autorange: false,
            fixedrange: true,

            nticks: 8,
            autotick: true,
            ticks: 'outside',
            tickcolor: 'hsl(353, 0%, 45%)',

            showgrid: false,
            showline: true,
            linewidth: 1,
            linecolor: 'hsl(353, 0%, 45%)'
        },
        yaxis: {
            fixedrange: true,
            tickformat: ',.0%',
            showticklabels: false,

            showgrid: false,
            gridcolor: 'hsl(353, 0%, 18%)',
            showline: false,
            linewidth: 2,
            linecolor: 'hsl(353, 0%, 23%)'
        },

        dragmode: false,
        hovermode: 'closest',
        hoverlabel: {
            bgcolor: "hsl(225, 5%, 20%)",
            bordercolor: "hsla(225, 5%, 30%, 0)",
            font: {
                family: 'Figtree, sans-serif',
                size: 13,
                color: 'hsl(225, 5%, 90%)'
            }
        },
        font: {
            family: 'Readex Pro, sans-serif',
            color: 'hsl(225, 5%, 60%)',
            weight: 500,
            size: 11,
          },
        paper_bgcolor: 'hsl(225, 5%, 17%)',
        plot_bgcolor: 'hsl(225, 5%, 17%)',
    };


    // BUILD!
    Plotly.newPlot('chart4', chartData, chartLayout, {displayModeBar: false, responsive: true});
});