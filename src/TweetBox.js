import React, { useState } from "react";
import "./TweetBox.css";
import { Button, IconButton, Input, Text } from "@chakra-ui/react";

import axios from "axios";

function TweetBox({ loggedInUser }) {
  // const [text, setText] = useState('');
  const [tweetText, setTweetText] = useState("");
  const handleTweetSubmit = () => {
    const newTweet = {
      tweet: tweetText,
      username: loggedInUser,
      // timestamp: new Date().toLocaleString(),
    };
    axios.post("http://localhost:8080/twitter/tweet", newTweet).then((response) => {});

    setTweetText("");
  };

  const username = localStorage.getItem("loggedInUser");

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Text
            px={"5px"}
            borderRadius={"5px"}
            bg={"#D3D3D3"}
            pt={"7px"}
            fontWeight={600}
          >
            {username}
          </Text>
          <Input
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
