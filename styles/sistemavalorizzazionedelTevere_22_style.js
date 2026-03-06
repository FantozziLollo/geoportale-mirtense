var size = 0;
var placement = 'point';

    var fill_sistemavalorizzazionedelTevere_22 = new ol.style.Fill();
var style_sistemavalorizzazionedelTevere_22 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    var style = [ new ol.style.Style({
        
        fill: fill_sistemavalorizzazionedelTevere_22,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};

    fill_sistemavalorizzazionedelTevere_22.setColor(stripe(0.5, 2.0, 351.5, '#1f78b4'));