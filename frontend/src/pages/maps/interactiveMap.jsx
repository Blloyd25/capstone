import React, { useState, useEffect } from 'react'
import { GoogleMap, useLoadScript, InfoWindow, Marker } from '@react-google-maps/api';
import { Wrapper, Status } from "@googlemaps/react-wrapper";


const mapContainerStyle = {
  width: '35rem',
  height: '20rem'
};




function InteractiveMap(props) {

  

    let center = {
        lat: 28.344662314423104, 
        lng: -81.34821976681631
    };

    
    
    
    const options = {
        disableDefaultUI: true,
        zoomControl: true
    }

   

    

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY
        
    })

    if (loadError) return 'Error loading'
    if (!isLoaded) return 'Loading'

    
    return (
        <div>
            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={14} center={center} options={options}>
                {/* {props.listedUsers.map(listedUser => { */}
                    return(
                        <>
                            <Marker position={{lat: parseFloat(props.worker.lat), lng: parseFloat(props.worker.lng)}}/>
                            {props.jobs?.map((job)=>(
                              <React.Fragment key={job.id}>
                              <Marker position={{lat: parseFloat(job.lat), lng: parseFloat(job.lng)}}/>
                              </React.Fragment> 
                            ))}
                                
                            
                        </>
                    ) 
                

                {/* {selected ? (
                    // <InfoWindow position={{lat: parseFloat(props.listedUser.lat), lng: parseFloat(props.listedUser.lng)}} onCloseClick={event => setSelected(null)}>
                    //     <div>
                           
                    //     </div>
                    // </InfoWindow>
                ) : null} */}

            </GoogleMap>
            
        </div>
    )
}

export default InteractiveMap


// let map;

// function PlainMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

// export default PlainMap




// google map api key = AIzaSyCgmStVF0_d8CN9LOI9eMSGaVLEOrFcBV8
// google map directions api = AIzaSyB30c6Q2-MHatZoJNzVAW9lTg-uD4cD8vo
// google map geolocation api =AIzaSyCv0KJMM-Tw84hmlRCMYpPygtz01vSIX8o
