ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32719").setExtent([112353.838479, 5623288.790808, 247588.777819, 5691014.970236]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_ComunadeGorbea_1 = new ol.format.GeoJSON();
var features_ComunadeGorbea_1 = format_ComunadeGorbea_1.readFeatures(json_ComunadeGorbea_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_ComunadeGorbea_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComunadeGorbea_1.addFeatures(features_ComunadeGorbea_1);
var lyr_ComunadeGorbea_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComunadeGorbea_1, 
                style: style_ComunadeGorbea_1,
                popuplayertitle: "Comuna de Gorbea",
                interactive: false,
                    title: '<img src="styles/legend/ComunadeGorbea_1.png" /> Comuna de Gorbea'
                });
var format_reasubcuencas_2 = new ol.format.GeoJSON();
var features_reasubcuencas_2 = format_reasubcuencas_2.readFeatures(json_reasubcuencas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_reasubcuencas_2 = new ol.source.Vector({
    attributions: ' &middot; <a href="">Subcuencas Comuna de Gorbea</a>',
});
jsonSource_reasubcuencas_2.addFeatures(features_reasubcuencas_2);
var lyr_reasubcuencas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasubcuencas_2, 
                style: style_reasubcuencas_2,
                popuplayertitle: "Área subcuencas",
                interactive: true,
    title: 'Área subcuencas<br />\
    <img src="styles/legend/reasubcuencas_2_0.png" /> 0 - 5,6<br />\
    <img src="styles/legend/reasubcuencas_2_1.png" /> 5,6 - 11,2<br />\
    <img src="styles/legend/reasubcuencas_2_2.png" /> 11,2 - 16,8<br />\
    <img src="styles/legend/reasubcuencas_2_3.png" /> 16,8 - 22,3<br />\
    <img src="styles/legend/reasubcuencas_2_4.png" /> 22,3 - 27,9<br />\
    <img src="styles/legend/reasubcuencas_2_5.png" /> 27,9 - 33,5<br />\
    <img src="styles/legend/reasubcuencas_2_6.png" /> 33,5 - 39,1<br />\
    <img src="styles/legend/reasubcuencas_2_7.png" /> 39,1 - 44,7<br />\
    <img src="styles/legend/reasubcuencas_2_8.png" /> 44,7 - 50,3<br />\
    <img src="styles/legend/reasubcuencas_2_9.png" /> 50,3 - 55,9<br />'
        });
var format_ReddeDrenaje_3 = new ol.format.GeoJSON();
var features_ReddeDrenaje_3 = format_ReddeDrenaje_3.readFeatures(json_ReddeDrenaje_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_ReddeDrenaje_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReddeDrenaje_3.addFeatures(features_ReddeDrenaje_3);
var lyr_ReddeDrenaje_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReddeDrenaje_3, 
                style: style_ReddeDrenaje_3,
                popuplayertitle: "Red de Drenaje",
                interactive: false,
                    title: '<img src="styles/legend/ReddeDrenaje_3.png" /> Red de Drenaje'
                });

lyr_GoogleSatellite_0.setVisible(true);lyr_ComunadeGorbea_1.setVisible(true);lyr_reasubcuencas_2.setVisible(true);lyr_ReddeDrenaje_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ComunadeGorbea_1,lyr_reasubcuencas_2,lyr_ReddeDrenaje_3];
lyr_ComunadeGorbea_1.set('fieldAliases', {'objectid': 'objectid', 'shape_leng': 'shape_leng', 'dis_elec': 'dis_elec', 'cir_sena': 'cir_sena', 'cod_comuna': 'cod_comuna', 'codregion': 'codregion', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'Region': 'Region', 'Comuna': 'Comuna', 'Provincia': 'Provincia', });
lyr_reasubcuencas_2.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Altura_mea': 'Altura promedio (m)', 'Altura_min': 'Altura mínima', 'Altura_max': 'Altura máxima', 'Pendiente_': 'Pendiente promedio', 'Perimetro': 'Perímetro (km)', 'Area': 'Área (km2)', 'Compactnes': 'Factor de compactación', 'Relief': 'Relieve (m)', 'Circularit': 'Circularidad', 'Meltons_ru': 'n° de Melton\'s', });
lyr_ReddeDrenaje_3.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_ComunadeGorbea_1.set('fieldImages', {'objectid': 'TextEdit', 'shape_leng': 'TextEdit', 'dis_elec': 'Range', 'cir_sena': 'Range', 'cod_comuna': 'Range', 'codregion': 'Range', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', 'Region': 'TextEdit', 'Comuna': 'TextEdit', 'Provincia': 'TextEdit', });
lyr_reasubcuencas_2.set('fieldImages', {'fid': 'Hidden', 'DN': 'Hidden', 'Altura_mea': 'TextEdit', 'Altura_min': 'TextEdit', 'Altura_max': 'TextEdit', 'Pendiente_': 'TextEdit', 'Perimetro': 'TextEdit', 'Area': 'TextEdit', 'Compactnes': 'TextEdit', 'Relief': 'TextEdit', 'Circularit': 'TextEdit', 'Meltons_ru': 'TextEdit', });
lyr_ReddeDrenaje_3.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', });
lyr_ComunadeGorbea_1.set('fieldLabels', {'objectid': 'no label', 'shape_leng': 'no label', 'dis_elec': 'no label', 'cir_sena': 'no label', 'cod_comuna': 'no label', 'codregion': 'no label', 'st_area_sh': 'no label', 'st_length_': 'no label', 'Region': 'no label', 'Comuna': 'no label', 'Provincia': 'no label', });
lyr_reasubcuencas_2.set('fieldLabels', {'Altura_mea': 'header label - always visible', 'Altura_min': 'header label - always visible', 'Altura_max': 'header label - always visible', 'Pendiente_': 'header label - always visible', 'Perimetro': 'header label - always visible', 'Area': 'header label - always visible', 'Compactnes': 'header label - always visible', 'Relief': 'header label - always visible', 'Circularit': 'header label - always visible', 'Meltons_ru': 'header label - always visible', });
lyr_ReddeDrenaje_3.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_ReddeDrenaje_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});