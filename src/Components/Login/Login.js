import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [file, setfile] = useState("Plz Choose pdf file");

  const handlesubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());
    console.log(value);
  };

  return (
    <>
      <div className="container">
        <div className="inp-form">
          <div className="reg">Login</div>
          <form onSubmit={handlesubmit}>
            <div className="frm-group">
              <lable>Email</lable>
              <input type="text" name="email"></input>
            </div>
            <div className="inpfile">
              <input
                type="file"
                name="file"
                onChange={(e) => {
                  setfile(e.target.files[0].name);
                }}
              ></input>
              <lable>{file}</lable>
            </div>

            <button className="sub">submit</button>
          </form>
          <div className="foot">
            Don't have an account? <Link to="/register">Click here!</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
