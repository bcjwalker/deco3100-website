///////////////
// VARIABLES //
///////////////

// Generate a css rgb string w/ random color from 0-255
const randRGB = () => `rgb(
    (${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)})`;
;

// Lookup IDs, give full name and random colour
let mfrLookupTable = {
    "A": { fullName: "American Home Food Products", color: randRGB()},
    "G": { fullName: "General Mills", color: randRGB()},
    "K": { fullName: "Kelloggs", color: randRGB()},
    "N": { fullName: "Nabisco", color: randRGB()},
    "P": { fullName: "Post", color: randRGB()},
    "Q": { fullName: "Quaker Oats", color: randRGB()},
    "R": { fullName: "Ralston Purina", color: randRGB()}
    }

////////////////////////
// PAGE FUNCTIONALITY //
////////////////////////

// Initialise both dataset CSVs
Plotly.d3.csv("assets/cereal.csv", rawdataCereal => {
    Plotly.d3.csv("assets/kelloggs.csv", rawdataKelloggs => {
        
        const unpack = (data, key) => data.map(row => row[key]);
        
        // Cereal
        // Filter -1 cells out, spit out clean data
        dataCereal = rawdataCereal.filter(entry =>
            !Object.values(entry).some(value => value == -1))
        // Init setting vars
        const cerealX = unpack(dataCereal, 'sugars')
        const cerealY = unpack(dataCereal, 'rating')
        const cerealNames = unpack(dataCereal, 'name')
        const cerealMfr = unpack(dataCereal, 'mfr')
        const cerealMfrFullNames = cerealMfr.map(mfr =>
            mfrLookupTable[mfr].fullName)
        const cerealColour = cerealMfr.map(mfr =>
            mfrLookupTable[mfr].color)
        const cerealText = cerealMfrFullNames.map((fullName, index) =>
        `${fullName}: ${cerealNames[index]}`)
        
        const cerealChartData = [
            {
            x: cerealX,
            y: cerealY,
            mode: 'markers',
            type: 'scatter',
            marker: {
                color: cerealColour
            },
            text: cerealText,
            hovertemplate: '%{text}<extra></extra>',
            transforms: [{ type: "groupby",
                groups: cerealMfrFullNames }],
            }
        ];
        const cerealChartLayout = {
            title: 'How more sugar leads to lower health ratings in cereals',
            xaxis: {
                title: 'Grams of sugar per serving'
                },
            yaxis: {
                title: 'Health rating',
                range: [0, 100],
                },
            showlegend: true,
            hovermode: 'closest',
            };
        // BUILD!
        Plotly.newPlot('plotCereal', cerealChartData, cerealChartLayout);

        // Kelloggs brands
        // Filter to only spit out Kelloggs cells 
        dataKelloggsBrands = dataCereal.filter(entry =>
            Object.values(entry).some(value => value == 'K'))
        // Init setting vars
        const kelloggsBrandsSugars = unpack(dataKelloggsBrands, 'sugars')
        const kelloggsBrandsNames = unpack(dataKelloggsBrands, 'name')
        const kelloggsBrandsMfr = unpack(dataKelloggsBrands, 'mfr')
        const kelloggsBrandsMfrFullNames = kelloggsBrandsMfr.map(mfr =>
            mfrLookupTable[mfr].fullName)
        const kelloggsBrandsText = kelloggsBrandsMfrFullNames.map((fullName, index) =>
        `${fullName}: ${kelloggsBrandsNames[index]}`)
        
        const kelloggsBrandsChartData = [
            {
            type: 'treemap',
            cornerradius: 20,
            values: kelloggsBrandsSugars,
            parents: kelloggsBrandsMfrFullNames,
            labels:  kelloggsBrandsNames,
            texttemplate: '%{label} <br> %{value}mg',
            
            text: kelloggsBrandsText,
            root: {
                color: "rgb(255, 255, 255)",
            },
            marker: {
                colorscale: 'Electric',
                reversescale: true,
                line: {
                    width: 0,
                },
                pad: {
                    b: 20,
                    l: 20,
                    r: 20,
                    t: 40
                },
            },
            tiling: {
                squarifyratio: 1.618034,
                pad: 6,
            },
            hovertemplate: '%{text}<extra></extra>',
            }
        ];
        const kelloggsBrandsChartLayout = {
            font: {
                family: 'DM Sans, sans-serif',
                size: 16,
            },
            paper_bgcolor: 'rgb(245, 245, 230)',
            pot_bgcolor: 'rgb(245, 245, 230)',

            title: '<b>Kelloggs brands arranged by sugar content</b>',
            hovermode: 'closest',
            };
        // BUILD!
        Plotly.newPlot('plotKelloggsBrands', kelloggsBrandsChartData, kelloggsBrandsChartLayout);

        // Kelloggs
        // Filter -1 cells out, spit out clean data
        dataKelloggs = rawdataKelloggs.filter(entry =>
            !Object.values(entry).some(value => value == -1))
        // Init settings vars
        const kelloggsX = unpack(dataKelloggs, 'Date')
        const kelloggsY = unpack(dataKelloggs, 'Close')
        
        const kelloggsChartData = [
            {
            x: kelloggsX,
            y: kelloggsY,
            mode: 'lines',
            type: 'scatter',
            line: {color: 'rgb(241, 90, 34)'}
            }
        ];
        const kelloggsChartLayout = {
            title: 'Kelloggs stock price',
            yaxis: {
                title: 'Stock closing price (USD)'
                }
            };
        // BUILD!
        Plotly.newPlot('plotKelloggs', kelloggsChartData, kelloggsChartLayout);
    });
});