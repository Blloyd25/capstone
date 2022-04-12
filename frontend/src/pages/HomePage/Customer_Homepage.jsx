import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import GoogleApiWrapper from "./directions"
import getDirections from 'react-native-google-maps-directions'

const API_endpoint = `https://api.openweathermap.org/data/2.5/onecall`;
const API_key =`AIzaSyCv0KJMM-Tw84hmlRCMYpPygtz01vSIX8o`;


const CustomerHomepage = () => {
    const [user, token] = useAuth();
    const [helpinghands, setHelpingHands] = useState([]);
  
    useEffect(() => {
    }
    

)}
const[map,setMap]= useState((null))
const [directionsResponse, setDirectionsResponse] = useState(null)
const [distance, setDistance] = useState('')
const [duration, setDuration] = useState('')

function Location(){
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.cords.latitude);
            setLongitude(position.cords.longitude)
        })
    })
}
export default CustomerHomepage
