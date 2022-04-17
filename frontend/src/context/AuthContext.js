import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";

const AuthContext = createContext();

export default AuthContext;

function setUserObject(user) {
  if (!user) {
    return null;
  }
  return {
    username: user.username,
    id: user.user_id,
    first_name: user.first_name,
  };
}

export const AuthProvider = ({ children }) => {
  const BASE_URL = "http://127.0.0.1:8000/api/auth";
  const userToken = JSON.parse(localStorage.getItem("token"));
  const decodedUser = userToken ? jwtDecode(userToken) : null;
  const [token, setToken] = useState(userToken);
  const [user, setUser] = useState(setUserObject(decodedUser));
  const [isServerError, setIsServerError] = useState(false);
  const navigate = useNavigate();

  const registerUser = async (registerData) => {
    try {
      let finalData = {
        username: registerData.username,
        password: registerData.password,
        email: registerData.email,
        first_name: registerData.firstName,
        last_name: registerData.lastName
      };
      let customerData = {
        User:"",
        payment:"defaultpayment",
        address:registerData.address
      };
      let employeeData = {
        user:"",
        location:registerData.address,
        ratings:"3",
        payment:"defaultpayment",
        lat:"",
        lng:"",
      };
      let response = await axios.post(`${BASE_URL}/register/`, finalData);
      if (response.status === 201) {
        console.log("Successful registration! Log in to access token");
        let loginResponse = await axios.post(`${BASE_URL}/login/`, {username:finalData.username, password: finalData.password});
        localStorage.setItem("token", JSON.stringify(loginResponse.data.access));
        setToken(JSON.parse(localStorage.getItem("token")));
        let loggedInUser = jwtDecode(loginResponse.data.access);
        setUser(setUserObject(loggedInUser));
       
  
        if (registerData.is_customer==="true"){
          customerData.User=response.data.id;
          
          let customerResponse = await axios.post("http://127.0.0.1:8000/api/helping_hands/customer/",customerData, {
                headers: {
                    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem("token"))
                }
            });
          setIsServerError(false);
          navigate("/customer");
        }
        else{
          employeeData.user=response.data.id;
          let addressf=employeeData.location.replace(/ /g, '%20')
          console.log(addressf)
          axios.get('https://maps.googleapis.com/maps/api/geocode/json?address='+addressf+'&key=AIzaSyCu_jw6e33LLrNnXPMIZh9_vT907qZyvTk' ).then(async latlngresponse =>{
          employeeData.lat = latlngresponse.data.results[0].geometry.location.lat;
          console.log(latlngresponse.data);
          employeeData.lng = latlngresponse.data.results[0].geometry.location.lng;

          let employeeResponse = await axios.post("http://127.0.0.1:8000/api/helping_hands/employee/",employeeData, {
                headers: {
                    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem("token"))
                }
            });
          setIsServerError(false);
          navigate("/employee");
          });
        }
          } else {
        navigate("/register");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async (loginData) => {
    try {
      let response = await axios.post(`${BASE_URL}/login/`, loginData);
      if (response.status === 200) {
        localStorage.setItem("token", JSON.stringify(response.data.access));
        setToken(JSON.parse(localStorage.getItem("token")));
        let loggedInUser = jwtDecode(response.data.access);
        setUser(setUserObject(loggedInUser));
        let uid=loggedInUser.user_id;
        let customerResponse= await axios.get("http://127.0.0.1:8000/api/helping_hands/customer/",
        {
          headers:{Authorization: "Bearer " + JSON.parse(localStorage.getItem("token"))},
        });
        let customer=customerResponse.data.filter(e => e.User==uid)
        if(customer.length!==0){
          setIsServerError(false);
          navigate("/customer");
        }
        else{
          setIsServerError(false);
          navigate("/employee");
        }
      } else {
        navigate("/register");
      }
    } catch (error) {
      console.log(error.toJSON());
      setIsServerError(true);
      navigate("/register");
    }
  };

  const logoutUser = () => {
    if (user) {
      localStorage.removeItem("token");
      setUser(null);
      setToken(null);
      navigate("/");
    }
  };

  const contextData = {
    user,
    token,
    loginUser,
    logoutUser,
    registerUser,
    isServerError,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
