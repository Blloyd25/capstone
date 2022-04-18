import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import './HomePage.css'
import SearchBar from "../../components/searchBar/searchBar";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import PayPalApp from "../Payment/testpaypal";
import InteractiveMap from '../maps/interactiveMap'
import EmployeePage from "./EmployeePage"
import { Navigate } from "react-router-dom";


const CustomerPage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [customer, setcustomer] = useState();
  const [jobs, setJobs] = useState([]);
  const [balance, setBalance] = useState(0);
  const [createNewJob, setCreateNewJob] = useState({
    jobDescription:"",
    street:"",
    city:"",
    state:"",
    zipCode:""
  });

  useEffect(() => {
    const fetchcustomer = async () => {
      let custome;
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/helping_hands/customer/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
          custome = response.data.filter(person=> {
            if (person.User===user.id){
              return person
            }
          });
          setcustomer(custome[0]) 
          let jobResponse = await axios.get("http://127.0.0.1:8000/api/helping_hands/jobs/", {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          
          let customerJobs=jobResponse.data.filter(e=>e.customer==custome[0].id)
          console.log(customerJobs)
          setJobs(customerJobs);

          let sum=0;
          for (let i=0;i<customerJobs.length;i++){
            if (customerJobs[i].status==="Complete"){
              sum +=customerJobs[i].final_ammount
            }
          } 
          setBalance(sum)           
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchcustomer();
  }, []);
  
  async function SubmitJob(){  
    let job={
      customer:customer.id,
      job_description:createNewJob.jobDescription,
      street:createNewJob.street,
      city:createNewJob.city,
      state:createNewJob.state,
      zip_code:createNewJob.zipCode,
      status:"Open",
      final_ammount:"0",
      lat:"",
      lng:""
    };
    console.log(job)
    let addressf=job.street.replace(/ /g, '%20')+'%20'+job.city+'%20'+job.state;
    console.log(addressf);
    let latlngresponse=await axios.get('https://maps.googleapis.com/maps/api/geocode/json?address='+addressf+'&key=AIzaSyCu_jw6e33LLrNnXPMIZh9_vT907qZyvTk');
    console.log(latlngresponse.data);
    job.lat = latlngresponse.data.results[0].geometry.location.lat;
    job.lng = latlngresponse.data.results[0].geometry.location.lng;

    console.log(job);
    let response = await axios.post(`http://127.0.0.1:8000/api/helping_hands/jobs/`,job,{
      headers: {
        Authorization: "Bearer " + token,
      }
    });
              
  }
  


  function handleChange(e){
    setCreateNewJob({ ...createNewJob, [e.target.name]: e.target.value });
  }
 
  
  return (
    <div className="homepage-wrapper">
      <h1 className="greeting">Welcome Back {user.username}!</h1>
      <div className="payment-box-wrapper">
        {/* appear to the left */}
        <div className="payment-box">
          {/* <form onSubmit={SubmitJob}> */}
            <label>
              Job Desctription : 
            </label>
              <input type="text" value={createNewJob.jobDescription} onChange={handleChange} name="jobDescription" />
            <label>
              Street : 
            </label>
              <input type="text" value={createNewJob.street} onChange={handleChange} name="street" />
            <label>
              City : 
            </label>
              <input type="text" value={createNewJob.city} onChange={handleChange} name="city" />
            <label>
              State : 
            </label>
              <input type="text" value={createNewJob.state} onChange={handleChange} name="state" />
            <label>
              Zip Code : 
            </label>
              <input type="text" value={createNewJob.zipCode} onChange={handleChange} name="zipCode" />
            <button className="search" onClick={SubmitJob} >Submit</button>
          {/* </form> */}
        </div>
        <div className="payment-box-container joblist">
            <table>
              <thead>
                <tr>
                <th>job description</th>
                <th>street</th>
                <th>city</th>
                <th>status</th>
                <th>accepted by</th>
                <th>price</th>
                <th>Accept job</th>
                </tr>
              </thead>
              <tbody>
          {jobs?.map((job)=>(
              <tr>
                              <React.Fragment key={job.id}>
                              <td >{job.job_description}</td>
                              <td >{job.street}</td>
                              <td >{job.city}</td>
                              <td>{job.status}</td>
                              <td>{(job.status!=="Open")&&"Tom Hanks"}</td>
                              <td>{job.final_ammount}</td>
                              <td>{<button className="acceptjob" >Accept</button>}</td>
                              </React.Fragment>
              </tr>
                          ))}
              </tbody>
            </table>
        </div>
        <div className="payment-box">
          <div>$ {balance}</div>
         <PayPalApp/>
        </div>
      </div>
      <h1></h1>
      <div className="map-container">
        
        <div className="map">
          
          
        </div>
      </div>
    </div>
  );
};

export default CustomerPage;
