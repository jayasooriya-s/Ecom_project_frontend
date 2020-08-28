import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";

export default function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, sucess } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const signUpForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-goup">
              <label className="text-left">Name</label>
              <input
                className="form-control"
                value={name}
                onChange={handleChange("name")}
                type="text"
              ></input>
            </div>
            <div className="form-goup">
              <label className="text-left">Email</label>
              <input
                className="form-control"
                value={email}
                onChange={handleChange("email")}
                type="text"
              ></input>
              <div className="form-goup">
                <label className="text-left">Password</label>
                <input
                  className="form-control"
                  value={password}
                  onChange={handleChange("password")}
                  type="password"
                ></input>
                <div>
                  <button className="btn btn-success btn-block">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <Base title="SignUp page" description="A signup for Holycart user">
      {signUpForm()}
      <p>Test signup page </p>
    </Base>
  );
}
