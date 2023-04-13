
import React, { useEffect } from 'react';
import DG from '2gis-maps'

export const Map = () => {

  useEffect(() => {
   let container = document.getElementById('container-map');
   if (!container.hasChildNodes()) {
   let map = DG.map('container-map', {
        center: [55.748 ,37.5873 ],
        zoom: 13
    })
    DG.marker([55.749064, 37.587373 ]).addTo(map);
 }
}, []) 
 
    return (
      
       <div id='container-map' style={{ width: '100%', height: '400px' }}></div>
   
    );
};

export default Map;


