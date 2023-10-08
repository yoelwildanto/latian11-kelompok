// src/components/Register.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Button, Flex, Text, Input } from "@chakra-ui/react";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (values, { resetForm }) => {
    axios.post("http://localhost:3001/users", values).then(() => {
      resetForm();
      navigate("/timeline");
    });
  };
  const handleToGoLogin = () => {
    navigate('/login');
  };

  return (
    <Flex
    direction="column"
    align="center"
    justify="flex-start" // Center vertically
    minHeight="100vh"
  >
    <Flex
      width="30%"
      p="4"
      justify="space-between"
      align="center"
      borderBottom="1px solid #ccc"
      mb="4"
      bgColor={'black'}
      color={"white"}
    >
      <Text fontSize="xl">Yuk!</Text>
      <Button colorScheme="teal" variant="outline" onClick={handleToGoLogin}>
        Login
      </Button>
    </Flex>
    <Box width="100%" maxW="464px" p="4" textAlign="center" bgColor={"yellow"}>
      <Text fontSize="2xl" fontWeight="bold" mb="4">
        Register
      </Text>
      <Formik
        initialValues={{ email: "", username: "", password: "", confirmPassword: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <Text fontSize="lg" mb="1">
              Email:
            </Text>
            <Field type="text" name="email" as={Input} />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div>
            <Text fontSize="lg" mb="1">
              Username:
            </Text>
            <Field type="text" name="username" as={Input} />
            <ErrorMessage name="username" component="div" className="error" />
          </div>
          <div>
            <Text fontSize="lg" mb="1">
              Password:
            </Text>
            <Field type="password" name="password" as={Input} />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <div>
            <Text fontSize="lg" mb="1">
              Confirm Password:
            </Text>
            <Field type="password" name="confirmPassword" as={Input} />
            <ErrorMessage name="confirmPassword" component="div" className="error" />
          </div>
          <Button type="submit" colorScheme="green" mb ="9" mt="5" width="30%">
            Register
          </Button>
        </Form>
      </Formik>
    </Box>
  </Flex>
  );
}

export default Register;
