import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import './HomePage.css'
import InteractiveMap from '../maps/interactiveMap'

const EmployeePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [worker, setworker] = useState();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchemployee = async () => {
      let employe;
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/helping_hands/employee/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
          employe = response.data.filter(person=> {
          if (person.user===user.id){
            
            console.log(person)
            return person
          }});
          
          fetchworker(employe)
          let jobResponse = await axios.get("http://127.0.0.1:8000/api/helping_hands/jobs/", {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          setJobs(jobResponse.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchemployee();
  }, [token]);

  
  const fetchworker = async (employe) => {
    
    try {
      
        let response = await axios.get(`http://127.0.0.1:8000/api/helping_hands/employee/${employe[0].id}`,{
          headers: {
            Authorization: "Bearer " + token,
          }
      })      
    
        setworker(response.data)
    }
        catch (error) {
        console.log(error);
        }}
       

  return (
    <div className="homepage-wrapper">
      <h1 className="greeting">Welcome Back {user.username}!</h1>
      <div className="payment-box-wrapper">
        {/* appear to the left */}
        
        <div className="payment-box">
          <button className="Editjob">Edit Job</button>
          <button className="Reviews">Reviews</button>
        </div>
        <div className="payment-box-container">
          {/* <button joblist={SearchJobs}/> */}
          <div className="joblist">
            <table>
              <tr>
                <th>job description</th>
                <th>street</th>
                <th>city</th>
                <th>Accept job</th>
              </tr>
          {jobs?.map((job)=>(
              <tr>
                              <React.Fragment key={job.id}>
                              <td >{job.job_description}</td>
                              <td >{job.street}</td>
                              <td >{job.city}</td>
                              <td>{<button className="acceptjob" >Accept</button>}</td>
                              </React.Fragment>
              </tr>
                            ))}
            </table>
            
          </div> 
        </div>
        <div className="payment-box">
          <button className="cashout">Cash out</button>
          <h1 className="balance">Your current balance is
            $10.00 </h1>
        </div>
      </div>
      <div className="map-container">
        <div className="map">
          {worker && jobs.length>0 && <InteractiveMap worker={worker} jobs={jobs}/>}
          
        </div>
      </div>
    </div>
  );
};

export default EmployeePage;
