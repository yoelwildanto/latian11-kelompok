// TweetContext.js
import React, { createContext, useContext, useState } from "react";

const TweetContext = createContext();

export const useTweetContext = () => {
  return useContext(TweetContext);
};

const TweetContextProvider = ({ children }) => {
  const [tweets, setTweets] = useState([]); // Manage tweets in state

  // Function to add a new tweet
  const addTweet = (tweet) => {
    setTweets([...tweets, tweet]);
  };

  // Function to edit a tweet
  const editTweet = (tweetId, updatedText) => {
    // Update the tweet with the provided tweetId
    const updatedTweets = tweets.map((tweet) => {
      if (tweet.id === tweetId) {
        return { ...tweet, text: updatedText };
      }
      return tweet;
    });
    setTweets(updatedTweets);
  };

  // Function to delete a tweet
  const deleteTweet = (tweetId) => {
    // Filter out the tweet with the provided tweetId
    const updatedTweets = tweets.filter((tweet) => tweet.id !== tweetId);
    setTweets(updatedTweets);
  };

  return (
    <TweetContext.Provider value={{ tweets, addTweet, editTweet, deleteTweet }}>
      {children}
    </TweetContext.Provider>
  );
};

export default TweetContextProvider;
