import { useEffect, useState } from "react";
import {
  Box,
  Text,
  Input,
  ListItem,
  UnorderedList,
  Image,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";

const TimelineDisplay = () => {
 ;

  const [tweet, setTweet] = useState([]);
  const [data, setData] = useState([]);

  const email = localStorage.getItem("token");
  const Navigate = useNavigate();

  // input tweet
  const inputTimeline = async (email, posting) => {
    try {
      await axios.post("http://localhost:8000/users", {
        email,
        posting,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      posting: "",
    },

    onSubmit: (values) => {
      inputTimeline(email, values.posting);
      formik.values.posting = "";
    },
  });

  // menampilkan tweet
  const newTweet = async () => {
    try {
      const response = await axios.get("http://localhost:8000/users");
      setTweet(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    newTweet();
  }, [tweet]);

  const logout = () => {
    localStorage.removeItem("token");
    Navigate("/login");
  };

  // menampilkan data user
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const newData = data.filter((input) => input.email !== email);

  return (
    <>
      <Box
        maxW="100vw"
        minH="100vh"
        display="flex"
        sx={{ justifyContent: { lg: "center", xl: "center", "2xl": "center" } }}
      >
        <Box display="flex" h="100vh" justifyContent="center">
         
          <Box
            w="45em"
            display="flex"
            flexDirection="column"
            borderLeft="1px solid #eeeeee"
            borderRight="1px solid #eeeeee"
          >
            <Box
              h="60px"
              backgroundColor="#ffffff"
              padding=".5em"
              borderBottom="1px solid #eeeeee"
            >
              <Text fontSize="22px" fontWeight="600" color="#000000">
                Home
              </Text>
            </Box>
            <Box
              h="60px"
              backgroundColor="#ffffff"
              display="flex"
              alignItems="center"
              justifyContent="space-around"
              borderBottom="1px solid #eeeeee"
            >
              <Box fontSize="18px" fontWeight="500" color="#000000">
                <Text>For You</Text>
              </Box>
              <Box fontSize="18px" fontWeight="500" color="#000000">
                <Text>Following</Text>
              </Box>
            </Box>
            <Box
              h="120px"
              backgroundColor="#ffffff"
              display="flex"
              alignItems="center"
              justifyContent="space-around"
              borderBottom="1px solid #eeeeee"
            >
              <form onSubmit={formik.handleSubmit}>
                <Box w="35em" display="flex" alignItems="flex-end" gap="1em">
                  <Input
                    placeholder="What is happening?!"
                    type="text"
                    name="posting"
                    value={formik.values.posting}
                    onChange={formik.handleChange}
                  ></Input>
                  <Button
                    type="submit"
                    backgroundColor="#1DA1F2"
                    color="#ffffff"
                  >
                    Post
                  </Button>
                </Box>
              </form>
            </Box>
            <Box
              display="flex"
              minH="75vh"
            >
              <UnorderedList margin="0" w="100%">
                {tweet.length > 0 &&
                  tweet.map((item, index) => {
                    return (
                      <Box
                        display="flex"
                        borderBottom="1px solid #eeeeee"
                        padding=".5em"
                      >
                        <Box fontSize="30px">
                          <ion-icon name="person-circle-outline"></ion-icon>
                        </Box>
                        <Box
                          display="flex"
                          flexDirection="column"
                          paddingLeft="1em"
                        >
                          <Text
                            fontSize="18px"
                            fontWeight="500"
                            color="#000000"
                            key={index}
                          >
                            {item.email}
                          </Text>
                          <ListItem listStyleType="none" key={index}>
                            {item.posting}
                          </ListItem>
                        </Box>
                      </Box>
                    );
                  })}
              </UnorderedList>
            </Box>
          </Box>
          {isSmallerThan768 ? (
            ""
          ) : isSmallerThan1280 ? (
            ""
          ) : (
            <Box
              w="18.7em"
              minH="100vh"
              backgroundColor="#ffffff"
              float="left"
              display="flex"
              justifyContent="center"
              padding="1em"
            >
              <Box
                fontSize="30px"
                display="flex"
                flexDirection="column"
                gap="40px"
              >
                <Box
                  h="50px"
                  display="flex"
                  alignItems="center"
                  fontSize="22px"
                  gap="10px"
                  border="2px solid #ffffff"
                  borderRadius="20px"
                  padding=".5em"
                  backgroundColor="#eeeeee"
                >
                  <ion-icon name="search-outline"></ion-icon>
                  <Input variant="unstyled" w="180px" />
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  gap="10px"
                  backgroundColor="#eeeeee"
                  padding=".5em"
                  borderRadius="10px"
                >
                  <Text fontSize="22px" fontWeight="600" color="#000000">
                    Who to follow
                  </Text>
                  {newData.map((entry, index) => (
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      backgroundColor="#ffffff"
                      borderRadius="10px"
                      padding=".2em"
                      fontSize="18px"
                    >
                      <ion-icon name="person-circle-outline"></ion-icon>
                      <Box
                        w="85%"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Text key={index}>{entry.email}</Text>
                        <ion-icon name="add-outline"></ion-icon>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};
export default TimelineDisplay;