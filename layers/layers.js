ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:25833").setExtent([400810.190650, 5655244.222098, 400818.264469, 5655249.741605]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 0.487000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Hecke_1 = new ol.format.GeoJSON();
var features_Hecke_1 = format_Hecke_1.readFeatures(json_Hecke_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25833'});
var jsonSource_Hecke_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hecke_1.addFeatures(features_Hecke_1);
var lyr_Hecke_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hecke_1, 
                style: style_Hecke_1,
                popuplayertitle: "Hecke",
                interactive: true,
                title: '<img src="styles/legend/Hecke_1.png" /> Hecke'
            });
var format_Hhenpunkt_2 = new ol.format.GeoJSON();
var features_Hhenpunkt_2 = format_Hhenpunkt_2.readFeatures(json_Hhenpunkt_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25833'});
var jsonSource_Hhenpunkt_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hhenpunkt_2.addFeatures(features_Hhenpunkt_2);
var lyr_Hhenpunkt_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hhenpunkt_2, 
                style: style_Hhenpunkt_2,
                popuplayertitle: "Höhenpunkt",
                interactive: true,
                title: '<img src="styles/legend/Hhenpunkt_2.png" /> Höhenpunkt'
            });
var format_Kanaldeckel_3 = new ol.format.GeoJSON();
var features_Kanaldeckel_3 = format_Kanaldeckel_3.readFeatures(json_Kanaldeckel_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25833'});
var jsonSource_Kanaldeckel_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kanaldeckel_3.addFeatures(features_Kanaldeckel_3);
var lyr_Kanaldeckel_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kanaldeckel_3, 
                style: style_Kanaldeckel_3,
                popuplayertitle: "Kanaldeckel",
                interactive: true,
                title: '<img src="styles/legend/Kanaldeckel_3.png" /> Kanaldeckel'
            });
var format_KIVIDLine_4 = new ol.format.GeoJSON();
var features_KIVIDLine_4 = format_KIVIDLine_4.readFeatures(json_KIVIDLine_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25833'});
var jsonSource_KIVIDLine_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KIVIDLine_4.addFeatures(features_KIVIDLine_4);
var lyr_KIVIDLine_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KIVIDLine_4, 
                style: style_KIVIDLine_4,
                popuplayertitle: "KIVIDLine",
                interactive: true,
                title: '<img src="styles/legend/KIVIDLine_4.png" /> KIVIDLine'
            });
var format_Kleinpunkt_5 = new ol.format.GeoJSON();
var features_Kleinpunkt_5 = format_Kleinpunkt_5.readFeatures(json_Kleinpunkt_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25833'});
var jsonSource_Kleinpunkt_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kleinpunkt_5.addFeatures(features_Kleinpunkt_5);
var lyr_Kleinpunkt_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kleinpunkt_5, 
                style: style_Kleinpunkt_5,
                popuplayertitle: "Kleinpunkt",
                interactive: true,
                title: '<img src="styles/legend/Kleinpunkt_5.png" /> Kleinpunkt'
            });
var format_Laterne_6 = new ol.format.GeoJSON();
var features_Laterne_6 = format_Laterne_6.readFeatures(json_Laterne_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25833'});
var jsonSource_Laterne_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Laterne_6.addFeatures(features_Laterne_6);
var lyr_Laterne_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Laterne_6, 
                style: style_Laterne_6,
                popuplayertitle: "Laterne",
                interactive: true,
                title: '<img src="styles/legend/Laterne_6.png" /> Laterne'
            });
var format_Measurepoint_7 = new ol.format.GeoJSON();
var features_Measurepoint_7 = format_Measurepoint_7.readFeatures(json_Measurepoint_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25833'});
var jsonSource_Measurepoint_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Measurepoint_7.addFeatures(features_Measurepoint_7);
var lyr_Measurepoint_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Measurepoint_7, 
                style: style_Measurepoint_7,
                popuplayertitle: "Measurepoint",
                interactive: true,
                title: '<img src="styles/legend/Measurepoint_7.png" /> Measurepoint'
            });
var format_Punkt_8 = new ol.format.GeoJSON();
var features_Punkt_8 = format_Punkt_8.readFeatures(json_Punkt_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25833'});
var jsonSource_Punkt_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punkt_8.addFeatures(features_Punkt_8);
var lyr_Punkt_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Punkt_8, 
                style: style_Punkt_8,
                popuplayertitle: "Punkt",
                interactive: true,
                title: '<img src="styles/legend/Punkt_8.png" /> Punkt'
            });
var format_Station_9 = new ol.format.GeoJSON();
var features_Station_9 = format_Station_9.readFeatures(json_Station_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25833'});
var jsonSource_Station_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Station_9.addFeatures(features_Station_9);
var lyr_Station_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Station_9, 
                style: style_Station_9,
                popuplayertitle: "Station",
                interactive: true,
                title: '<img src="styles/legend/Station_9.png" /> Station'
            });
var format_Straenrand_10 = new ol.format.GeoJSON();
var features_Straenrand_10 = format_Straenrand_10.readFeatures(json_Straenrand_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25833'});
var jsonSource_Straenrand_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Straenrand_10.addFeatures(features_Straenrand_10);
var lyr_Straenrand_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Straenrand_10, 
                style: style_Straenrand_10,
                popuplayertitle: "Straßenrand",
                interactive: true,
                title: '<img src="styles/legend/Straenrand_10.png" /> Straßenrand'
            });
var format_Sttzmauer_11 = new ol.format.GeoJSON();
var features_Sttzmauer_11 = format_Sttzmauer_11.readFeatures(json_Sttzmauer_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25833'});
var jsonSource_Sttzmauer_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sttzmauer_11.addFeatures(features_Sttzmauer_11);
var lyr_Sttzmauer_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sttzmauer_11, 
                style: style_Sttzmauer_11,
                popuplayertitle: "Stützmauer",
                interactive: true,
                title: '<img src="styles/legend/Sttzmauer_11.png" /> Stützmauer'
            });
var format_TextDGIS_12 = new ol.format.GeoJSON();
var features_TextDGIS_12 = format_TextDGIS_12.readFeatures(json_TextDGIS_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25833'});
var jsonSource_TextDGIS_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TextDGIS_12.addFeatures(features_TextDGIS_12);
var lyr_TextDGIS_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TextDGIS_12, 
                style: style_TextDGIS_12,
                popuplayertitle: "Text DGIS",
                interactive: true,
                title: '<img src="styles/legend/TextDGIS_12.png" /> Text DGIS'
            });
var format_TopoSchieberGas_13 = new ol.format.GeoJSON();
var features_TopoSchieberGas_13 = format_TopoSchieberGas_13.readFeatures(json_TopoSchieberGas_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25833'});
var jsonSource_TopoSchieberGas_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TopoSchieberGas_13.addFeatures(features_TopoSchieberGas_13);
var lyr_TopoSchieberGas_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TopoSchieberGas_13, 
                style: style_TopoSchieberGas_13,
                popuplayertitle: "Topo Schieber Gas",
                interactive: true,
                title: '<img src="styles/legend/TopoSchieberGas_13.png" /> Topo Schieber Gas'
            });
var format_UST_14 = new ol.format.GeoJSON();
var features_UST_14 = format_UST_14.readFeatures(json_UST_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25833'});
var jsonSource_UST_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UST_14.addFeatures(features_UST_14);
var lyr_UST_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UST_14, 
                style: style_UST_14,
                popuplayertitle: "UST",
                interactive: true,
                title: '<img src="styles/legend/UST_14.png" /> UST'
            });
var format_Wegbegrenzung_15 = new ol.format.GeoJSON();
var features_Wegbegrenzung_15 = format_Wegbegrenzung_15.readFeatures(json_Wegbegrenzung_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25833'});
var jsonSource_Wegbegrenzung_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wegbegrenzung_15.addFeatures(features_Wegbegrenzung_15);
var lyr_Wegbegrenzung_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wegbegrenzung_15, 
                style: style_Wegbegrenzung_15,
                popuplayertitle: "Wegbegrenzung",
                interactive: true,
                title: '<img src="styles/legend/Wegbegrenzung_15.png" /> Wegbegrenzung'
            });
var format_Wirtschaftsgebudelinie_16 = new ol.format.GeoJSON();
var features_Wirtschaftsgebudelinie_16 = format_Wirtschaftsgebudelinie_16.readFeatures(json_Wirtschaftsgebudelinie_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25833'});
var jsonSource_Wirtschaftsgebudelinie_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wirtschaftsgebudelinie_16.addFeatures(features_Wirtschaftsgebudelinie_16);
var lyr_Wirtschaftsgebudelinie_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wirtschaftsgebudelinie_16, 
                style: style_Wirtschaftsgebudelinie_16,
                popuplayertitle: "Wirtschaftsgebäudelinie",
                interactive: true,
                title: '<img src="styles/legend/Wirtschaftsgebudelinie_16.png" /> Wirtschaftsgebäudelinie'
            });
var format_Wohngebudelinie_17 = new ol.format.GeoJSON();
var features_Wohngebudelinie_17 = format_Wohngebudelinie_17.readFeatures(json_Wohngebudelinie_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25833'});
var jsonSource_Wohngebudelinie_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wohngebudelinie_17.addFeatures(features_Wohngebudelinie_17);
var lyr_Wohngebudelinie_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wohngebudelinie_17, 
                style: style_Wohngebudelinie_17,
                popuplayertitle: "Wohngebäudelinie",
                interactive: true,
                title: '<img src="styles/legend/Wohngebudelinie_17.png" /> Wohngebäudelinie'
            });
var format_Zaun_18 = new ol.format.GeoJSON();
var features_Zaun_18 = format_Zaun_18.readFeatures(json_Zaun_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25833'});
var jsonSource_Zaun_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zaun_18.addFeatures(features_Zaun_18);
var lyr_Zaun_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zaun_18, 
                style: style_Zaun_18,
                popuplayertitle: "Zaun",
                interactive: true,
                title: '<img src="styles/legend/Zaun_18.png" /> Zaun'
            });
var format_Bschungsoberkante_19 = new ol.format.GeoJSON();
var features_Bschungsoberkante_19 = format_Bschungsoberkante_19.readFeatures(json_Bschungsoberkante_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25833'});
var jsonSource_Bschungsoberkante_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bschungsoberkante_19.addFeatures(features_Bschungsoberkante_19);
var lyr_Bschungsoberkante_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bschungsoberkante_19, 
                style: style_Bschungsoberkante_19,
                popuplayertitle: "Böschungsoberkante",
                interactive: true,
                title: '<img src="styles/legend/Bschungsoberkante_19.png" /> Böschungsoberkante'
            });
var format_Bschungsunterkante_20 = new ol.format.GeoJSON();
var features_Bschungsunterkante_20 = format_Bschungsunterkante_20.readFeatures(json_Bschungsunterkante_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25833'});
var jsonSource_Bschungsunterkante_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bschungsunterkante_20.addFeatures(features_Bschungsunterkante_20);
var lyr_Bschungsunterkante_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bschungsunterkante_20, 
                style: style_Bschungsunterkante_20,
                popuplayertitle: "Böschungsunterkante",
                interactive: true,
                title: '<img src="styles/legend/Bschungsunterkante_20.png" /> Böschungsunterkante'
            });
var format_Brcke_21 = new ol.format.GeoJSON();
var features_Brcke_21 = format_Brcke_21.readFeatures(json_Brcke_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25833'});
var jsonSource_Brcke_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brcke_21.addFeatures(features_Brcke_21);
var lyr_Brcke_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brcke_21, 
                style: style_Brcke_21,
                popuplayertitle: "Brücke",
                interactive: true,
                title: '<img src="styles/legend/Brcke_21.png" /> Brücke'
            });
var format_Dokument_22 = new ol.format.GeoJSON();
var features_Dokument_22 = format_Dokument_22.readFeatures(json_Dokument_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25833'});
var jsonSource_Dokument_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dokument_22.addFeatures(features_Dokument_22);
var lyr_Dokument_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dokument_22, 
                style: style_Dokument_22,
                popuplayertitle: "Dokument",
                interactive: true,
                title: '<img src="styles/legend/Dokument_22.png" /> Dokument'
            });
var format_DurchlassPunkt_23 = new ol.format.GeoJSON();
var features_DurchlassPunkt_23 = format_DurchlassPunkt_23.readFeatures(json_DurchlassPunkt_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25833'});
var jsonSource_DurchlassPunkt_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DurchlassPunkt_23.addFeatures(features_DurchlassPunkt_23);
var lyr_DurchlassPunkt_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DurchlassPunkt_23, 
                style: style_DurchlassPunkt_23,
                popuplayertitle: "Durchlass Punkt",
                interactive: true,
                title: '<img src="styles/legend/DurchlassPunkt_23.png" /> Durchlass Punkt'
            });
var format_Flchenumringallgemein_24 = new ol.format.GeoJSON();
var features_Flchenumringallgemein_24 = format_Flchenumringallgemein_24.readFeatures(json_Flchenumringallgemein_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25833'});
var jsonSource_Flchenumringallgemein_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Flchenumringallgemein_24.addFeatures(features_Flchenumringallgemein_24);
var lyr_Flchenumringallgemein_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Flchenumringallgemein_24, 
                style: style_Flchenumringallgemein_24,
                popuplayertitle: "Flächenumring allgemein",
                interactive: true,
                title: '<img src="styles/legend/Flchenumringallgemein_24.png" /> Flächenumring allgemein'
            });
var format_FMKabelschacht_25 = new ol.format.GeoJSON();
var features_FMKabelschacht_25 = format_FMKabelschacht_25.readFeatures(json_FMKabelschacht_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25833'});
var jsonSource_FMKabelschacht_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FMKabelschacht_25.addFeatures(features_FMKabelschacht_25);
var lyr_FMKabelschacht_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FMKabelschacht_25, 
                style: style_FMKabelschacht_25,
                popuplayertitle: "FM Kabelschacht",
                interactive: true,
                title: '<img src="styles/legend/FMKabelschacht_25.png" /> FM Kabelschacht'
            });
var format_FMRohrstrecke_26 = new ol.format.GeoJSON();
var features_FMRohrstrecke_26 = format_FMRohrstrecke_26.readFeatures(json_FMRohrstrecke_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25833'});
var jsonSource_FMRohrstrecke_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FMRohrstrecke_26.addFeatures(features_FMRohrstrecke_26);
var lyr_FMRohrstrecke_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FMRohrstrecke_26, 
                style: style_FMRohrstrecke_26,
                popuplayertitle: "FM Rohrstrecke",
                interactive: true,
                title: '<img src="styles/legend/FMRohrstrecke_26.png" /> FM Rohrstrecke'
            });
var format_FMSchutzrohr_27 = new ol.format.GeoJSON();
var features_FMSchutzrohr_27 = format_FMSchutzrohr_27.readFeatures(json_FMSchutzrohr_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25833'});
var jsonSource_FMSchutzrohr_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FMSchutzrohr_27.addFeatures(features_FMSchutzrohr_27);
var lyr_FMSchutzrohr_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FMSchutzrohr_27, 
                style: style_FMSchutzrohr_27,
                popuplayertitle: "FM Schutzrohr",
                interactive: true,
                title: '<img src="styles/legend/FMSchutzrohr_27.png" /> FM Schutzrohr'
            });
var format_FMVerteiler_28 = new ol.format.GeoJSON();
var features_FMVerteiler_28 = format_FMVerteiler_28.readFeatures(json_FMVerteiler_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25833'});
var jsonSource_FMVerteiler_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FMVerteiler_28.addFeatures(features_FMVerteiler_28);
var lyr_FMVerteiler_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FMVerteiler_28, 
                style: style_FMVerteiler_28,
                popuplayertitle: "FM Verteiler",
                interactive: true,
                title: '<img src="styles/legend/FMVerteiler_28.png" /> FM Verteiler'
            });
var format_FMMicrorohrRohrverbund_29 = new ol.format.GeoJSON();
var features_FMMicrorohrRohrverbund_29 = format_FMMicrorohrRohrverbund_29.readFeatures(json_FMMicrorohrRohrverbund_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25833'});
var jsonSource_FMMicrorohrRohrverbund_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FMMicrorohrRohrverbund_29.addFeatures(features_FMMicrorohrRohrverbund_29);
var lyr_FMMicrorohrRohrverbund_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FMMicrorohrRohrverbund_29, 
                style: style_FMMicrorohrRohrverbund_29,
                popuplayertitle: "FM-Microrohr Rohrverbund",
                interactive: true,
                title: '<img src="styles/legend/FMMicrorohrRohrverbund_29.png" /> FM-Microrohr Rohrverbund'
            });
var format_FMMuffe_30 = new ol.format.GeoJSON();
var features_FMMuffe_30 = format_FMMuffe_30.readFeatures(json_FMMuffe_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25833'});
var jsonSource_FMMuffe_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FMMuffe_30.addFeatures(features_FMMuffe_30);
var lyr_FMMuffe_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FMMuffe_30, 
                style: style_FMMuffe_30,
                popuplayertitle: "FM-Muffe",
                interactive: true,
                title: '<img src="styles/legend/FMMuffe_30.png" /> FM-Muffe'
            });
var format_FMTrasse_31 = new ol.format.GeoJSON();
var features_FMTrasse_31 = format_FMTrasse_31.readFeatures(json_FMTrasse_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25833'});
var jsonSource_FMTrasse_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FMTrasse_31.addFeatures(features_FMTrasse_31);
var lyr_FMTrasse_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FMTrasse_31, 
                style: style_FMTrasse_31,
                popuplayertitle: "FM-Trasse",
                interactive: true,
                title: '<img src="styles/legend/FMTrasse_31.png" /> FM-Trasse'
            });
var group_Export_01 = new ol.layer.Group({
                                layers: [lyr_Hecke_1,lyr_Hhenpunkt_2,lyr_Kanaldeckel_3,lyr_KIVIDLine_4,lyr_Kleinpunkt_5,lyr_Laterne_6,lyr_Measurepoint_7,lyr_Punkt_8,lyr_Station_9,lyr_Straenrand_10,lyr_Sttzmauer_11,lyr_TextDGIS_12,lyr_TopoSchieberGas_13,lyr_UST_14,lyr_Wegbegrenzung_15,lyr_Wirtschaftsgebudelinie_16,lyr_Wohngebudelinie_17,lyr_Zaun_18,lyr_Bschungsoberkante_19,lyr_Bschungsunterkante_20,lyr_Brcke_21,lyr_Dokument_22,lyr_DurchlassPunkt_23,lyr_Flchenumringallgemein_24,lyr_FMKabelschacht_25,lyr_FMRohrstrecke_26,lyr_FMSchutzrohr_27,lyr_FMVerteiler_28,lyr_FMMicrorohrRohrverbund_29,lyr_FMMuffe_30,lyr_FMTrasse_31,],
                                fold: "open",
                                title: "Export_01"});

lyr_OpenStreetMap_0.setVisible(true);lyr_Hecke_1.setVisible(true);lyr_Hhenpunkt_2.setVisible(true);lyr_Kanaldeckel_3.setVisible(true);lyr_KIVIDLine_4.setVisible(true);lyr_Kleinpunkt_5.setVisible(true);lyr_Laterne_6.setVisible(true);lyr_Measurepoint_7.setVisible(true);lyr_Punkt_8.setVisible(true);lyr_Station_9.setVisible(true);lyr_Straenrand_10.setVisible(true);lyr_Sttzmauer_11.setVisible(true);lyr_TextDGIS_12.setVisible(true);lyr_TopoSchieberGas_13.setVisible(true);lyr_UST_14.setVisible(true);lyr_Wegbegrenzung_15.setVisible(true);lyr_Wirtschaftsgebudelinie_16.setVisible(true);lyr_Wohngebudelinie_17.setVisible(true);lyr_Zaun_18.setVisible(true);lyr_Bschungsoberkante_19.setVisible(true);lyr_Bschungsunterkante_20.setVisible(true);lyr_Brcke_21.setVisible(true);lyr_Dokument_22.setVisible(true);lyr_DurchlassPunkt_23.setVisible(true);lyr_Flchenumringallgemein_24.setVisible(true);lyr_FMKabelschacht_25.setVisible(true);lyr_FMRohrstrecke_26.setVisible(true);lyr_FMSchutzrohr_27.setVisible(true);lyr_FMVerteiler_28.setVisible(true);lyr_FMMicrorohrRohrverbund_29.setVisible(true);lyr_FMMuffe_30.setVisible(true);lyr_FMTrasse_31.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_Export_01];
lyr_Hecke_1.set('fieldAliases', {'ObjectID': 'ObjectID', 'FROX_ID': 'FROX_ID', 'fm_session': 'fm_session', 'lebensstat': 'lebensstat', 'sachse_cod': 'sachse_cod', 'capture_at': 'capture_at', 'capture_by': 'capture_by', 'change_at': 'change_at', 'change_by': 'change_by', 'bemerkung': 'bemerkung', 'beschriftu': 'beschriftu', 'SHAPE_Leng': 'SHAPE_Leng', 'sig_richtu': 'sig_richtu', });
lyr_Hhenpunkt_2.set('fieldAliases', {'ObjectID': 'ObjectID', 'FROX_ID': 'FROX_ID', 'fm_session': 'fm_session', 'lebensstat': 'lebensstat', 'ANGLE': 'ANGLE', 'hoehe': 'hoehe', 'gueltig': 'gueltig', 'sachse_cod': 'sachse_cod', 'capture_at': 'capture_at', 'capture_by': 'capture_by', 'change_at': 'change_at', 'change_by': 'change_by', 'bemerkung': 'bemerkung', 'beschriftu': 'beschriftu', 'art': 'art', });
lyr_Kanaldeckel_3.set('fieldAliases', {'ObjectID': 'ObjectID', 'FROX_ID': 'FROX_ID', 'fm_session': 'fm_session', 'lebensstat': 'lebensstat', 'ANGLE': 'ANGLE', 'kd_hoehe': 'kd_hoehe', 'sachse_cod': 'sachse_cod', 'capture_at': 'capture_at', 'capture_by': 'capture_by', 'change_at': 'change_at', 'change_by': 'change_by', 'bemerkung': 'bemerkung', 'beschriftu': 'beschriftu', 'deckel_dar': 'deckel_dar', 'system': 'system', 'art': 'art', });
lyr_KIVIDLine_4.set('fieldAliases', {'ObjectID': 'ObjectID', 'FROX_ID': 'FROX_ID', 'fm_session': 'fm_session', 'lebensstat': 'lebensstat', 'capture_at': 'capture_at', 'capture_by': 'capture_by', 'change_at': 'change_at', 'change_by': 'change_by', 'bemerkung': 'bemerkung', 'beschriftu': 'beschriftu', 'SHAPE_Leng': 'SHAPE_Leng', 'Type': 'Type', });
lyr_Kleinpunkt_5.set('fieldAliases', {'ObjectID': 'ObjectID', 'FROX_ID': 'FROX_ID', 'fm_session': 'fm_session', 'lebensstat': 'lebensstat', 'ANGLE': 'ANGLE', 'punktnr': 'punktnr', 'objektname': 'objektname', 'sachse_cod': 'sachse_cod', 'capture_at': 'capture_at', 'capture_by': 'capture_by', 'change_at': 'change_at', 'change_by': 'change_by', 'bemerkung': 'bemerkung', 'beschriftu': 'beschriftu', 'groesse': 'groesse', });
lyr_Laterne_6.set('fieldAliases', {'ObjectID': 'ObjectID', 'FROX_ID': 'FROX_ID', 'fm_session': 'fm_session', 'lebensstat': 'lebensstat', 'ANGLE': 'ANGLE', 'sachse_cod': 'sachse_cod', 'capture_at': 'capture_at', 'capture_by': 'capture_by', 'change_at': 'change_at', 'change_by': 'change_by', 'bemerkung': 'bemerkung', 'beschriftu': 'beschriftu', 'art': 'art', });
lyr_Measurepoint_7.set('fieldAliases', {'ObjectID': 'ObjectID', 'FROX_ID': 'FROX_ID', 'fm_session': 'fm_session', 'lebensstat': 'lebensstat', 'ANGLE': 'ANGLE', 'flag': 'flag', 'PNR': 'PNR', 'precisionH': 'precisionH', 'precisionV': 'precisionV', 'hoehe': 'hoehe', 'fm_used_in': 'fm_used_in', 'capture_at': 'capture_at', 'capture_by': 'capture_by', 'change_at': 'change_at', 'change_by': 'change_by', 'bemerkung': 'bemerkung', 'beschriftu': 'beschriftu', 'Type': 'Type', });
lyr_Punkt_8.set('fieldAliases', {'ObjectID': 'ObjectID', 'FROX_ID': 'FROX_ID', 'fm_session': 'fm_session', 'lebensstat': 'lebensstat', 'ANGLE': 'ANGLE', 'hoehe': 'hoehe', 'sachse_cod': 'sachse_cod', 'capture_at': 'capture_at', 'capture_by': 'capture_by', 'change_at': 'change_at', 'change_by': 'change_by', 'bemerkung': 'bemerkung', 'beschriftu': 'beschriftu', });
lyr_Station_9.set('fieldAliases', {'ObjectID': 'ObjectID', 'FROX_ID': 'FROX_ID', 'fm_session': 'fm_session', 'lebensstat': 'lebensstat', 'ANGLE': 'ANGLE', 'capture_at': 'capture_at', 'capture_by': 'capture_by', 'change_at': 'change_at', 'change_by': 'change_by', 'bemerkung': 'bemerkung', 'beschriftu': 'beschriftu', });
lyr_Straenrand_10.set('fieldAliases', {'ObjectID': 'ObjectID', 'FROX_ID': 'FROX_ID', 'fm_session': 'fm_session', 'lebensstat': 'lebensstat', 'sachse_cod': 'sachse_cod', 'strassenna': 'strassenna', 'capture_at': 'capture_at', 'capture_by': 'capture_by', 'change_at': 'change_at', 'change_by': 'change_by', 'bemerkung': 'bemerkung', 'beschriftu': 'beschriftu', 'SHAPE_Leng': 'SHAPE_Leng', 'rand': 'rand', });
lyr_Sttzmauer_11.set('fieldAliases', {'ObjectID': 'ObjectID', 'FROX_ID': 'FROX_ID', 'fm_session': 'fm_session', 'lebensstat': 'lebensstat', 'hoehe': 'hoehe', 'stuetzhoeh': 'stuetzhoeh', 'ueberdeckt': 'ueberdeckt', 'sachse_cod': 'sachse_cod', 'capture_at': 'capture_at', 'capture_by': 'capture_by', 'change_at': 'change_at', 'change_by': 'change_by', 'bemerkung': 'bemerkung', 'beschriftu': 'beschriftu', 'SHAPE_Leng': 'SHAPE_Leng', 'breite': 'breite', 'sig_richtu': 'sig_richtu', });
lyr_TextDGIS_12.set('fieldAliases', {'ObjectID': 'ObjectID', 'FROX_ID': 'FROX_ID', 'fm_session': 'fm_session', 'lebensstat': 'lebensstat', 'ANGLE': 'ANGLE', 'textzusatz': 'textzusatz', 'sachse_cod': 'sachse_cod', 'capture_at': 'capture_at', 'capture_by': 'capture_by', 'change_at': 'change_at', 'change_by': 'change_by', 'bemerkung': 'bemerkung', 'beschriftu': 'beschriftu', });
lyr_TopoSchieberGas_13.set('fieldAliases', {'ObjectID': 'ObjectID', 'FROX_ID': 'FROX_ID', 'fm_session': 'fm_session', 'lebensstat': 'lebensstat', 'ANGLE': 'ANGLE', 'sachse_cod': 'sachse_cod', 'capture_at': 'capture_at', 'capture_by': 'capture_by', 'change_at': 'change_at', 'change_by': 'change_by', 'bemerkung': 'bemerkung', 'beschriftu': 'beschriftu', });
lyr_UST_14.set('fieldAliases', {'ObjectID': 'ObjectID', 'FROX_ID': 'FROX_ID', 'fm_session': 'fm_session', 'lebensstat': 'lebensstat', 'sachse_cod': 'sachse_cod', 'capture_at': 'capture_at', 'capture_by': 'capture_by', 'change_at': 'change_at', 'change_by': 'change_by', 'bemerkung': 'bemerkung', 'beschriftu': 'beschriftu', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Wegbegrenzung_15.set('fieldAliases', {'ObjectID': 'ObjectID', 'FROX_ID': 'FROX_ID', 'fm_session': 'fm_session', 'lebensstat': 'lebensstat', 'sachse_cod': 'sachse_cod', 'strassenna': 'strassenna', 'capture_at': 'capture_at', 'capture_by': 'capture_by', 'change_at': 'change_at', 'change_by': 'change_by', 'bemerkung': 'bemerkung', 'beschriftu': 'beschriftu', 'SHAPE_Leng': 'SHAPE_Leng', 'rand': 'rand', });
lyr_Wirtschaftsgebudelinie_16.set('fieldAliases', {'ObjectID': 'ObjectID', 'FROX_ID': 'FROX_ID', 'fm_session': 'fm_session', 'lebensstat': 'lebensstat', 'hausnr': 'hausnr', 'sachse_cod': 'sachse_cod', 'capture_at': 'capture_at', 'capture_by': 'capture_by', 'change_at': 'change_at', 'change_by': 'change_by', 'bemerkung': 'bemerkung', 'beschriftu': 'beschriftu', 'SHAPE_Leng': 'SHAPE_Leng', 'art': 'art', });
lyr_Wohngebudelinie_17.set('fieldAliases', {'ObjectID': 'ObjectID', 'FROX_ID': 'FROX_ID', 'fm_session': 'fm_session', 'lebensstat': 'lebensstat', 'hausnr': 'hausnr', 'sachse_cod': 'sachse_cod', 'capture_at': 'capture_at', 'capture_by': 'capture_by', 'change_at': 'change_at', 'change_by': 'change_by', 'bemerkung': 'bemerkung', 'beschriftu': 'beschriftu', 'SHAPE_Leng': 'SHAPE_Leng', 'art': 'art', });
lyr_Zaun_18.set('fieldAliases', {'ObjectID': 'ObjectID', 'FROX_ID': 'FROX_ID', 'fm_session': 'fm_session', 'lebensstat': 'lebensstat', 'sachse_cod': 'sachse_cod', 'capture_at': 'capture_at', 'capture_by': 'capture_by', 'change_at': 'change_at', 'change_by': 'change_by', 'bemerkung': 'bemerkung', 'beschriftu': 'beschriftu', 'SHAPE_Leng': 'SHAPE_Leng', 'sig_lage': 'sig_lage', 'art': 'art', });
lyr_Bschungsoberkante_19.set('fieldAliases', {'ObjectID': 'ObjectID', 'FROX_ID': 'FROX_ID', 'fm_session': 'fm_session', 'lebensstat': 'lebensstat', 'gueltig': 'gueltig', 'sachse_cod': 'sachse_cod', 'capture_at': 'capture_at', 'capture_by': 'capture_by', 'change_at': 'change_at', 'change_by': 'change_by', 'bemerkung': 'bemerkung', 'beschriftu': 'beschriftu', 'SHAPE_Leng': 'SHAPE_Leng', 'sig_lage': 'sig_lage', });
lyr_Bschungsunterkante_20.set('fieldAliases', {'ObjectID': 'ObjectID', 'FROX_ID': 'FROX_ID', 'fm_session': 'fm_session', 'lebensstat': 'lebensstat', 'gueltig': 'gueltig', 'sachse_cod': 'sachse_cod', 'capture_at': 'capture_at', 'capture_by': 'capture_by', 'change_at': 'change_at', 'change_by': 'change_by', 'bemerkung': 'bemerkung', 'beschriftu': 'beschriftu', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Brcke_21.set('fieldAliases', {'ObjectID': 'ObjectID', 'FROX_ID': 'FROX_ID', 'fm_session': 'fm_session', 'lebensstat': 'lebensstat', 'sachse_cod': 'sachse_cod', 'capture_at': 'capture_at', 'capture_by': 'capture_by', 'change_at': 'change_at', 'change_by': 'change_by', 'bemerkung': 'bemerkung', 'beschriftu': 'beschriftu', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Dokument_22.set('fieldAliases', {'ObjectID': 'ObjectID', 'FROX_ID': 'FROX_ID', 'fm_session': 'fm_session', 'lebensstat': 'lebensstat', 'ANGLE': 'ANGLE', 'label': 'label', 'original': 'original', 'fotoname': 'fotoname', 'datetime': 'datetime', 'ankertime': 'ankertime', 'aufnahmeda': 'aufnahmeda', 'capture_at': 'capture_at', 'capture_by': 'capture_by', 'change_at': 'change_at', 'change_by': 'change_by', 'bemerkung': 'bemerkung', 'beschriftu': 'beschriftu', 'doc_type': 'doc_type', 'descriptio': 'descriptio', });
lyr_DurchlassPunkt_23.set('fieldAliases', {'ObjectID': 'ObjectID', 'FROX_ID': 'FROX_ID', 'fm_session': 'fm_session', 'lebensstat': 'lebensstat', 'ANGLE': 'ANGLE', 'textzusatz': 'textzusatz', 'sachse_cod': 'sachse_cod', 'capture_at': 'capture_at', 'capture_by': 'capture_by', 'change_at': 'change_at', 'change_by': 'change_by', 'bemerkung': 'bemerkung', 'beschriftu': 'beschriftu', });
lyr_Flchenumringallgemein_24.set('fieldAliases', {'ObjectID': 'ObjectID', 'FROX_ID': 'FROX_ID', 'fm_session': 'fm_session', 'lebensstat': 'lebensstat', 'sachse_cod': 'sachse_cod', 'capture_at': 'capture_at', 'capture_by': 'capture_by', 'change_at': 'change_at', 'change_by': 'change_by', 'bemerkung': 'bemerkung', 'beschriftu': 'beschriftu', 'SHAPE_Leng': 'SHAPE_Leng', 'art': 'art', });
lyr_FMKabelschacht_25.set('fieldAliases', {'ObjectID': 'ObjectID', 'FROX_ID': 'FROX_ID', 'fm_session': 'fm_session', 'lebensstat': 'lebensstat', 'ANGLE': 'ANGLE', 'typ': 'typ', 'sachse_cod': 'sachse_cod', 'capture_at': 'capture_at', 'capture_by': 'capture_by', 'change_at': 'change_at', 'change_by': 'change_by', 'bemerkung': 'bemerkung', 'beschriftu': 'beschriftu', });
lyr_FMRohrstrecke_26.set('fieldAliases', {'ObjectID': 'ObjectID', 'FROX_ID': 'FROX_ID', 'fm_session': 'fm_session', 'lebensstat': 'lebensstat', 'zug_anz': 'zug_anz', 'sachse_cod': 'sachse_cod', 'capture_at': 'capture_at', 'capture_by': 'capture_by', 'change_at': 'change_at', 'change_by': 'change_by', 'bemerkung': 'bemerkung', 'beschriftu': 'beschriftu', 'SHAPE_Leng': 'SHAPE_Leng', 'querschnit': 'querschnit', });
lyr_FMSchutzrohr_27.set('fieldAliases', {'ObjectID': 'ObjectID', 'FROX_ID': 'FROX_ID', 'fm_session': 'fm_session', 'lebensstat': 'lebensstat', 'sachse_cod': 'sachse_cod', 'capture_at': 'capture_at', 'capture_by': 'capture_by', 'change_at': 'change_at', 'change_by': 'change_by', 'bemerkung': 'bemerkung', 'beschriftu': 'beschriftu', 'SHAPE_Leng': 'SHAPE_Leng', 'nennweite': 'nennweite', 'material': 'material', });
lyr_FMVerteiler_28.set('fieldAliases', {'ObjectID': 'ObjectID', 'FROX_ID': 'FROX_ID', 'fm_session': 'fm_session', 'lebensstat': 'lebensstat', 'ANGLE': 'ANGLE', 'sachse_cod': 'sachse_cod', 'capture_at': 'capture_at', 'capture_by': 'capture_by', 'change_at': 'change_at', 'change_by': 'change_by', 'bemerkung': 'bemerkung', 'beschriftu': 'beschriftu', });
lyr_FMMicrorohrRohrverbund_29.set('fieldAliases', {'ObjectID': 'ObjectID', 'FROX_ID': 'FROX_ID', 'fm_session': 'fm_session', 'lebensstat': 'lebensstat', 'baujahr': 'baujahr', 'sachse_cod': 'sachse_cod', 'capture_at': 'capture_at', 'capture_by': 'capture_by', 'change_at': 'change_at', 'change_by': 'change_by', 'bemerkung': 'bemerkung', 'beschriftu': 'beschriftu', 'SHAPE_Leng': 'SHAPE_Leng', 'dimension': 'dimension', });
lyr_FMMuffe_30.set('fieldAliases', {'ObjectID': 'ObjectID', 'FROX_ID': 'FROX_ID', 'fm_session': 'fm_session', 'lebensstat': 'lebensstat', 'ANGLE': 'ANGLE', 'geortet': 'geortet', 'lageun': 'lageun', 'montagedat': 'montagedat', 'typ': 'typ', 'sachse_cod': 'sachse_cod', 'höhe': 'höhe', 'capture_at': 'capture_at', 'capture_by': 'capture_by', 'change_at': 'change_at', 'change_by': 'change_by', 'bemerkung': 'bemerkung', 'beschriftu': 'beschriftu', 'art': 'art', 'status': 'status', });
lyr_FMTrasse_31.set('fieldAliases', {'ObjectID': 'ObjectID', 'FROX_ID': 'FROX_ID', 'fm_session': 'fm_session', 'lebensstat': 'lebensstat', 'sachse_cod': 'sachse_cod', 'MV': 'MV', 'zusatz': 'zusatz', 'capture_at': 'capture_at', 'capture_by': 'capture_by', 'change_at': 'change_at', 'change_by': 'change_by', 'bemerkung': 'bemerkung', 'beschriftu': 'beschriftu', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Hecke_1.set('fieldImages', {'ObjectID': '', 'FROX_ID': '', 'fm_session': '', 'lebensstat': '', 'sachse_cod': '', 'capture_at': '', 'capture_by': '', 'change_at': '', 'change_by': '', 'bemerkung': '', 'beschriftu': '', 'SHAPE_Leng': '', 'sig_richtu': '', });
lyr_Hhenpunkt_2.set('fieldImages', {'ObjectID': '', 'FROX_ID': '', 'fm_session': '', 'lebensstat': '', 'ANGLE': '', 'hoehe': '', 'gueltig': '', 'sachse_cod': '', 'capture_at': '', 'capture_by': '', 'change_at': '', 'change_by': '', 'bemerkung': '', 'beschriftu': '', 'art': '', });
lyr_Kanaldeckel_3.set('fieldImages', {'ObjectID': '', 'FROX_ID': '', 'fm_session': '', 'lebensstat': '', 'ANGLE': '', 'kd_hoehe': '', 'sachse_cod': '', 'capture_at': '', 'capture_by': '', 'change_at': '', 'change_by': '', 'bemerkung': '', 'beschriftu': '', 'deckel_dar': '', 'system': '', 'art': '', });
lyr_KIVIDLine_4.set('fieldImages', {'ObjectID': '', 'FROX_ID': '', 'fm_session': '', 'lebensstat': '', 'capture_at': '', 'capture_by': '', 'change_at': '', 'change_by': '', 'bemerkung': '', 'beschriftu': '', 'SHAPE_Leng': '', 'Type': '', });
lyr_Kleinpunkt_5.set('fieldImages', {'ObjectID': '', 'FROX_ID': '', 'fm_session': '', 'lebensstat': '', 'ANGLE': '', 'punktnr': '', 'objektname': '', 'sachse_cod': '', 'capture_at': '', 'capture_by': '', 'change_at': '', 'change_by': '', 'bemerkung': '', 'beschriftu': '', 'groesse': '', });
lyr_Laterne_6.set('fieldImages', {'ObjectID': '', 'FROX_ID': '', 'fm_session': '', 'lebensstat': '', 'ANGLE': '', 'sachse_cod': '', 'capture_at': '', 'capture_by': '', 'change_at': '', 'change_by': '', 'bemerkung': '', 'beschriftu': '', 'art': '', });
lyr_Measurepoint_7.set('fieldImages', {'ObjectID': '', 'FROX_ID': '', 'fm_session': '', 'lebensstat': '', 'ANGLE': '', 'flag': '', 'PNR': '', 'precisionH': '', 'precisionV': '', 'hoehe': '', 'fm_used_in': '', 'capture_at': '', 'capture_by': '', 'change_at': '', 'change_by': '', 'bemerkung': '', 'beschriftu': '', 'Type': '', });
lyr_Punkt_8.set('fieldImages', {'ObjectID': '', 'FROX_ID': '', 'fm_session': '', 'lebensstat': '', 'ANGLE': '', 'hoehe': '', 'sachse_cod': '', 'capture_at': '', 'capture_by': '', 'change_at': '', 'change_by': '', 'bemerkung': '', 'beschriftu': '', });
lyr_Station_9.set('fieldImages', {'ObjectID': '', 'FROX_ID': '', 'fm_session': '', 'lebensstat': '', 'ANGLE': '', 'capture_at': '', 'capture_by': '', 'change_at': '', 'change_by': '', 'bemerkung': '', 'beschriftu': '', });
lyr_Straenrand_10.set('fieldImages', {'ObjectID': 'TextEdit', 'FROX_ID': 'TextEdit', 'fm_session': 'TextEdit', 'lebensstat': 'TextEdit', 'sachse_cod': 'TextEdit', 'strassenna': 'TextEdit', 'capture_at': 'DateTime', 'capture_by': 'TextEdit', 'change_at': 'DateTime', 'change_by': 'TextEdit', 'bemerkung': 'TextEdit', 'beschriftu': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'rand': 'TextEdit', });
lyr_Sttzmauer_11.set('fieldImages', {'ObjectID': '', 'FROX_ID': '', 'fm_session': '', 'lebensstat': '', 'hoehe': '', 'stuetzhoeh': '', 'ueberdeckt': '', 'sachse_cod': '', 'capture_at': '', 'capture_by': '', 'change_at': '', 'change_by': '', 'bemerkung': '', 'beschriftu': '', 'SHAPE_Leng': '', 'breite': '', 'sig_richtu': '', });
lyr_TextDGIS_12.set('fieldImages', {'ObjectID': '', 'FROX_ID': '', 'fm_session': '', 'lebensstat': '', 'ANGLE': '', 'textzusatz': '', 'sachse_cod': '', 'capture_at': '', 'capture_by': '', 'change_at': '', 'change_by': '', 'bemerkung': '', 'beschriftu': '', });
lyr_TopoSchieberGas_13.set('fieldImages', {'ObjectID': '', 'FROX_ID': '', 'fm_session': '', 'lebensstat': '', 'ANGLE': '', 'sachse_cod': '', 'capture_at': '', 'capture_by': '', 'change_at': '', 'change_by': '', 'bemerkung': '', 'beschriftu': '', });
lyr_UST_14.set('fieldImages', {'ObjectID': 'TextEdit', 'FROX_ID': 'TextEdit', 'fm_session': 'TextEdit', 'lebensstat': 'TextEdit', 'sachse_cod': 'TextEdit', 'capture_at': 'DateTime', 'capture_by': 'TextEdit', 'change_at': 'DateTime', 'change_by': 'TextEdit', 'bemerkung': 'TextEdit', 'beschriftu': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Wegbegrenzung_15.set('fieldImages', {'ObjectID': 'TextEdit', 'FROX_ID': 'TextEdit', 'fm_session': 'TextEdit', 'lebensstat': 'TextEdit', 'sachse_cod': 'TextEdit', 'strassenna': 'TextEdit', 'capture_at': 'DateTime', 'capture_by': 'TextEdit', 'change_at': 'DateTime', 'change_by': 'TextEdit', 'bemerkung': 'TextEdit', 'beschriftu': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'rand': 'TextEdit', });
lyr_Wirtschaftsgebudelinie_16.set('fieldImages', {'ObjectID': 'TextEdit', 'FROX_ID': 'TextEdit', 'fm_session': 'TextEdit', 'lebensstat': 'TextEdit', 'hausnr': 'TextEdit', 'sachse_cod': 'TextEdit', 'capture_at': 'DateTime', 'capture_by': 'TextEdit', 'change_at': 'DateTime', 'change_by': 'TextEdit', 'bemerkung': 'TextEdit', 'beschriftu': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'art': 'TextEdit', });
lyr_Wohngebudelinie_17.set('fieldImages', {'ObjectID': 'TextEdit', 'FROX_ID': 'TextEdit', 'fm_session': 'TextEdit', 'lebensstat': 'TextEdit', 'hausnr': 'TextEdit', 'sachse_cod': 'TextEdit', 'capture_at': 'DateTime', 'capture_by': 'TextEdit', 'change_at': 'DateTime', 'change_by': 'TextEdit', 'bemerkung': 'TextEdit', 'beschriftu': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'art': 'TextEdit', });
lyr_Zaun_18.set('fieldImages', {'ObjectID': '', 'FROX_ID': '', 'fm_session': '', 'lebensstat': '', 'sachse_cod': '', 'capture_at': '', 'capture_by': '', 'change_at': '', 'change_by': '', 'bemerkung': '', 'beschriftu': '', 'SHAPE_Leng': '', 'sig_lage': '', 'art': '', });
lyr_Bschungsoberkante_19.set('fieldImages', {'ObjectID': '', 'FROX_ID': '', 'fm_session': '', 'lebensstat': '', 'gueltig': '', 'sachse_cod': '', 'capture_at': '', 'capture_by': '', 'change_at': '', 'change_by': '', 'bemerkung': '', 'beschriftu': '', 'SHAPE_Leng': '', 'sig_lage': '', });
lyr_Bschungsunterkante_20.set('fieldImages', {'ObjectID': '', 'FROX_ID': '', 'fm_session': '', 'lebensstat': '', 'gueltig': '', 'sachse_cod': '', 'capture_at': '', 'capture_by': '', 'change_at': '', 'change_by': '', 'bemerkung': '', 'beschriftu': '', 'SHAPE_Leng': '', });
lyr_Brcke_21.set('fieldImages', {'ObjectID': '', 'FROX_ID': '', 'fm_session': '', 'lebensstat': '', 'sachse_cod': '', 'capture_at': '', 'capture_by': '', 'change_at': '', 'change_by': '', 'bemerkung': '', 'beschriftu': '', 'SHAPE_Leng': '', });
lyr_Dokument_22.set('fieldImages', {'ObjectID': '', 'FROX_ID': '', 'fm_session': '', 'lebensstat': '', 'ANGLE': '', 'label': '', 'original': '', 'fotoname': '', 'datetime': '', 'ankertime': '', 'aufnahmeda': '', 'capture_at': '', 'capture_by': '', 'change_at': '', 'change_by': '', 'bemerkung': '', 'beschriftu': '', 'doc_type': '', 'descriptio': '', });
lyr_DurchlassPunkt_23.set('fieldImages', {'ObjectID': '', 'FROX_ID': '', 'fm_session': '', 'lebensstat': '', 'ANGLE': '', 'textzusatz': '', 'sachse_cod': '', 'capture_at': '', 'capture_by': '', 'change_at': '', 'change_by': '', 'bemerkung': '', 'beschriftu': '', });
lyr_Flchenumringallgemein_24.set('fieldImages', {'ObjectID': '', 'FROX_ID': '', 'fm_session': '', 'lebensstat': '', 'sachse_cod': '', 'capture_at': '', 'capture_by': '', 'change_at': '', 'change_by': '', 'bemerkung': '', 'beschriftu': '', 'SHAPE_Leng': '', 'art': '', });
lyr_FMKabelschacht_25.set('fieldImages', {'ObjectID': '', 'FROX_ID': '', 'fm_session': '', 'lebensstat': '', 'ANGLE': '', 'typ': '', 'sachse_cod': '', 'capture_at': '', 'capture_by': '', 'change_at': '', 'change_by': '', 'bemerkung': '', 'beschriftu': '', });
lyr_FMRohrstrecke_26.set('fieldImages', {'ObjectID': '', 'FROX_ID': '', 'fm_session': '', 'lebensstat': '', 'zug_anz': '', 'sachse_cod': '', 'capture_at': '', 'capture_by': '', 'change_at': '', 'change_by': '', 'bemerkung': '', 'beschriftu': '', 'SHAPE_Leng': '', 'querschnit': '', });
lyr_FMSchutzrohr_27.set('fieldImages', {'ObjectID': '', 'FROX_ID': '', 'fm_session': '', 'lebensstat': '', 'sachse_cod': '', 'capture_at': '', 'capture_by': '', 'change_at': '', 'change_by': '', 'bemerkung': '', 'beschriftu': '', 'SHAPE_Leng': '', 'nennweite': '', 'material': '', });
lyr_FMVerteiler_28.set('fieldImages', {'ObjectID': '', 'FROX_ID': '', 'fm_session': '', 'lebensstat': '', 'ANGLE': '', 'sachse_cod': '', 'capture_at': '', 'capture_by': '', 'change_at': '', 'change_by': '', 'bemerkung': '', 'beschriftu': '', });
lyr_FMMicrorohrRohrverbund_29.set('fieldImages', {'ObjectID': '', 'FROX_ID': '', 'fm_session': '', 'lebensstat': '', 'baujahr': '', 'sachse_cod': '', 'capture_at': '', 'capture_by': '', 'change_at': '', 'change_by': '', 'bemerkung': '', 'beschriftu': '', 'SHAPE_Leng': '', 'dimension': '', });
lyr_FMMuffe_30.set('fieldImages', {'ObjectID': 'TextEdit', 'FROX_ID': 'TextEdit', 'fm_session': 'TextEdit', 'lebensstat': 'TextEdit', 'ANGLE': 'TextEdit', 'geortet': 'Range', 'lageun': 'Range', 'montagedat': 'DateTime', 'typ': 'TextEdit', 'sachse_cod': 'TextEdit', 'höhe': 'TextEdit', 'capture_at': 'DateTime', 'capture_by': 'TextEdit', 'change_at': 'DateTime', 'change_by': 'TextEdit', 'bemerkung': 'TextEdit', 'beschriftu': 'TextEdit', 'art': 'TextEdit', 'status': 'TextEdit', });
lyr_FMTrasse_31.set('fieldImages', {'ObjectID': 'TextEdit', 'FROX_ID': 'TextEdit', 'fm_session': 'TextEdit', 'lebensstat': 'TextEdit', 'sachse_cod': 'TextEdit', 'MV': 'TextEdit', 'zusatz': 'TextEdit', 'capture_at': 'DateTime', 'capture_by': 'TextEdit', 'change_at': 'DateTime', 'change_by': 'TextEdit', 'bemerkung': 'TextEdit', 'beschriftu': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Hecke_1.set('fieldLabels', {'ObjectID': 'no label', 'FROX_ID': 'no label', 'fm_session': 'no label', 'lebensstat': 'no label', 'sachse_cod': 'no label', 'capture_at': 'no label', 'capture_by': 'no label', 'change_at': 'no label', 'change_by': 'no label', 'bemerkung': 'no label', 'beschriftu': 'no label', 'SHAPE_Leng': 'no label', 'sig_richtu': 'no label', });
lyr_Hhenpunkt_2.set('fieldLabels', {'ObjectID': 'no label', 'FROX_ID': 'no label', 'fm_session': 'no label', 'lebensstat': 'no label', 'ANGLE': 'no label', 'hoehe': 'no label', 'gueltig': 'no label', 'sachse_cod': 'no label', 'capture_at': 'no label', 'capture_by': 'no label', 'change_at': 'no label', 'change_by': 'no label', 'bemerkung': 'no label', 'beschriftu': 'no label', 'art': 'no label', });
lyr_Kanaldeckel_3.set('fieldLabels', {'ObjectID': 'no label', 'FROX_ID': 'no label', 'fm_session': 'no label', 'lebensstat': 'no label', 'ANGLE': 'no label', 'kd_hoehe': 'no label', 'sachse_cod': 'no label', 'capture_at': 'no label', 'capture_by': 'no label', 'change_at': 'no label', 'change_by': 'no label', 'bemerkung': 'no label', 'beschriftu': 'no label', 'deckel_dar': 'no label', 'system': 'no label', 'art': 'no label', });
lyr_KIVIDLine_4.set('fieldLabels', {'ObjectID': 'no label', 'FROX_ID': 'no label', 'fm_session': 'no label', 'lebensstat': 'no label', 'capture_at': 'no label', 'capture_by': 'no label', 'change_at': 'no label', 'change_by': 'no label', 'bemerkung': 'no label', 'beschriftu': 'no label', 'SHAPE_Leng': 'no label', 'Type': 'no label', });
lyr_Kleinpunkt_5.set('fieldLabels', {'ObjectID': 'no label', 'FROX_ID': 'no label', 'fm_session': 'no label', 'lebensstat': 'no label', 'ANGLE': 'no label', 'punktnr': 'no label', 'objektname': 'no label', 'sachse_cod': 'no label', 'capture_at': 'no label', 'capture_by': 'no label', 'change_at': 'no label', 'change_by': 'no label', 'bemerkung': 'no label', 'beschriftu': 'no label', 'groesse': 'no label', });
lyr_Laterne_6.set('fieldLabels', {'ObjectID': 'no label', 'FROX_ID': 'no label', 'fm_session': 'no label', 'lebensstat': 'no label', 'ANGLE': 'no label', 'sachse_cod': 'no label', 'capture_at': 'no label', 'capture_by': 'no label', 'change_at': 'no label', 'change_by': 'no label', 'bemerkung': 'no label', 'beschriftu': 'no label', 'art': 'no label', });
lyr_Measurepoint_7.set('fieldLabels', {'ObjectID': 'no label', 'FROX_ID': 'no label', 'fm_session': 'no label', 'lebensstat': 'no label', 'ANGLE': 'no label', 'flag': 'no label', 'PNR': 'no label', 'precisionH': 'no label', 'precisionV': 'no label', 'hoehe': 'no label', 'fm_used_in': 'no label', 'capture_at': 'no label', 'capture_by': 'no label', 'change_at': 'no label', 'change_by': 'no label', 'bemerkung': 'no label', 'beschriftu': 'no label', 'Type': 'no label', });
lyr_Punkt_8.set('fieldLabels', {'ObjectID': 'no label', 'FROX_ID': 'no label', 'fm_session': 'no label', 'lebensstat': 'no label', 'ANGLE': 'no label', 'hoehe': 'no label', 'sachse_cod': 'no label', 'capture_at': 'no label', 'capture_by': 'no label', 'change_at': 'no label', 'change_by': 'no label', 'bemerkung': 'no label', 'beschriftu': 'no label', });
lyr_Station_9.set('fieldLabels', {'ObjectID': 'no label', 'FROX_ID': 'no label', 'fm_session': 'no label', 'lebensstat': 'no label', 'ANGLE': 'no label', 'capture_at': 'no label', 'capture_by': 'no label', 'change_at': 'no label', 'change_by': 'no label', 'bemerkung': 'no label', 'beschriftu': 'no label', });
lyr_Straenrand_10.set('fieldLabels', {'ObjectID': 'no label', 'FROX_ID': 'no label', 'fm_session': 'no label', 'lebensstat': 'no label', 'sachse_cod': 'no label', 'strassenna': 'no label', 'capture_at': 'no label', 'capture_by': 'no label', 'change_at': 'no label', 'change_by': 'no label', 'bemerkung': 'no label', 'beschriftu': 'no label', 'SHAPE_Leng': 'no label', 'rand': 'no label', });
lyr_Sttzmauer_11.set('fieldLabels', {'ObjectID': 'no label', 'FROX_ID': 'no label', 'fm_session': 'no label', 'lebensstat': 'no label', 'hoehe': 'no label', 'stuetzhoeh': 'no label', 'ueberdeckt': 'no label', 'sachse_cod': 'no label', 'capture_at': 'no label', 'capture_by': 'no label', 'change_at': 'no label', 'change_by': 'no label', 'bemerkung': 'no label', 'beschriftu': 'no label', 'SHAPE_Leng': 'no label', 'breite': 'no label', 'sig_richtu': 'no label', });
lyr_TextDGIS_12.set('fieldLabels', {'ObjectID': 'no label', 'FROX_ID': 'no label', 'fm_session': 'no label', 'lebensstat': 'no label', 'ANGLE': 'no label', 'textzusatz': 'no label', 'sachse_cod': 'no label', 'capture_at': 'no label', 'capture_by': 'no label', 'change_at': 'no label', 'change_by': 'no label', 'bemerkung': 'no label', 'beschriftu': 'no label', });
lyr_TopoSchieberGas_13.set('fieldLabels', {'ObjectID': 'no label', 'FROX_ID': 'no label', 'fm_session': 'no label', 'lebensstat': 'no label', 'ANGLE': 'no label', 'sachse_cod': 'no label', 'capture_at': 'no label', 'capture_by': 'no label', 'change_at': 'no label', 'change_by': 'no label', 'bemerkung': 'no label', 'beschriftu': 'no label', });
lyr_UST_14.set('fieldLabels', {'ObjectID': 'no label', 'FROX_ID': 'no label', 'fm_session': 'no label', 'lebensstat': 'no label', 'sachse_cod': 'no label', 'capture_at': 'no label', 'capture_by': 'no label', 'change_at': 'no label', 'change_by': 'no label', 'bemerkung': 'no label', 'beschriftu': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Wegbegrenzung_15.set('fieldLabels', {'ObjectID': 'no label', 'FROX_ID': 'no label', 'fm_session': 'no label', 'lebensstat': 'no label', 'sachse_cod': 'no label', 'strassenna': 'no label', 'capture_at': 'no label', 'capture_by': 'no label', 'change_at': 'no label', 'change_by': 'no label', 'bemerkung': 'no label', 'beschriftu': 'no label', 'SHAPE_Leng': 'no label', 'rand': 'no label', });
lyr_Wirtschaftsgebudelinie_16.set('fieldLabels', {'ObjectID': 'no label', 'FROX_ID': 'no label', 'fm_session': 'no label', 'lebensstat': 'no label', 'hausnr': 'no label', 'sachse_cod': 'no label', 'capture_at': 'no label', 'capture_by': 'no label', 'change_at': 'no label', 'change_by': 'no label', 'bemerkung': 'no label', 'beschriftu': 'no label', 'SHAPE_Leng': 'no label', 'art': 'no label', });
lyr_Wohngebudelinie_17.set('fieldLabels', {'ObjectID': 'no label', 'FROX_ID': 'no label', 'fm_session': 'no label', 'lebensstat': 'no label', 'hausnr': 'no label', 'sachse_cod': 'no label', 'capture_at': 'no label', 'capture_by': 'no label', 'change_at': 'no label', 'change_by': 'no label', 'bemerkung': 'no label', 'beschriftu': 'no label', 'SHAPE_Leng': 'no label', 'art': 'no label', });
lyr_Zaun_18.set('fieldLabels', {'ObjectID': 'no label', 'FROX_ID': 'no label', 'fm_session': 'no label', 'lebensstat': 'no label', 'sachse_cod': 'no label', 'capture_at': 'no label', 'capture_by': 'no label', 'change_at': 'no label', 'change_by': 'no label', 'bemerkung': 'no label', 'beschriftu': 'no label', 'SHAPE_Leng': 'no label', 'sig_lage': 'no label', 'art': 'no label', });
lyr_Bschungsoberkante_19.set('fieldLabels', {'ObjectID': 'no label', 'FROX_ID': 'no label', 'fm_session': 'no label', 'lebensstat': 'no label', 'gueltig': 'no label', 'sachse_cod': 'no label', 'capture_at': 'no label', 'capture_by': 'no label', 'change_at': 'no label', 'change_by': 'no label', 'bemerkung': 'no label', 'beschriftu': 'no label', 'SHAPE_Leng': 'no label', 'sig_lage': 'no label', });
lyr_Bschungsunterkante_20.set('fieldLabels', {'ObjectID': 'no label', 'FROX_ID': 'no label', 'fm_session': 'no label', 'lebensstat': 'no label', 'gueltig': 'no label', 'sachse_cod': 'no label', 'capture_at': 'no label', 'capture_by': 'no label', 'change_at': 'no label', 'change_by': 'no label', 'bemerkung': 'no label', 'beschriftu': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Brcke_21.set('fieldLabels', {'ObjectID': 'no label', 'FROX_ID': 'no label', 'fm_session': 'no label', 'lebensstat': 'no label', 'sachse_cod': 'no label', 'capture_at': 'no label', 'capture_by': 'no label', 'change_at': 'no label', 'change_by': 'no label', 'bemerkung': 'no label', 'beschriftu': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Dokument_22.set('fieldLabels', {'ObjectID': 'no label', 'FROX_ID': 'no label', 'fm_session': 'no label', 'lebensstat': 'no label', 'ANGLE': 'no label', 'label': 'no label', 'original': 'no label', 'fotoname': 'no label', 'datetime': 'no label', 'ankertime': 'no label', 'aufnahmeda': 'no label', 'capture_at': 'no label', 'capture_by': 'no label', 'change_at': 'no label', 'change_by': 'no label', 'bemerkung': 'no label', 'beschriftu': 'no label', 'doc_type': 'no label', 'descriptio': 'no label', });
lyr_DurchlassPunkt_23.set('fieldLabels', {'ObjectID': 'no label', 'FROX_ID': 'no label', 'fm_session': 'no label', 'lebensstat': 'no label', 'ANGLE': 'no label', 'textzusatz': 'no label', 'sachse_cod': 'no label', 'capture_at': 'no label', 'capture_by': 'no label', 'change_at': 'no label', 'change_by': 'no label', 'bemerkung': 'no label', 'beschriftu': 'no label', });
lyr_Flchenumringallgemein_24.set('fieldLabels', {'ObjectID': 'no label', 'FROX_ID': 'no label', 'fm_session': 'no label', 'lebensstat': 'no label', 'sachse_cod': 'no label', 'capture_at': 'no label', 'capture_by': 'no label', 'change_at': 'no label', 'change_by': 'no label', 'bemerkung': 'no label', 'beschriftu': 'no label', 'SHAPE_Leng': 'no label', 'art': 'no label', });
lyr_FMKabelschacht_25.set('fieldLabels', {'ObjectID': 'no label', 'FROX_ID': 'no label', 'fm_session': 'no label', 'lebensstat': 'no label', 'ANGLE': 'no label', 'typ': 'no label', 'sachse_cod': 'no label', 'capture_at': 'no label', 'capture_by': 'no label', 'change_at': 'no label', 'change_by': 'no label', 'bemerkung': 'no label', 'beschriftu': 'no label', });
lyr_FMRohrstrecke_26.set('fieldLabels', {'ObjectID': 'no label', 'FROX_ID': 'no label', 'fm_session': 'no label', 'lebensstat': 'no label', 'zug_anz': 'no label', 'sachse_cod': 'no label', 'capture_at': 'no label', 'capture_by': 'no label', 'change_at': 'no label', 'change_by': 'no label', 'bemerkung': 'no label', 'beschriftu': 'no label', 'SHAPE_Leng': 'no label', 'querschnit': 'no label', });
lyr_FMSchutzrohr_27.set('fieldLabels', {'ObjectID': 'no label', 'FROX_ID': 'no label', 'fm_session': 'no label', 'lebensstat': 'no label', 'sachse_cod': 'no label', 'capture_at': 'no label', 'capture_by': 'no label', 'change_at': 'no label', 'change_by': 'no label', 'bemerkung': 'no label', 'beschriftu': 'no label', 'SHAPE_Leng': 'no label', 'nennweite': 'no label', 'material': 'no label', });
lyr_FMVerteiler_28.set('fieldLabels', {'ObjectID': 'no label', 'FROX_ID': 'no label', 'fm_session': 'no label', 'lebensstat': 'no label', 'ANGLE': 'no label', 'sachse_cod': 'no label', 'capture_at': 'no label', 'capture_by': 'no label', 'change_at': 'no label', 'change_by': 'no label', 'bemerkung': 'no label', 'beschriftu': 'no label', });
lyr_FMMicrorohrRohrverbund_29.set('fieldLabels', {'ObjectID': 'no label', 'FROX_ID': 'no label', 'fm_session': 'no label', 'lebensstat': 'no label', 'baujahr': 'no label', 'sachse_cod': 'no label', 'capture_at': 'no label', 'capture_by': 'no label', 'change_at': 'no label', 'change_by': 'no label', 'bemerkung': 'no label', 'beschriftu': 'no label', 'SHAPE_Leng': 'no label', 'dimension': 'no label', });
lyr_FMMuffe_30.set('fieldLabels', {'ObjectID': 'no label', 'FROX_ID': 'no label', 'fm_session': 'no label', 'lebensstat': 'no label', 'ANGLE': 'no label', 'geortet': 'no label', 'lageun': 'no label', 'montagedat': 'no label', 'typ': 'no label', 'sachse_cod': 'no label', 'höhe': 'no label', 'capture_at': 'no label', 'capture_by': 'no label', 'change_at': 'no label', 'change_by': 'no label', 'bemerkung': 'no label', 'beschriftu': 'no label', 'art': 'no label', 'status': 'no label', });
lyr_FMTrasse_31.set('fieldLabels', {'ObjectID': 'no label', 'FROX_ID': 'no label', 'fm_session': 'no label', 'lebensstat': 'no label', 'sachse_cod': 'no label', 'MV': 'no label', 'zusatz': 'no label', 'capture_at': 'no label', 'capture_by': 'no label', 'change_at': 'no label', 'change_by': 'no label', 'bemerkung': 'no label', 'beschriftu': 'no label', 'SHAPE_Leng': 'no label', });
lyr_FMTrasse_31.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});