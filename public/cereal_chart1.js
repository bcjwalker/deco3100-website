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
Plotly.d3.csv("assets/fizzydrinkflavours.csv", rawdataFizz => {    
    console.log(rawdataFizz);
    const unpack = (data, key) => data.map(row => row[key]);    

    // Fizzy drinkz
    dataFizz = rawdataFizz.filter(entry =>
        !Object.values(entry).some(value => value == -1))
    // Init setting vars
    const fizzLabels = unpack(rawdataFizz, 'label')
    const fizzParents = ["", "fizzy", "cocacola", "fizzy", "pepsi", "pepsi", "pepsi", "diet coke",
"cocacola"]
    const fizzValues = [93, 68, 25, 25, 5, 15, 5, 20, 23];

    
    const fizzChartData = [
        {
        type: 'treemap',
        cornerradius: 20,
        //values: kelloggsBrandsSugars,
        labels:  fizzLabels,
        parents: fizzParents,
        texttemplate: '%{label} <br> %{value}mg',
        
        //text: kelloggsBrandsText,
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
    const fizzChartLayout = {
        font: {
            family: 'Readex Pro, sans-serif',
            size: 16,
        },
        paper_bgcolor: 'rgb(245, 245, 230)',
        pot_bgcolor: 'rgb(245, 245, 230)',

        title: '<b>Kelloggs brands arranged by sugar content</b>',
        hovermode: 'closest',
        };
    // BUILD!
    Plotly.newPlot('plotKelloggsBrands', fizzChartData, fizzChartLayout);
});