// src/components/TweetCard.js
import React from 'react';
import { Box, Avatar, Button, Text } from '@chakra-ui/react';
// import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {BsTrash} from "react-icons/bs"
import {AiOutlineEdit} from "react-icons/ai"



function TweetCard({ name, username, text, onDelete, onEdit }) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      m={2}
      bg="white"
    >
      <Avatar size="md" name={name} src="" />
      <Text pt={"10px"}  fontSize="lg" fontWeight="bold">{name} (@{username})</Text>
      <Text fontWeight={600} p={"10px"}>{text}</Text>

      <Button mx={"5px"} leftIcon={<AiOutlineEdit />} colorScheme="teal" size="xs" onClick={onEdit}>
        Edit
      </Button>
      <Button  leftIcon={<BsTrash />} colorScheme="red" size="xs" onClick={onDelete}>
        Delete
      </Button>
    </Box>
  );
}

export default TweetCard;
