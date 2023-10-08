import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

const validationSchema = Yup.object({
  usernameOrEmail: Yup.string().required("Username or Email is required"),
  password: Yup.string().required("Password is required"),
});

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (values, { resetForm }) => {
    axios
      .get("http://localhost:3001/users", {
        params: {
          usernameOrEmail: values.usernameOrEmail,
          password: values.password,
        },
      })
      .then((response) => {
        if (response.data.length === 1) {
          resetForm();
          navigate("/timeline");
        } else {
          alert("Invalid username/email or password.");
        }
      });
  };

  const handleToGoRegister = () => {
    navigate("/register");
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="flex-start"
      minHeight="100vh"
    >
      <Flex
        width="30%"
        p="4"
        justify="space-between"
        align="center"
        borderBottom="1px solid #ccc"
        mb="4"
        bgColor={'Black'}
        color={"White"}
      >
        <Text fontSize="xl">Yuk!</Text>
        <Button colorScheme="teal" variant="outline" onClick={handleToGoRegister}>
          Register
        </Button>
      </Flex>
      <Box width="100%" maxW="463px" p="4" textAlign="center" bgColor={"Yellow"}>
  <Text fontSize="2xl" fontWeight="bold" mb="4">
    Login
  </Text>
  <Formik
    initialValues={{ usernameOrEmail: "", password: "" }}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
  >
    <Form>
    <div>
        <Text mb={1}>Username or Email:</Text>
        <Field type="text" name="usernameOrEmail"  />
        <ErrorMessage
          name="usernameOrEmail"
          component="div"
          className="error"
        />
      </div>
      <div>
        <Text mb={1}>Password:</Text>
        <Field type="password" name="password"  />
        <ErrorMessage
          name="password"
          component="div"
          className="error"
        />
      </div>
      <Button type="submit" colorScheme="teal" mb = "9" mt="4" width="30%">
        Login
      </Button>
    </Form>
  </Formik>
</Box>
</Flex>
  );
}

export default Login;
