import React, { useState, useEffect } from "react";
import axios from "axios";

import AddTweets from "./AddTweets";

const Dashboard = () => {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    getTweets();
  }, []);

  const getTweets = async () => {
    try {
      const res = await axios.get("http://192.168.1.7:3006/api/tweets", {
        headers: {
          token: localStorage.token,
        },
      });
      setTweets(res.data.tweets);
      console.log(res.data.tweets);
    } catch (error) {
      //   console.log(error.response.data);

      console.log(error);
    }
  };

  return (
    <>
      <AddTweets />
      {tweets.map(({ tweet }) => {
        <p>{tweet}</p>;
      })}
    </>
  );
};

export default Dashboard;
