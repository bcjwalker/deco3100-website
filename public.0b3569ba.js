(function () {

var $parcel$bundleURL;
function $parcel$resolve(url) {
  url = parcelRequire.i?.[url] || url;
  if (!$parcel$bundleURL) {
    try {
      throw new Error();
    } catch (err) {
      var matches = ('' + err.stack).match(
        /(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g,
      );
      if (matches) {
        $parcel$bundleURL = matches[0];
      } else {
        return $parcel$distDir + url;
      }
    }
  }
  return new URL($parcel$distDir + url, $parcel$bundleURL).toString();
}

function $parcel$extendImportMap(map) {
  Object.assign(parcelRequire.i ??= {}, map);
}

      var $parcel$global =
        typeof globalThis !== 'undefined'
          ? globalThis
          : typeof self !== 'undefined'
          ? self
          : typeof window !== 'undefined'
          ? window
          : typeof global !== 'undefined'
          ? global
          : {};
  var $parcel$distDir = "./";

var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequiref168"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequiref168"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("2jYOK", function(module, exports) {
module.exports = $parcel$resolve("l2U3o");

});

var $3dfe5aa5089ce5a0$exports = {};
$parcel$extendImportMap({
    "l2U3o": "data5.fdb63d39.csv"
});

/*
#########################################################################
## CHART 5                                                             ##
## Line chart showing biodiversity losses for global warming scenarios ##
#########################################################################
*/ ///////////////
// VARIABLES //
///////////////
// Generate a css rgb string w/ random color from 0-180
const $8ece0b67d0851a0c$var$randRGB = ()=>`rgb(
    (${Math.floor(Math.random() * 180)},
    ${Math.floor(Math.random() * 180)},
    ${Math.floor(Math.random() * 180)})`;

/////////////////
// START CHART //
/////////////////
// Initialise dataset CSV(s), and build chart(s)
Plotly.d3.csv((parcelRequire("2jYOK")), (rawData)=>{
    // Unpack outputs a row from a given dataset and key term
    const unpack = (data, key)=>data.map((row)=>row[key]);
    // Climate scenarios/diversity loss line graph
    // Init setting vars
    const year = unpack(rawData, 'year');
    // Lines
    const scen45 = unpack(rawData, 'scenario45');
    const scen6 = unpack(rawData, 'scenario6');
    const scen85 = unpack(rawData, 'scenario85');
    // Traces
    var trace1 = {
        x: year,
        y: scen45,
        name: "4.5\xb0",
        type: 'scatter',
        marker: {
            color: 'hsl(45, 30%, 40%)'
        },
        line: {
            width: 3
        },
        hovertemplate: '<b style="font-size: 17px; font-weight: 600 !important">%{y}</b>'
    };
    var trace2 = {
        x: year,
        y: scen6,
        name: "6\xb0",
        type: 'scatter',
        marker: {
            color: 'hsl(15, 40%, 45%)'
        },
        line: {
            width: 3
        },
        hovertemplate: '<b style="font-size: 17px; font-weight: 600 !important">%{y}</b>'
    };
    var trace3 = {
        x: year,
        y: scen85,
        name: "8.5\xb0",
        type: 'scatter',
        marker: {
            color: 'hsl(350, 50%, 50%)'
        },
        line: {
            width: 3
        },
        hovertemplate: '<b style="font-size: 17px; font-weight: 600 !important">%{y}</b>'
    };
    var chartData = [
        trace1,
        trace2,
        trace3
    ];
    const chartLayout = {
        // 3 annotations pointing out x value for each line
        annotations: [
            {
                x: 2099,
                y: -0.1375,
                text: '<b style="font-size: 20px; font-weight: 600 !important">14%</b><br><b style="color: hsl(45, 35%, 65%)">Biodiversity loss</b><br>',
                //'<b style="font-size: 16px; font-weight: 600 !important">14%</b>',
                font: {
                    family: 'Figtree, sans-serif',
                    size: 11,
                    color: 'hsl(45, 40%, 85%)'
                },
                showarrow: true,
                arrowhead: 6,
                ax: 66,
                ay: -1,
                align: 'left',
                borderpad: 10,
                arrowwidth: 2,
                arrowcolor: 'hsl(45, 20%, 30%)',
                bordercolor: 'hsl(45, 20%, 30%)',
                borderwidth: 0,
                borderpad: 6,
                bgcolor: 'hsla(45, 15%, 25%, 0.45)',
                opacity: 0.8
            },
            {
                x: 2099,
                y: -0.1875,
                text: '<b style="font-size: 20px; font-weight: 600 !important">19%</b><br><b style="color: hsl(15, 35%, 65%)">Biodiversity loss</b><br>',
                //'<b style="font-size: 16px; font-weight: 600 !important">14%</b>',
                font: {
                    family: 'Figtree, sans-serif',
                    size: 11,
                    color: 'hsl(15, 40%, 85%)'
                },
                showarrow: true,
                arrowhead: 6,
                ax: 66,
                ay: 14,
                align: 'left',
                borderpad: 10,
                arrowwidth: 2,
                arrowcolor: 'hsl(15, 20%, 30%)',
                bordercolor: 'hsl(15, 20%, 30%)',
                borderwidth: 0,
                borderpad: 6,
                bgcolor: 'hsla(15, 15%, 25%, 0.45)',
                opacity: 0.8
            },
            {
                x: 2099,
                y: -0.2915,
                text: '<b style="font-size: 20px; font-weight: 600 !important">29%</b><br><b style="color: hsl(350, 35%, 65%)">Biodiversity loss</b><br>',
                //'<b style="font-size: 16px; font-weight: 600 !important">14%</b>',
                font: {
                    family: 'Figtree, sans-serif',
                    size: 11,
                    color: 'hsl(350, 40%, 85%)'
                },
                showarrow: true,
                arrowhead: 6,
                ax: 66,
                ay: -16,
                align: 'left',
                borderpad: 10,
                arrowwidth: 2,
                arrowcolor: 'hsl(350, 20%, 30%)',
                bordercolor: 'hsl(350, 20%, 30%)',
                borderwidth: 0,
                borderpad: 6,
                bgcolor: 'hsla(350, 15%, 25%, 0.45)',
                opacity: 0.8
            }
        ],
        margin: {
            l: 80,
            r: 140,
            b: 80,
            t: 110,
            pad: 0
        },
        legend: {
            itemclick: false,
            itemdoubleclick: false,
            title: {
                text: '<b style="color: hsl(225, 5%, 70%); font-weight: 500 !important">Scenarios</b>',
                font: {
                    size: 12
                }
            },
            font: {
                size: 11
            },
            x: 1.065
        },
        title: {
            text: '<b>Losses from global warming by 2100</b>',
            font: {
                size: 18,
                color: 'hsl(225, 5%, 82%)'
            },
            xref: 'plot',
            x: 0.0695,
            y: 0.9
        },
        xaxis: {
            fixedrange: true,
            autorange: false,
            range: [
                2020,
                2100
            ],
            autotick: true,
            ticks: 'outside',
            //tickangle: 75,
            nticks: 5,
            tickcolor: 'hsl(50, 0%, 45%)',
            showgrid: false,
            showline: true,
            linewidth: 1,
            linecolor: 'hsl(50, 0%, 45%)'
        },
        yaxis: {
            fixedrange: true,
            title: {
                text: '<b style="color: hsl(225, 5%, 60%) !important; font-weight: 400 !important">Total biodiversity loss</b>',
                //standoff: 20,
                textangle: 0
            },
            autotick: false,
            ticks: 'outside',
            ticklen: 12,
            tickwidth: 1,
            dtick: 0.1,
            tickcolor: 'hsl(225, 5%, 23%)',
            tickformat: ',.0%',
            showgrid: true,
            gridcolor: 'hsl(225, 5%, 23%)',
            showline: false,
            linewidth: 2,
            linecolor: 'hsl(225, 5%, 23%)'
        },
        dragmode: false,
        hoverlabel: {
            bgcolor: "hsl(225, 5%, 20%)",
            bordercolor: "hsla(225, 5%, 30%, 0)",
            font: {
                family: 'Figtree, sans-serif',
                size: 14,
                color: 'hsl(225, 5%, 90%)'
            }
        },
        font: {
            family: 'Readex Pro, sans-serif',
            color: 'hsl(225, 5%, 55%)',
            weight: 500,
            size: 11
        },
        paper_bgcolor: 'hsl(225, 5%, 17%)',
        plot_bgcolor: 'hsl(225, 5%, 17%)'
    };
    // BUILD!
    Plotly.newPlot('chart5', chartData, chartLayout, {
        displayModeBar: false,
        responsive: true
    });
});

})();
//# sourceMappingURL=public.0b3569ba.js.map
