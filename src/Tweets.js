// src/components/Timeline.js
import React from 'react';
import { Box, Text } from "@chakra-ui/react"

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
      <Text fontSize={"20px"} fontWeight={800} align={"center"}>Timeline</Text>
      <Box p={"10px 5px"} >
        {reversedTweets.map((tweet, index) => (
       

        <TweetCard key={index} name={tweet.name}
        username={tweet.username} text={tweet.text}
        // onDelete={() => handleDelete(tweet.id)}
        //   onEdit={() => handleEdit(tweet.id)} 
          />

        ))}

      </Box>
    </div>
  );
}

export default Timeline;
