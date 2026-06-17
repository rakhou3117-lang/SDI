var wms_layers = [];


        var lyr_EsriSatellite_0 = new ol.layer.Tile({
            'title': 'Esri Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Pedologiesenegal_1 = new ol.format.GeoJSON();
var features_Pedologiesenegal_1 = format_Pedologiesenegal_1.readFeatures(json_Pedologiesenegal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pedologiesenegal_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pedologiesenegal_1.addFeatures(features_Pedologiesenegal_1);
var lyr_Pedologiesenegal_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pedologiesenegal_1, 
                style: style_Pedologiesenegal_1,
                popuplayertitle: 'Pedologie senegal',
                interactive: true,
    title: 'Pedologie senegal<br />\
    <img src="styles/legend/Pedologiesenegal_1_0.png" /> Brun Subarides<br />\
    <img src="styles/legend/Pedologiesenegal_1_1.png" /> Dunes Littorales<br />\
    <img src="styles/legend/Pedologiesenegal_1_2.png" /> Eau<br />\
    <img src="styles/legend/Pedologiesenegal_1_3.png" /> Ferralitiques<br />\
    <img src="styles/legend/Pedologiesenegal_1_4.png" /> Ferrugineux Tropicaux<br />\
    <img src="styles/legend/Pedologiesenegal_1_5.png" /> Halomorphes<br />\
    <img src="styles/legend/Pedologiesenegal_1_6.png" /> Hydromorphes<br />\
    <img src="styles/legend/Pedologiesenegal_1_7.png" /> Lithosols<br />\
    <img src="styles/legend/Pedologiesenegal_1_8.png" /> Peu Evolués<br />\
    <img src="styles/legend/Pedologiesenegal_1_9.png" /> Régosols<br />\
    <img src="styles/legend/Pedologiesenegal_1_10.png" /> Rouge Brun<br />\
    <img src="styles/legend/Pedologiesenegal_1_11.png" /> Vasières<br />\
    <img src="styles/legend/Pedologiesenegal_1_12.png" /> Vertiques<br />' });
var format_Limiteregion_2 = new ol.format.GeoJSON();
var features_Limiteregion_2 = format_Limiteregion_2.readFeatures(json_Limiteregion_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limiteregion_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limiteregion_2.addFeatures(features_Limiteregion_2);
var lyr_Limiteregion_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limiteregion_2, 
                style: style_Limiteregion_2,
                popuplayertitle: 'Limite region',
                interactive: true,
                title: '<img src="styles/legend/Limiteregion_2.png" /> Limite region'
            });

lyr_EsriSatellite_0.setVisible(true);lyr_Pedologiesenegal_1.setVisible(true);lyr_Limiteregion_2.setVisible(true);
var layersList = [lyr_EsriSatellite_0,lyr_Pedologiesenegal_1,lyr_Limiteregion_2];
lyr_Pedologiesenegal_1.set('fieldAliases', {'MSDNOM': 'MSDNOM', 'NOM': 'NOM', 'CODE': 'CODE', 'THEME': 'THEME', 'PAYS': 'PAYS', 'TYPESOL': 'TYPESOL', 'IDUU': 'IDUU', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Limiteregion_2.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_Pedologiesenegal_1.set('fieldImages', {'MSDNOM': '', 'NOM': '', 'CODE': '', 'THEME': '', 'PAYS': '', 'TYPESOL': '', 'IDUU': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Limiteregion_2.set('fieldImages', {'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_Pedologiesenegal_1.set('fieldLabels', {'MSDNOM': 'inline label - always visible', 'NOM': 'no label', 'CODE': 'no label', 'THEME': 'no label', 'PAYS': 'no label', 'TYPESOL': 'no label', 'IDUU': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Limiteregion_2.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'inline label - always visible', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_Limiteregion_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});