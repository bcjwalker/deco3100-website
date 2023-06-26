/*
############################################################
## CHART 1B (Compared version)                            ##
## Line chart comparing human population and biodiversity ##
############################################################
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
            name: 'Human population',
            type: 'scatter',
            yaxis: 'y2',

            marker: {
                color: 'hsl(353, 30%, 50%)',
            },
            line: {
                //dash: 'dot',
                width: 3
            },
            hovertemplate: '<b style="font-size: 25px; font-weight: 600 !important">%{y:,.1}</b><br>'+
                           '<b style="color: hsl(353, 15%, 70%)">%{x}</b><extra></extra>',
            hoverlabel: {
                bgcolor: "hsl(353, 15%, 20%)",
                bordercolor: "hsla(353, 5%, 30%, 0)",
                font: {
                    family: 'Figtree, sans-serif',
                    size: 13,
                    color: 'hsl(353, 5%, 90%)'
                    }
            },
        };
        var trace2 = {
            x: year,
            y: labelLpi,
            name: 'LPI',
            type: 'bar',
            yaxis: 'y',

            marker: {
                color: 'hsla(250, 35%, 50%, 0.65)',
            },
            fill: 'tonexty',
            fillcolor: 'hsla(250, 15%, 25%, 0.25)',
            hovertemplate: '<b style="font-size: 25px; font-weight: 600 !important">%{y}</b><br>'+
                           '<b style="color: hsl(250, 15%, 70%)">%{x}</b><extra></extra>',
            hoverlabel: {
                bgcolor: "hsl(250, 15%, 20%)",
                bordercolor: "hsla(250, 5%, 30%, 0)",
                font: {
                    family: 'Figtree, sans-serif',
                    size: 13,
                    color: 'hsl(250, 5%, 90%)'
                    }
            },
        };
    
    var chartData = [trace1,trace2];
    const chartLayout = {
        legend: {
            itemclick: false,
            itemdoubleclick: false,
            x: 1.1,
            traceorder: 'reversed',
        },
        bargap: 0.4,
        autosize: true,
        margin: {
            l: 65,
            r: 40,
            b: 80,
            t: 80,
            pad: 0
          },
        title: {
            text:'<b>Living Planet Index <b style="font-size: 16px; color: hsl(225, 5%, 70%); font-weight: 500 !important"> vs. </b> Human population</b>',
            font: {
              size: 18,
              color: 'hsl(225, 5%, 90%)'
            },
            xref: 'plot',
            x: 0.038,
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
            dtick: 4,

            tickcolor: 'hsl(200, 7%, 35%)',

            showgrid: false,
            showline: true,
            linewidth: 1,
            linecolor: 'hsl(200, 7%, 35%)'
        },
        yaxis: {
            fixedrange: true,
            autotick: false,
            ticks: 'outside',
            ticklen: 12,
            tickwidth: 1,
            dtick: 0.2,
            
            tickcolor: 'hsl(225, 5%, 20%)',
            tickfont: {color: 'hsl(250, 50%, 65%)'},
            
            showgrid: true,
            gridcolor: 'hsl(225, 5%, 20%)',
            showline: false,
            linewidth: 2,
            linecolor: 'hsl(353, 7%, 35%)'
        },
        yaxis2: {
            zeroline: true,
            side: 'right',
            overlaying: 'y',

            fixedrange: true,
            autotick: true,
            nticks: 8,
            ticks: 'outside',
            ticklen: 12,
            tickwidth: 0,
            tick0: 4,
            dtick: 1200000000,

            tickcolor: 'hsl(220, 0%, 15%)',
            tickfont: {color: 'hsl(353, 50%, 65%)'},
            
            showgrid: false,
            gridcolor: 'hsl(220, 0%, 23%)',
            showline: false,
            linewidth: 2,
            linecolor: 'hsl(200, 7%, 35%)',
        },

        hovermode: 'closest',
        hovertemplate: '<b>Country: </b>Australia<br>' + '<b>Year: </b>%{x}<br>' +
        '<b>Population: </b>%{y:.2f%}%<extra></extra>',

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
    Plotly.newPlot('chart1b', chartData, chartLayout, {displayModeBar: false, responsive: true});
});