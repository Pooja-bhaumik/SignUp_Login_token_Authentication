import axios from "axios";
import React, { useState } from "react";

const AddTweets = () => {
  const [text, setText] = useState("");
  const handleText = (e) => {
    setText(e.target.value);
  };
  const addTweeet = async () => {
    try {
      const res = await axios.post(
        "http://192.168.1.7:3006/api/tweets",
        { tweet: text },
        {
          headers: {
            token: localStorage.token,
          },
        }
      );
      //   console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="col-6 mx-auto">
        <h4 className="text-center">Add tweets</h4>
        <textarea
          class="form-control "
          rows="3"
          onChange={handleText}
          name="text"
        ></textarea>
        <br />
        <button
          className="btn btn-warning btn-block text-white"
          onClick={addTweeet}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default AddTweets;
