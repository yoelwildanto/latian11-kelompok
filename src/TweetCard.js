// src/components/TweetCard.js
import React from 'react';
import { Box, Avatar, Button, Text } from '@chakra-ui/react';
// import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
// import {BsTrash} from "react-icons/bs"
// import {AiOutlineEdit} from "react-icons/ai"
// import { useTweetContext } from './Context/Context';



function TweetCard({ username, text, timestamp }) {
    // const { editTweet, deleteTweet } = useTweetContext();
    // const handleEdit = (updatedText) => {
    //     editTweet(tweet.id, updatedText);
    //   };
    
    //   const handleDelete = () => {
    //     deleteTweet(tweet.id);
    //   };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      m={2}
      bg="white"
    >
      <Avatar size="md" src="" />
      <Text pt={"10px"}  fontSize="lg" fontWeight="bold">(@{username})</Text>
      <Text fontWeight={600} p={"10px"}>{text}</Text>
      {/* <Text>Posted at: {new Date(timestamp).toLocaleString()}</Text> */}
      {/* <Button mx={"5px"} leftIcon={<AiOutlineEdit />} colorScheme="teal" size="xs" onClick={handleEdit}>

      <Button mx={"5px"} leftIcon={<AiOutlineEdit />} colorScheme="teal" size="xs" onClick={onEdit}>
        Edit
      </Button>
      <Button  leftIcon={<BsTrash />} colorScheme="red" size="xs" onClick={handleDelete}>
        Delete
      </Button> */}
    </Box>
  );
}

export default TweetCard;
