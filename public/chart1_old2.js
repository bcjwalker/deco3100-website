/*
############################################################
## CHART 1                                                ##
## Line chart comparing human population and biodiversity ##
############################################################
*/

///////////////
// VARIABLES //
///////////////

// Generate a css rgb string w/ random color from 0-180
const randRGB = () => `rgb(
    (${Math.floor(Math.random() * 180)},
    ${Math.floor(Math.random() * 180)},
    ${Math.floor(Math.random() * 180)})`;
;

/////////////////
// START CHART //
/////////////////

// Initialise dataset CSV(s), and build chart(s)
Plotly.d3.csv(require("./assets/data/data1.csv"), rawData => {
    // Unpack outputs a row from a given dataset and key term
    const unpack = (data, key) => data.map(row => row[key]);
    console.log(rawData);
    
    // Female population line graphs
    // Init setting vars
    const year = unpack(rawData, 'year');
        // Lines
        const labelLpi = unpack(rawData, 'lpi_factor');
        const labelHumpop = unpack(rawData, 'human_pop');
        console.log(labelLpi);
        console.log(labelHumpop); 
        // Traces
        var trace1 = {
            x: year,
            y: labelLpi,
            name: 'LPI',
            yaxis: 'y2',
            type: 'scatter'
        };
        var trace2 = {
            x: year,
            y: labelHumpop,
            name: 'Human population',
            yaxis: 'y',

            type: 'bar'
        };
    
    var fempopData = [trace2,trace1];
    console.log(fempopData);
    const fempopLayout = {
        margin: {
            l: 100,
            r: 80,
            b: 80,
            t: 80,
            pad: 12
          },
        // No annotations for now
        /*
        annotations: [
            {
                x: 1970,
                y: 52.63183,
                text: 'Annotation',
                showarrow: true,
                arrowhead: 7,
                ax: 0,
                ay: -40
            }
        ],
        */
        title: '<b>Female Populations Worldwide</b>',
        xaxis: {
            automargin: true,
            //tickangle: 90,
            title: {
              standoff: 20
            },
        },
        yaxis: {
            fixedrange: true,
            title: 'Human population',
            showgrid: false,
            side: 'left',
            tickfont: {color: 'hsl(205, 71%, 70%)'},
            linewidth: 2,
            ticklen: 5,
            linecolor: 'hsl(205, 71%, 60%)',
            tickcolor: 'hsl(205, 71%, 70%)',
            showline: true
        },
        yaxis2: {
            fixedrange: true,
            title: 'Living Planet Index',
            showgrid: false,
            side: 'right',
            overlaying: 'y',
            tickfont: {color: 'hsl(19, 71%, 70%)'},
            linewidth: 2,
            ticklen: 5,
            linecolor: 'hsl(19, 71%, 60%)',
            tickcolor: 'hsl(19, 71%, 70%)',
            showline: true
        },

        hovermode: 'closest',
        hovertemplate: '<b>Country: </b>Australia<br>' + '<b>Year: </b>%{x}<br>' +
        '<b>Population: </b>%{y:.2f%}%<extra></extra>',
        hoverlabel: {
            bgcolor: "#FFF",
            bordercolor: "#003166",
            font: {
                family: 'DM Mono, monospace',
                size: 15,
                color: '#7f7f7f'
            }
        },
        font: {
            family: 'Readex Pro, sans-serif',
            color: 'hsl(225, 5, 90)',
            weight: 500,
            size: 13,
          },
        paper_bgcolor: 'hsl(225, 5%, 15%)',
        plot_bgcolor: 'hsl(225, 5%, 15%)',
    };


    // BUILD!
    Plotly.newPlot('chart1', fempopData, fempopLayout, {displayModeBar: false});
});