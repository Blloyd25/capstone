import { Component} from "react";
import {Map, GoogleApiWrapper} from '@react-google-maps/api'

class MapContainer extends Component {
    render() {
        return(
            <Map
            google = {this.props.google}
            style = {{width:"50%", Height:"50%"}}
            zoom = {5}
            initialCenter = {
              {
                lat: 28.34503, 
                lng: -81.34807
                
              }
            }
            
            />

        );
    }
}

export default GoogleApiWrapper({
    apiKey :"AIzaSyCgmStVF0_d8CN9LOI9eMSGaVLEOrFcBV8"
})(MapContainer)




















// google map api key = AIzaSyCgmStVF0_d8CN9LOI9eMSGaVLEOrFcBV8
// google map directions api = AIzaSyB30c6Q2-MHatZoJNzVAW9lTg-uD4cD8vo
// google map geolocation api =AIzaSyCv0KJMM-Tw84hmlRCMYpPygtz01vSIX8o
