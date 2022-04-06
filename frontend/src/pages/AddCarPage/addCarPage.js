import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import usecustomform from "../../hooks/useCustomForm";

let initialValues = {
    make: "",
    model: "",
    year: "",

};

const AddCarPage = () => {
    const [user,token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = usecustomform(initialValues)

    async function postNewCar(){
        try{
            let response = await axios.post("http://127.0.0.1:8000/api/cars/",formData, {
                headers: {
                    authorization: 'Bearer' + token
                }
            })
            navigate("/")
        }catch (error) {
            console.log(error.message)
        
        }
    }


    return (
        <div className="container">
            <form className="form" onSubmit={{handleSubmit}}>
                <label>
                Make:{" "}
                <input
                    type="text"
                    name="make"
                    value={formData.make}
                    onChange={handleInputChange}
                />
                </label>
                <label>
                    Model:{" "}
                    <input
                    type="text"
                    name="model"
                    value={formData.model}
                    onChange={handleInputChange}
                    />
                </label>
                <button>Add Car!</button>
            </form>
        </div>
    );
}

    export default AddCarPage