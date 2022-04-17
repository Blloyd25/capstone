import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const Reviews = (props) => {
const [reviews, setReviews = useState([]);
const [ratings, setRatings] = useState('employee');

    useEffect(() =>{
        const fetchReviews = async () => {
            try {
                let response = await axios.get("http://127.0.0.1:8000/api/helping_hands/reviews")
                setReviews(response.data);
            }   
                catch (error) {
                console.log(error.message);
            
        };
        fetchReviews();
    }})  

    return (
        <div className="employeepage">
            <div>
                <div className="reviewratings">


                </div>

            </div>
        </div>
    )

export default Reviews