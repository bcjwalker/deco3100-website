/*
####################################################
## CHART 2                                        ##
## Big chloropleth for human arrivals-extinctions ##
####################################################
*/

///////////////
// VARIABLES //
///////////////


////////////////////////
// PAGE FUNCTIONALITY //
////////////////////////

// Initialise dataset CSV(s), and build chart(s)
Plotly.d3.csv(require("./assets/data/data2years.csv"), rawDataYears => {
// Unpack outputs a row from a given dataset and key term
const unpack = (data, key) => data.map(row => row[key]);
const years = unpack(rawDataYears, 'year');
const yearsLength = years.length;
var chartSliderTime = years[0];

    // Human migration rates layer
    Plotly.d3.csv(require("./assets/data/data2-homo.csv"), rawDataHomo => {
        console.log(rawDataHomo);

        // Init setting vars
        var locationsList = unpack(rawDataHomo, 'country');
        console.log(locationsList);
        
        const chartHomoData = {
            name: 'Human migration',
            type: 'choropleth',
            locationmode: 'geojson-id',
            // Custom continents.json that spans continent codes rather than country codes, kudos to https://gist.github.com/hrbrmstr/91ea5cc9474286c72838
            geojson: require("./assets/continents.json"),
                featureidkey: 'properties.CONTINENT',

            locations: locationsList,
            z: unpack(rawDataHomo, chartSliderTime),
            text: locationsList,    
            zmin: 0,
            zmax: 1,

            hoverinfo: 'none',
            //hovertemplate: '<b>%{text}</b> <br>' +
            //               '%{z:.0%}',

            autocolorscale: false,
            colorscale: [[0,'hsl(225, 5%, 15%)'],[0.5,'hsl(225, 20%, 65%)'],[1,'hsl(225, 30%, 30%)']],
            colorbar: {
                x: -0.15725,
                xanchor: 'left',
                y: 0.52,
                title: {
                    text: 'Human<br>migration rate',
                    font: {
                        size: 12,
                        color: 'hsl(225, 5%, 65%)'
                    }
                },

                tickformat: '%{z:.0%}',
                
                thickness: 14,
                outlinecolor: 'hsl(225, 5%, 19%)',
                len: 0.64,
                ticklen: 8,
                tickcolor: 'hsl(225, 5%, 15%)',
                tickfont: {
                    size: 11,
                    color: 'hsl(225, 5%, 45%)',
                }
            },
            marker: {
                line:{
                    color: 'hsl(225, 15%, 20%)', 
                    width: 0.5
                },
            }
        };

        // Extinction rates layer
        Plotly.d3.csv(require("./assets/data/data2-ext.csv"), rawDataExt => {
            console.log(rawDataExt);

            const chartExtData = {
                name: 'Extinctions',
                type: 'scattergeo',
                locationmode: 'geojson-id',
                geojson: require("./assets/continents.json"),
                featureidkey: 'properties.CONTINENT',
    
                locations: locationsList,
                z: unpack(rawDataExt, chartSliderTime),
                text: locationsList,

                hovertemplate: [
                    '<b style="font-size: 25px; font-weight: 600 !important">20%</b><br><b style="color: darkgray">extinction rate</b><br><br><extra></extra>' +
                    '<b style="color: hsl(225, 5%, 60%); font-weight: 600 !important"">African mammals evolved' +
                    '<br>alongside humans, and<br>were less impacted.</b>',

                    '<b style="font-size: 25px; font-weight: 600 !important">36%</b><br><b style="color: darkgray">extinction rate</b><br><br><extra></extra>', 

                    // Asia empty
                    '', 
                    
                    '<b style="font-size: 25px; font-weight: 600 !important">88%</b><br><b style="color: darkgray">extinction rate</b><br><br><extra></extra>',

                    '<b style="font-size: 25px; font-weight: 600 !important">83%</b><br><b style="color: darkgray">extinction rate</b><br><br><extra></extra>',

                    '<b style="font-size: 25px; font-weight: 600 !important">72%</b><br><b style="color: darkgray">extinction rate</b><br><br><extra></extra>'
                ],

                marker: {
                    size: [10, 0, 0, 2.777778, 0, 0],
                    cmin: 0,
                    cmax: 1,

                    color: 'hsl(353, 15%, 17%)',

                    line: {
                        color: 'hsl(353, 30%, 50%)',
                        width: 2
                    }
                },
            };
            
            const chartData = [chartHomoData, chartExtData];

            // Generating arrays for slider steps + frames
            var sliderSteps = [];
            for(i=0; i < yearsLength; i++) {
                sliderSteps.push(
                    {
                        label: `${years[i]} BC`,
                        name: `${years[i]} BC`,
                        method: 'animate',
                        args: [[years[i]], {
                            frame: {duration: 0},
                        }]
                    },
                )
            };
            var framesArr = [];
            for(i=0; i < yearsLength; i++) {
                const newDataHomo = unpack(rawDataHomo, years[i]);
                const newDataExt = unpack(rawDataExt, years[i]);
                let frame;
                frame = {
                    name: years[i],
                    data: [
                        {
                            z: newDataHomo
                        }, 
                        {
                            z: newDataExt,
                            marker: {
                                size: [(newDataExt[0] * 50), (newDataExt[1] * 50), (newDataExt[2] * 50), (newDataExt[3] * 50), (newDataExt[4] * 50), (newDataExt[5] * 50)]
                            }
                        }
                    ],
                };

                /* Too annoying lol: annotations that pop up at certain year groups

                if(years[i] == 50000) {
                    Object.assign(frame, {layout:{
                        annotations: [
                            {
                                x: 1,
                                y: 1,
                                text: '<b style="color: hsl(225, 10%, 65%)">Scenario 1</b><br><b style="font-size: 16px; font-weight: 600 !important">4.5°</b>',
                                font: {
                                    family: 'Figtree, sans-serif',
                                    size: 12,
                                    color: 'hsl(225, 10%, 85%)'
                                },
                                showarrow: true,
                                arrowhead: 6,
                                ax: 50,
                                ay: 0,
                                align: 'left',
                                borderpad: 10,
                                arrowwidth: 2,
                                arrowcolor: 'hsl(225, 20%, 30%)',
                    
                                bordercolor: 'hsl(225, 20%, 30%)',
                                borderwidth: 0,
                                borderpad: 6,
                                bgcolor: 'hsla(225, 15%, 25%, 0.5)',
                                opacity: 0.8
                            },
                        ]
                    }
                });
                };
                */

                framesArr.push(frame);
            }
            const chartFrames = framesArr;

            const chartLayout = {
                // One shape for controls bg
                shapes: [
                    {
                        type: 'rect',
                        xref: 'paper',
                        yref: 'paper',
                        x0: 1.2,
                        y0: -0.4,
                        x1: -0.5,
                        y1: 0.07,
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
                    itemsizing: 'constant',
                    x: -0.16325,
                    xanchor: 'left',
                    y: 0.91,

                    font: {
                        size: 12,
                        color: 'hsl(225, 5%, 65%)'
                      },
                    bgcolor: 'hsla(225, 5%, 23%, 0)'
                },
                title: {
                    text:'<b>Human migration & large mammal extinctions</b>',
                    font: {
                      size: 18,
                      color: 'hsl(225, 5%, 82%)'
                    },
                    xref: 'plot',
                    x: 0.0325,
                    y: 0.945
                },      
                geo: {
                    showframe: false,
                    projection: {
                        type: 'mt flat polar quartic',
                        rotation: {
                            lon: 10
                        }
                    },
                    bgcolor: 'hsl(225, 5%, 15%)',
                },
                margin: {
                    l: 180,
                    r: 20,
                    b: 60,
                    t: 40,
                    pad: 0
                },

                dragmode: false,
                sliders: [{
                    name: 'Year',
                    x: -0.08585,
                    y: 0.06,
                    pad: {t: 0, l: 0, r: 0, b: 0},
                    len: 1,
                    currentvalue: {
                        offset: 14,
                        xanchor: 'center',
                        prefix: '<b style="color: #888; font-size: 16 !important">Year </b> ',
                        font: {
                            color: 'hsl(225, 5%, 95%)',
                            size: 18
                        },
                    },
                    steps: sliderSteps,

                    font: {
                        size: 11
                    },
                    activebgcolor: '#fffff',
                    bordercolor: 'hsl(225, 5%, 50%)',
                    bgcolor: 'hsl(225, 10%, 23%)',
                    ticklen: 2,
                    tickwidth: 0
                }],
                // Cut buttons
                /*
                updatemenus: [{
                    type: 'buttons',
                    showactive: false,
                    x: -0.19,
                    y: -0.035,
                    xanchor: 'left',
                    yanchor: 'top',
                    direction: 'left',
                    pad: {t: 20, r: 40},

                    bordercolor: 'hsl(225, 5%, 30%)',
                    bgcolor: 'hsla(225, 5%, 17%,0)',
                    font: {
                        family: 'Figtree, sans-serif',
                        size: 14.4
                    },
        
                    buttons: [{
                        label: '▶ Play',
                        method: 'animate',
                        args: [null, {
                            mode: 'immediate',
                            frame: {duration: 300},
                            transition: {duration: 500, redraw: false},
                            fromcurrent: true,
                        }]
                    },
                    {
                        label: '◼ Pause',
                        method: 'animate',
                        args: [[null], {
                            mode: 'immediate',
                            frame: {duration: 0},
                            transition: {duration: 0, redraw: false}
                        }]
                    }],
                }],
                */

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
                    size: 12.5,
                  },
                paper_bgcolor: 'hsl(225, 5%, 15%)',
                plot_bgcolor: 'hsl(225, 5%, 15%)',
            };
            
            const chartConfig = {
                displayModeBar: false
            }

            // BUILD!
            Plotly.newPlot('chart2', chartData, chartLayout, chartConfig).then(function() {
                Plotly.addFrames('chart2', chartFrames);
            });
        });
    });    
});