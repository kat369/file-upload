import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  let navigate = useNavigate();
  const [namefocus, setnamefocus] = useState(false);
  const [mailfocus, setmailfocus] = useState(false);
  const [passfocus, setpassfocus] = useState(false);
  const [cpassfocus, setcpassfocus] = useState(false);

  const [pass, setpass] = useState("");

  console.log(pass);
  const handlesubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    const value = Object.fromEntries(data.entries());
    console.log(value);

    try {
      let newdata = await axios.post(`http://localhost:4321/register`, value);

      if (newdata.status == 404) {
        alert(newdata.message);
      } else {
        alert("User registered!");
        navigate("/");
      }
    } catch (error) {
      alert("User already registered");
    }
  };

  return (
    <>
      <div className="container">
        <div className="inp-form">
          <div className="reg">Register</div>
          <form onSubmit={handlesubmit}>
            <div className="formate">
            <div className="frn-right">
              <div className="frm-group">
                <lable>User Name</lable>
                <input
                  type="text"
                  name="username"
                  onBlur={() => {
                    setnamefocus(true);
                  }}
                  focused={namefocus.toString()}
                  pattern="^[A-Za-z0-9]{3,16}$"
                  required
                ></input>
                <span>Username must contain atleast 3 characters</span>
              </div>
              <div className="frm-group">
                <lable>Email</lable>
                <input
                  type="text"
                  name="email"
                  onBlur={() => {
                    setmailfocus(true);
                  }}
                  focused={mailfocus.toString()}
                  required
                ></input>
                <span>Username must contain atleast 3 characters</span>
              </div>
              <div className="frm-group">
                <lable>password</lable>
                <input
                  type="text"
                  name="password"
                  onChange={(e) => {
                    setpass(e.target.value);
                  }}
                  onBlur={() => {
                    setpassfocus(true);
                  }}
                  pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{3,20}$"
                  focused={passfocus.toString()}
                  required
                ></input>
                <span>Username must contain atleast 3 characters</span>
              </div>
              <div className="frm-group">
                <lable>confirm password</lable>
                <input
                  type="text"
                  name="confirmpassword"
                  onBlur={() => {
                    setcpassfocus(true);
                  }}
                  pattern={pass}
                  focused={cpassfocus.toString()}
                  required
                ></input>
                <span>Username must contain atleast 3 characters</span>
              </div>
            </div>
            <div className="frn-right">
              <div className="frm-group">
                <lable>Mobile</lable>
                <input type="number" name="mobile" required></input>
                <span>Username must contain atleast 3 characters</span>
              </div>
              <div className="frm-group">
                <lable>city</lable>
                <input type="text" name="city" required></input>
                <span>Username must contain atleast 3 characters</span>
              </div>
              <div className="frm-group">
                <lable>State</lable>
                <input type="text" name="state" required></input>
              </div>
              <div className="frm-group">
                <lable>Nationality</lable>
                <input type="text" name="nationality" required></input>
              </div>
            </div>
            </div>
            <button className="sub">submit</button>
          </form>
          <div className="foot">
            Already have an account? <Link to="/">Click here!</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
