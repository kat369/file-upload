import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  useEffect(()=>{
    if (localStorage.getItem('app-token') == undefined){
        navigate("/");
      } else {
       
      }
  })

  
  const [info, setinfo] = useState({
    "username" : window.localStorage.getItem("username"),
    "email" : window.localStorage.getItem("email"),
    "mobile" : window.localStorage.getItem("mobile"),
    "city" : window.localStorage.getItem("city"),
    "state" : window.localStorage.getItem("state"),
    "nationality" : window.localStorage.getItem("nationality"),
  });

  const handlelogout = () => {
    if (window.confirm("Do you want to logout?") == true) {
      window.localStorage.clear();
      
      navigate("/");
      
    } else {
    }
  };

  return (
    <>
      <div className="nav">
        <div className="nav-l">Home</div>
        <div className="nav-r">
          <img
            className="pic"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9tjaExsY-srL4VsHNE_OKGVCJ-eIFNBktw&usqp=CAU"
          ></img>
          <div className="uname">{info.username}</div>
          <button onClick={handlelogout} className="but">
            Logout
          </button>
        </div>
      </div>

      <div className="container">
        <div className="cardx">
          <div className="card-left">
            <img
              className="picx"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9tjaExsY-srL4VsHNE_OKGVCJ-eIFNBktw&usqp=CAU"
            ></img>
            <div className="uname">{info.username}</div>
          </div>
          <div className="right">
            <div className="info">Information</div>
            <div>
              <div>Email : {info.email}</div>
              <div>Phone : {info.mobile}</div>
              <div>City : {info.city}</div>
              <div>State : {info.state}</div>
              <div>Nationality : {info.nationality}</div>
            </div>
            <button className="but infobut">Edit Info</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
