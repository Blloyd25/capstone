import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import GoogleApiWrapper from "./directions"

const EmployeeHomepage = () => {
    const [user, token] = useAuth();
    const [helpinghands, setHelpingHands] = useState([]);
  
    useEffect(() => {
      }
    
)}

export default EmployeeHomepage