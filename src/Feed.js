import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import { Box } from "@chakra-ui/react";
import Timeline from "./Tweets";
import axios from "axios";

function Feed() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/twitter/tweet")
      .then((response) => {
        console.log(response.data);
        setTweets(response.data?.data);
      })
      .catch((error) => {
        console.error("Error fetching tweets:", error);
      });
  }, []);

  const handleTweet = (tweet) => {
    axios
      .post("http://localhost:8080/twitter/tweet", { tweet })
      .then((response) => {
        setTweets([response.data, ...tweets]);
      })
      .catch((error) => {
        console.error("Error posting tweet:", error);
      });
  };

  const loggedInUser = localStorage.getItem("loggedInUser");

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox loggedInUser={loggedInUser} />
      <Timeline tweets={tweets} />
    </div>
  );
}

export default Feed;
