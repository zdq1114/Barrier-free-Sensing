function AddPoint(params) {
    if(params.lon === undefined || params.lat === undefined){
        alert('请提供经纬度!');
        return;
    }
    let entity = new Cesium.Entity({
        id: params.id || `${params.lon}点`,
        name:params.name || '点',
        show:true,
        position:Cesium.Cartesian3.fromDegrees(params.lon, params.lat),
        point:new Cesium.PointGraphics ( {
            show : true,
            pixelSize : params.pixelSize || 20,
            heightReference : params.pixelSize || Cesium.HeightReference.NONE,
            color : params.color || new Cesium.Color ( 255 , 255 , 0 , 1 ),
            outlineColor : params.color || new Cesium.Color ( 0 , 0 , 0 , 0 ),
            outlineWidth : params.outlineWidth || 0,
            scaleByDistance : params.scaleByDistance || new Cesium.NearFarScalar ( 0 , 1 , 5e10 , 1 ),
            translucencyByDistance : params.translucencyByDistance || new Cesium.NearFarScalar ( 0 , 1 , 5e10 , 1 ),
            distanceDisplayCondition : params.translucencyByDistance || new Cesium.DistanceDisplayCondition(0, 4.8e10),
        } )
    });
    viewer.entities.add(entity);
    return entity;
}

function AddVideo(lonmin,latmin,lonmax,latmax,videoElm){
    viewer.entities.add(
        {
            rectangle: {
                coordinates:  Cesium.Rectangle.fromDegrees(lonmin,latmin,lonmax,latmax),
                material: videoElm, 
                outline:true,
                outlineColor:Cesium.Color.BLACK
            }
        }
    );
}