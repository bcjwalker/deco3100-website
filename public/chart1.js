/*
#############################################################
## CHART 1 (Side-by-side)                                  ##
## Line charts comparing human population and biodiversity ##
#############################################################
*/

///////////////
// VARIABLES //
///////////////


/////////////////
// START CHART //
/////////////////

// Initialise dataset CSV(s), and build chart(s)
Plotly.d3.csv(require("./assets/data/data1.csv"), rawData => {
    // Unpack outputs a row from a given dataset and key term
    const unpack = (data, key) => data.map(row => row[key]);
    
    // Init setting vars
    const year = unpack(rawData, 'year');
        // Lines
        const labelLpi = unpack(rawData, 'lpi_factor');
        const labelHumpop = unpack(rawData, 'human_pop');
        // Traces
        var trace1 = {
            x: year,
            y: labelHumpop,
            name: 'Human Population',
            type: 'scatter',

            marker: {
                color: 'hsl(353, 30%, 50%)',
            },
            line: {
                width: 3
            },
            fill: 'tonexty',
            fillcolor: 'hsla(353, 15%, 25%, 0.25)',
            hovertemplate: '<b style="font-size: 25px; font-weight: 600 !important">%{y:,.1}</b><br>'+
                           '<b style="color: darkgray">%{x}</b><extra></extra>',
        };
        var trace2 = {
            x: year,
            y: labelLpi,
            name: 'LPI',
            type: 'scatter',

            marker: {
                color: 'hsl(250, 30%, 50%)',
            },
            line: {
                width: 3
            },
            fill: 'tonexty',
            fillcolor: 'hsla(250, 15%, 25%, 0.25)',
            hovertemplate: '<b style="font-size: 25px; font-weight: 600 !important">%{y}</b><br>'+
                           '<b style="color: darkgray">%{x}</b><extra></extra>',
        };
    
    // Human pop chart
    var chartData = [trace1];
    const chartLayout = {
        /*
        annotations: [
            {
                x: 1986,
                y: 4950063000,
                text: 'Increase in<br>humans',
                showarrow: true,
                arrowhead: 6,
                ax: -10,
                ay: -36
            }
        ],
        */

        autosize: true,
        margin: {
            l: 70,
            r: 40,
            b: 80,
            t: 80,
            pad: 0
          },
        title: {
            text:'<b>Human population</b>',
            font: {
              size: 18,
              color: 'hsl(250, 5%, 82%)'
            },
            xref: 'plot',
            x: 0.065,
            y: 0.9
        },
        xaxis: {
            fixedrange: true,
            autotick: false,
            ticks: 'outside',
            //tickangle: 75,
            ticklen: 4,
            tickwidth: 1,
            tick0: 2,
            dtick: 8,

            tickcolor: 'hsl(200, 7%, 35%)',

            showgrid: false,
            showline: true,
            linewidth: 1,
            linecolor: 'hsl(200, 7%, 35%)'
        },
        yaxis: {
            zeroline: true,

            fixedrange: true,
            autotick: false,
            ticks: 'outside',
            ticklen: 12,
            tickwidth: 0,
            tick0: 4,
            dtick: 1500000000,

            tickcolor: 'hsl(225, 5%, 20%)',
            
            showgrid: true,
            gridcolor: 'hsl(225, 5%, 20%)',
            showline: false,
            linewidth: 2,
            linecolor: 'hsl(200, 7%, 35%)',
        },

        hovermode: 'closest',
        hovertemplate: '<b>Country: </b>Australia<br>' + '<b>Year: </b>%{x}<br>' +
        '<b>Population: </b>%{y:.2f%}%<extra></extra>',
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
            color: 'hsl(225, 5%, 53.5%)',
            weight: 500,
            size: 11,
          },
        paper_bgcolor: 'hsl(225, 5%, 15%)',
        plot_bgcolor: 'hsl(225, 5%, 15%)'
    };

    // LPI chart
    var chart1Data = [trace2];
    const chart1Layout = {
        /*
        annotations: [
            {
                x: 2002,
                y: 0.444983943,
                text: 'Decrease in<br>LPI',
                showarrow: true,
                arrowhead: 6,
                ax: 10,
                ay: -38
            }
        ],
        */

        autosize: true,
        margin: {
            l: 60,
            r: 40,
            b: 80,
            t: 80,
            pad: 0
          },
        title: {
            text:'<b>Living Planet Index</b>',
            font: {
              size: 18,
              color: 'hsl(225, 5%, 90%)'
            },
            xref: 'plot',
            x: 0.065,
            y: 0.9
        },        
        xaxis: {
            fixedrange: true,
            autotick: false,
            ticks: 'outside',
            //tickangle: 75,
            ticklen: 4,
            tickwidth: 1,
            tick0: 2,
            dtick: 8,

            tickcolor: 'hsl(353, 7%, 35%)',

            showgrid: false,
            showline: true,
            linewidth: 1,
            linecolor: 'hsl(353, 7%, 35%)'
        },
        yaxis: {
            fixedrange: true,
            autotick: false,
            ticks: 'outside',
            ticklen: 12,
            tickwidth: 1,
            dtick: 0.2,
            
            tickcolor: 'hsl(225, 5%, 20%)',
            
            showgrid: true,
            gridcolor: 'hsl(225, 5%, 20%)',
            showline: false,
            linewidth: 2,
            linecolor: 'hsl(353, 7%, 35%)'
        },

        hovermode: 'closest',
        hovertemplate: '<b>Country: </b>Australia<br>' + '<b>Year: </b>%{x}<br>' +
        '<b>Population: </b>%{y:.2f%}%<extra></extra>',
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
            color: 'hsl(225, 5%, 53.5%)',
            weight: 500,
            size: 11,
          },
        paper_bgcolor: 'hsl(225, 5%, 15%)',
        plot_bgcolor: 'hsl(225, 5%, 15%)',
    };

    // BUILD!
    Plotly.newPlot('chart1a', chart1Data, chart1Layout, {displayModeBar: false, responsive: true});
    Plotly.newPlot('chart1', chartData, chartLayout, {displayModeBar: false, responsive: true});
});