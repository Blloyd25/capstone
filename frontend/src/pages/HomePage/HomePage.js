import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import './HomePage.css'
const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCars(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCars();
  }, [token]);
  return (
    <div className="homepage-wrapper">
      <h1>Welcome Back {user.username}!</h1>
      <div className="payment-box-wrapper">
        {/* appear to the left */}
        <div className="payment-box">
        </div>
        <div className="payment-box-container">
        </div>
        <div className="payment-box">
        </div>
      </div>
      <h1>google maps here!</h1>
      <div className="map-container">
        <div className="map">
        </div>
      </div>
    </div>
  );
};

export default HomePage;
