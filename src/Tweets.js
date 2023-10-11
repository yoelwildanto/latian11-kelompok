// src/components/Timeline.js
import React from 'react';
import { Box, ListItem, UnorderedList, Text } from "@chakra-ui/react"
import TweetCard from './TweetCard';


// function TweetCard({ text }) {
//     return (
//       <Box
//         borderWidth="1px"
//         borderRadius="lg"
//         p={4}
//         m={2}
//         bg="white"
//       >
//         {text}
//       </Box>
//     );
//   }
function Timeline({ tweets }) {
    const reversedTweets = [...tweets].reverse();

  return (
    
    <div>
      <h2>Timeline</h2>
      <Box p={"10px 5px"} >
      {/* <UnorderedList> */}
        {reversedTweets.map((tweet, index) => (
        //   <Box key={index}>
        //     <Text mt={"10px"} bg={"blue"} >{tweet.text} </Text>
        // </Box>
        <TweetCard key={index} name={tweet.name}
        username={tweet.username} text={tweet.text}
        // onDelete={() => handleDelete(tweet.id)}
        //   onEdit={() => handleEdit(tweet.id)} 
          />

        ))}
      {/* </UnorderedList> */}
      </Box>
    </div>
  );
}

export default Timeline;
