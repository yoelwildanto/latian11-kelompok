import React, { useState } from "react";
import "./TweetBox.css";
import { Button, IconButton, Text } from "@chakra-ui/react";
import axios from "axios";

function TweetBox({loggedInUser}) {

  // const [text, setText] = useState('');
  const [tweetText, setTweetText] = useState("");
  const handleTweetSubmit = () => {
    const newTweet = {
      text: tweetText,
      username: loggedInUser,
      timestamp: new Date().toISOString(),
    };
    axios.post("http://localhost:3002/tweets", newTweet)
    .then((response) => {

    });

  setTweetText("");
  };
  

  const username = localStorage.getItem("loggedInUser");

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Text pt={"3px"} fontWeight={600}>{username}</Text>
          <input
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
            placeholder="What's happening?"
          />
        </div>
   
        <Button
          onClick={handleTweetSubmit}

          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
