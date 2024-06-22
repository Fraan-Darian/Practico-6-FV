var size = 0;
var placement = 'point';

var style_reasubcuencas_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Area");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.000612 && value <= 5.587150) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(95,95,95,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(254,240,217,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 5.587150 && value <= 11.173688) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(95,95,95,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(254,224,182,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 11.173688 && value <= 16.760226) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(95,95,95,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(253,208,147,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 16.760226 && value <= 22.346764) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(95,95,95,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(253,183,122,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 22.346764 && value <= 27.933302) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(95,95,95,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(252,155,100,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 27.933302 && value <= 33.519840) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(95,95,95,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(246,126,81,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 33.519840 && value <= 39.106378) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(95,95,95,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(235,96,64,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 39.106378 && value <= 44.692916) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(95,95,95,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(222,66,45,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 44.692916 && value <= 50.279454) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(95,95,95,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(200,33,23,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 50.279454 && value <= 55.865992) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(95,95,95,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(179,0,0,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
