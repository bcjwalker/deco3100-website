/*
####################################################
## CHART 3                                        ##
## Sunburst chart showing reasons for extinctions ##
####################################################
*/

///////////////
// VARIABLES //
///////////////


/////////////////
// START CHART //
/////////////////

// Initialise dataset CSV(s), and build chart(s)
Plotly.d3.csv(require("./assets/data/data3.csv"), rawData => {
    // Unpack outputs a row from a given dataset and key term
    const unpack = (data, key) => data.map(row => row[key]);

    // Init setting vars
    // Lines
    const factorFractions = unpack(rawData, 'percent');
    const factorLabels = unpack(rawData, 'factor');
    console.log(factorFractions);
    console.log(factorLabels);

    // Human vars
    const humanFractions = factorFractions.slice(0,4);
    const humanLabels = factorLabels.slice(0,4);
    // Natural vars
    const naturalFractions = factorFractions.slice(4,8);
    const naturalLabels = factorLabels.slice(4,8);

    // Chart settings
    const chartData = [
        {
            r: humanFractions,
            theta: humanLabels,
            name: 'Natural',
            type: 'scatterpolar',
            fill: 'toself',
            marker: {
                color: 'hsl(250, 30%, 50%)',
                size: 10
            },
            line: {
                width: 3
            },
            fillcolor: 'hsla(250, 15%, 25%, 0.5)',
            hovertemplate: '<b style="font-size: 25px; font-weight: 600 !important">%{r}</b><br><b style="color: darkgray">%{theta}</b><extra></extra>',
        },
        {
            r: naturalFractions,
            theta: naturalLabels,
            name: 'Human',
            type: 'scatterpolar',
            fill: 'toself',
            marker: {
                color: 'hsl(353, 30%, 50%)',
                size: 10
            },
            line: {
                width: 3
            },
            fillcolor: 'hsla(353, 15%, 25%, 0.5)',
            hovertemplate: '<b style="font-size: 25px; font-weight: 600 !important">%{r}</b><br><b style="color: darkgray">%{theta}</b><extra></extra>',
        },
    ];
    const chartLayout = {
        autosize: true,
        margin: {
            l: 0,
            r: 60,
            b: 50,
            t: 110,
            pad: 10
          },
        legend: {
            itemclick: false,
            itemdoubleclick: false,
            title: {
                text:'<b style="color: hsl(225, 5%, 75%); font-weight: 500 !important">Drivers</b>',
                font: {
                    size: 12,
                    color: 'hsl(225, 5%, 65%)'
                  }
            },
            x: 0.91
        },
        title: {
            text:'<b>Drivers of the Holocene Extinction</b>',
            font: {
                size: 18,
                color: 'hsl(225, 5%, 82%)'
              },
              xref: 'plot',
              x: 0.046,
              y: 0.93
          },
        font: {
            family: 'Readex Pro, sans-serif',
            color: 'hsl(225, 5%, 60%)',
            weight: 500,
            size: 11,
          },
        polar: {
            gridshape: 'linear',
            hole: 0,
            radialaxis: {   
                angle: 0,
                visible: true,
                range: [0, 0.32],
                nticks: 5,
                ticklen: 0,
                tickformat: ',.0%',
                linewidth: 0,
                tickfont: {
                    color: 'hsl(200, 7%, 40%)',
                    size: 9
                },
            },
            angularaxis: {
                hoverformat: ',.0%',
                fixedrange: true,
                showline: false,
                direction: 'counterclockwise',

                gridcolor: 'hsl(200, 7%, 23%)',
                linecolor: 'hsl(200, 7%, 35%)',
                ticklen: 6,
                tickcolor: 'hsl(225, 5%, 17%)',
            },
            bgcolor: 'hsl(225, 5%, 17%)'
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
        paper_bgcolor: 'hsl(225, 5%, 17%)',
    };

    // BUILD!
    Plotly.newPlot('chart3', chartData, chartLayout, {displayModeBar: false, responsive: true});
});