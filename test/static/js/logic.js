d3.json('data_resource/Volcano.json').then(function(data){
    console.log(data['0']);
   
    var myMap=L.map("map", {
        center: [0, 45],
        zoom: 2,
    })
    var streetMap=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    streetMap.addTo(myMap);
    
    for (let i=0; i<1328; i++){
        console.log(i)
        let lon=data[`${i}`]["Longitude"];
        console.log(lon);
        //console.log();
        let lat=data[`${i}`]["Latitude"];
        console.log(lat);
        
        L.marker([lon,lat]).addTo(myMap);
    };
});