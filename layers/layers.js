var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_lab1_1 = new ol.format.GeoJSON();
var features_lab1_1 = format_lab1_1.readFeatures(json_lab1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_1.addFeatures(features_lab1_1);
var lyr_lab1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lab1_1, 
                style: style_lab1_1,
                interactive: false,
                title: '<img src="styles/legend/lab1_1.png" /> lab 1'
            });
var format_plfybz2building_2 = new ol.format.GeoJSON();
var features_plfybz2building_2 = format_plfybz2building_2.readFeatures(json_plfybz2building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_plfybz2building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_plfybz2building_2.addFeatures(features_plfybz2building_2);
var lyr_plfybz2building_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_plfybz2building_2, 
                style: style_plfybz2building_2,
                interactive: false,
                title: '<img src="styles/legend/plfybz2building_2.png" /> plfybz2 — building'
            });
var format_plfybz3building_3 = new ol.format.GeoJSON();
var features_plfybz3building_3 = format_plfybz3building_3.readFeatures(json_plfybz3building_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_plfybz3building_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_plfybz3building_3.addFeatures(features_plfybz3building_3);
var lyr_plfybz3building_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_plfybz3building_3, 
                style: style_plfybz3building_3,
                interactive: false,
                title: '<img src="styles/legend/plfybz3building_3.png" /> plfybz3 — building'
            });
var format_highway1highway_4 = new ol.format.GeoJSON();
var features_highway1highway_4 = format_highway1highway_4.readFeatures(json_highway1highway_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway1highway_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway1highway_4.addFeatures(features_highway1highway_4);
var lyr_highway1highway_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway1highway_4, 
                style: style_highway1highway_4,
                interactive: false,
                title: '<img src="styles/legend/highway1highway_4.png" /> highway1 — highway'
            });
var format_high2highway_5 = new ol.format.GeoJSON();
var features_high2highway_5 = format_high2highway_5.readFeatures(json_high2highway_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_high2highway_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_high2highway_5.addFeatures(features_high2highway_5);
var lyr_high2highway_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_high2highway_5, 
                style: style_high2highway_5,
                interactive: false,
                title: '<img src="styles/legend/high2highway_5.png" /> high2 — highway'
            });
var format_high3railway_6 = new ol.format.GeoJSON();
var features_high3railway_6 = format_high3railway_6.readFeatures(json_high3railway_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_high3railway_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_high3railway_6.addFeatures(features_high3railway_6);
var lyr_high3railway_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_high3railway_6, 
                style: style_high3railway_6,
                interactive: false,
                title: '<img src="styles/legend/high3railway_6.png" /> high3 — railway'
            });
var format_railway1railway_7 = new ol.format.GeoJSON();
var features_railway1railway_7 = format_railway1railway_7.readFeatures(json_railway1railway_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railway1railway_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railway1railway_7.addFeatures(features_railway1railway_7);
var lyr_railway1railway_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_railway1railway_7, 
                style: style_railway1railway_7,
                interactive: false,
                title: '<img src="styles/legend/railway1railway_7.png" /> railway1 — railway'
            });

lyr_OSMStandard_0.setVisible(true);lyr_lab1_1.setVisible(true);lyr_plfybz2building_2.setVisible(true);lyr_plfybz3building_3.setVisible(true);lyr_highway1highway_4.setVisible(true);lyr_high2highway_5.setVisible(true);lyr_high3railway_6.setVisible(true);lyr_railway1railway_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_lab1_1,lyr_plfybz2building_2,lyr_plfybz3building_3,lyr_highway1highway_4,lyr_high2highway_5,lyr_high3railway_6,lyr_railway1railway_7];
lyr_lab1_1.set('fieldAliases', {'name': 'name', });
lyr_plfybz2building_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'entrance': 'entrance', });
lyr_plfybz3building_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'shop': 'shop', 'operator': 'operator', 'opening_hours': 'opening_hours', 'name': 'name', 'fuel:octane_95': 'fuel:octane_95', 'fuel:octane_92': 'fuel:octane_92', 'fuel:diesel': 'fuel:diesel', 'amenity': 'amenity', 'description': 'description', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'addr:city': 'addr:city', 'addr:place': 'addr:place', 'addr:housenumber': 'addr:housenumber', 'address': 'address', });
lyr_highway1highway_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'foot': 'foot', 'bicycle': 'bicycle', 'barrier': 'barrier', 'tactile_paving': 'tactile_paving', 'shelter': 'shelter', 'name': 'name', 'bench': 'bench', 'railway': 'railway', });
lyr_high2highway_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'description': 'description', 'ref': 'ref', 'tracktype': 'tracktype', 'name': 'name', 'maxspeed': 'maxspeed', 'surface': 'surface', });
lyr_high3railway_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'railway': 'railway', 'supervised': 'supervised', 'crossing:barrier': 'crossing:barrier', 'name': 'name', });
lyr_railway1railway_7.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'railway': 'railway', 'service': 'service', 'usage': 'usage', 'gauge': 'gauge', 'electrified': 'electrified', });
lyr_lab1_1.set('fieldImages', {'name': 'TextEdit', });
lyr_plfybz2building_2.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'entrance': '', });
lyr_plfybz3building_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'shop': '', 'operator': '', 'opening_hours': '', 'name': '', 'fuel:octane_95': '', 'fuel:octane_92': '', 'fuel:diesel': '', 'amenity': '', 'description': '', 'building:levels': '', 'addr:street': '', 'addr:city': '', 'addr:place': '', 'addr:housenumber': '', 'address': '', });
lyr_highway1highway_4.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'foot': '', 'bicycle': '', 'barrier': '', 'tactile_paving': '', 'shelter': '', 'name': '', 'bench': '', 'railway': '', });
lyr_high2highway_5.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'description': '', 'ref': '', 'tracktype': '', 'name': '', 'maxspeed': '', 'surface': '', });
lyr_high3railway_6.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'railway': '', 'supervised': '', 'crossing:barrier': '', 'name': '', });
lyr_railway1railway_7.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'railway': '', 'service': '', 'usage': '', 'gauge': '', 'electrified': '', });
lyr_lab1_1.set('fieldLabels', {'name': 'no label', });
lyr_plfybz2building_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'entrance': 'no label', });
lyr_plfybz3building_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'shop': 'no label', 'operator': 'no label', 'opening_hours': 'no label', 'name': 'no label', 'fuel:octane_95': 'no label', 'fuel:octane_92': 'no label', 'fuel:diesel': 'no label', 'amenity': 'no label', 'description': 'no label', 'building:levels': 'no label', 'addr:street': 'no label', 'addr:city': 'no label', 'addr:place': 'no label', 'addr:housenumber': 'no label', 'address': 'no label', });
lyr_highway1highway_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'barrier': 'no label', 'tactile_paving': 'no label', 'shelter': 'no label', 'name': 'no label', 'bench': 'no label', 'railway': 'no label', });
lyr_high2highway_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'description': 'no label', 'ref': 'no label', 'tracktype': 'no label', 'name': 'no label', 'maxspeed': 'no label', 'surface': 'no label', });
lyr_high3railway_6.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'railway': 'no label', 'supervised': 'no label', 'crossing:barrier': 'no label', 'name': 'no label', });
lyr_railway1railway_7.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'railway': 'no label', 'service': 'no label', 'usage': 'no label', 'gauge': 'no label', 'electrified': 'no label', });
lyr_railway1railway_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});