import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
// import db from "./firebase";
// import FlipMove from "react-flip-move";
import { Box } from "@chakra-ui/react";
import Timeline from "./Tweets";
import axios from "axios";

function Feed() {
  // const [posts, setPosts] = useState([]);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/tweets') 
      .then((response) => {
        setTweets(response.data);
      })
      .catch((error) => {
        console.error('Error fetching tweets:', error);
      });
  }, []);

  const handleTweet = (text) => {
    axios.post('http://localhost:3002/tweets', { text }) 
      .then((response) => {
        setTweets([response.data, ...tweets]);
      })
      .catch((error) => {
        console.error('Error posting tweet:', error);
      });
    };



  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox onTweet={handleTweet}/>

      {/* <FlipMove> */}
        {/* {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))} */}
        <Timeline tweets={tweets}/>
      {/* </FlipMove> */}
    </div>
  );
}

export default Feed;
