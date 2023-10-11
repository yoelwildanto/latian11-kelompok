import React, { useState } from "react";
import "./TweetBox.css";
// import { Avatar, Button } from "@mui/material";
import { Button, IconButton } from "@chakra-ui/react";
// import db from "./firebase";
import axios from "axios";
// import foto from "./asset/logo_Robin.png"

function TweetBox({onTweet}) {
  // const [tweetMessage, setTweetMessage] = useState("");
  // const [tweetImage, setTweetImage] = useState("");

  const [text, setText] = useState('');
  const [tweets, setTweets] = useState([]);


  const handleTweet = () => {
    if (text) {
      onTweet(text);
      setText('');
    }
  };
  // const handleTweet = (text) => {
  //   axios.post('http://localhost:3002/tweets', { text }) 
  //     .then((response) => {
  //       setTweets([response.data, ...tweets]);
  //     })
  //     .catch((error) => {
  //       console.error('Error posting tweet:', error);
  //     });
  //   };


  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          {/* <Avatar src={foto}/> */}
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What's happening?"
            // type="text"
          />
        </div>
        {/* <input
          // value={tweetImage}

        //   onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        /> */}

        <Button
          onClick={handleTweet}

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
