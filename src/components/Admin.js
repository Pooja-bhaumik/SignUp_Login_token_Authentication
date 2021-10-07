import React, { useState } from "react";
import axios from "axios";

const Admin = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
  });
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const signUp = async () => {
    // const { name, email, password, username } = user;
    // const item = { name, email, password, username };
    // console.warn(item);
    try {
      const res = await axios.post(
        "http://192.168.1.7:3006/api/auth/register",
        user,
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="col-6 offset-3">
        <h2 className="text-center">User Sign Up</h2>
        <input
          type="text"
          className="form-control"
          onChange={(e) => handleInputs(e)}
          value={user.username}
          name="username"
        />
        <br />
        <input
          type="text"
          className="form-control"
          onChange={(e) => handleInputs(e)}
          value={user.name}
          name="name"
        />
        <br />
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
        <button className="btn btn-danger btn-block" onClick={signUp}>
          Sign Up
        </button>
      </div>
    </>
  );
};

export default Admin;
