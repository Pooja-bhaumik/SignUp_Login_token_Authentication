import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const login = async () => {
    // const { email, password } = user;
    // const item = { email, password };
    // console.warn(item);
    try {
      const res = await axios.post(
        "http://192.168.1.7:3006/api/auth/login",
        user,
        {
          header: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="col-6 offset-3">
        <h2 className="text-center">User Login</h2>
        <input
          type="text"
          className="form-control"
          onChange={(e) => handleInputs(e)}
          value={user.email}
          name="email"
        />
        <br />
        <input
          type="text"
          className="form-control"
          onChange={(e) => handleInputs(e)}
          value={user.password}
          name="password"
        />
        <br />
        <button className="btn btn-danger btn-block" onClick={login}>
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
