// src/components/Register.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, FormControl, FormErrorMessage, FormLabel, Input, Stack, Text } from "@chakra-ui/react";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
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
    <Stack borderRadius={"20px"} bg={"pink"} py={"15px"} px={"40px"} m={"auto"} h={"100%"} w={"300px"} spacing={3}>
      <Button colorScheme="green" mx={"auto"} w={"100px"} onClick={handleToGoLogin}>Login</Button>
      <Text fontWeight={800}>Register</Text>
      <Formik
        initialValues={{ email: "", username: "", password: "", confirmPassword: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field name="email">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.email && form.touched.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input {...field} id="email" placeholder="Email" />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="username">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.username && form.touched.username}>
                <FormLabel mt={"10px"} htmlFor="username">Username</FormLabel>
                <Input {...field} id="username" placeholder="Username" />
                <FormErrorMessage>{form.errors.username}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="password">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.password && form.touched.password}>
                <FormLabel mt={"10px"} htmlFor="password">Password</FormLabel>
                <Input {...field} id="password" type="password" placeholder="Password" />
                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="confirmPassword">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.confirmPassword && form.touched.confirmPassword}>
                <FormLabel mt={"10px"} htmlFor="confirmPassword">Confirm Password</FormLabel>
                <Input {...field} id="confirmPassword" type="password" placeholder="Confirm Password" />
                <FormErrorMessage>{form.errors.confirmPassword}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button  ml={"110px"} w={"50%"} my={"10px"} type="submit" colorScheme="teal">
            Register
          </Button>
        </Form>
      </Formik>
    </Stack>
  );
}

export default Register;
