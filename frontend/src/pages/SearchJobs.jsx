import React, {useState, useEffect} from "react";
import axios from "axios";

const SearchJobs = (props) => {
    const [displayJobs, setDisplayJobs] =useState([]);

useEffect(() => {
    get_all_jobs();
},[])


    useEffect(() => {
        console.log(displayJobs)
    },[displayJobs]
    )

    async function get_all_jobs(){
        let response = await axios.get("http://127.0.0.1:8000/api/helping_hands/jobs");
        displayJobs(response.data)
        setDisplayJobs(response.data);
    }
    

        return(
            <div>
                <SearchJobs jobs={displayJobs}/>
            </div>
        );
        };
    export default SearchJobs