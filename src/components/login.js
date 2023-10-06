// src/components/Login.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, FormControl, FormErrorMessage, FormLabel, Input, Stack } from "@chakra-ui/react";

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
          $or: [{ email: values.usernameOrEmail }, { username: values.usernameOrEmail }],
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
    navigate('/register');
  };

  return (
    <Stack spacing={3}>
      <Button onClick={handleToGoRegister}>Register</Button>
      <h2>Login</h2>
      <Formik
        initialValues={{ usernameOrEmail: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field name="usernameOrEmail">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.usernameOrEmail && form.touched.usernameOrEmail}>
                <FormLabel htmlFor="usernameOrEmail">Username or Email</FormLabel>
                <Input {...field} id="usernameOrEmail" placeholder="Username or Email" />
                <FormErrorMessage>{form.errors.usernameOrEmail}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="password">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.password && form.touched.password}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input {...field} id="password" type="password" placeholder="Password" />
                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button type="submit" colorScheme="teal">
            Login
          </Button>
        </Form>
      </Formik>
    </Stack>
  );
}

export default Login;
