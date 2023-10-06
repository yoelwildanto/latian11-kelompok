// src/components/Register.js
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, FormControl, FormErrorMessage, FormLabel, Input, Stack } from "@chakra-ui/react";

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
  const [isEmailTaken, setIsEmailTaken] = useState(false);
  const [isUsernameTaken, setIsUsernameTaken] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    // Check if email is already taken
    axios.get("http://localhost:3001/users?email=" + values.email).then((response) => {
      if (response.data.length > 0) {
        setIsEmailTaken(true);
        return;
      }

      // Check if username is already taken
      axios.get("http://localhost:3001/users?username=" + values.username).then((response) => {
        if (response.data.length > 0) {
          setIsUsernameTaken(true);
          return;
        }

        // If neither email nor username is taken, proceed with registration
        axios.post("http://localhost:3001/users", values).then(() => {
          resetForm();
          navigate("/timeline");
        });
      });
    });
  };

  return (
    <Stack spacing={3}>
      <h2>Register</h2>
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
                {isEmailTaken && (
                  <FormErrorMessage>This email is already registered.</FormErrorMessage>
                )}
              </FormControl>
            )}
          </Field>
          <Field name="username">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.username && form.touched.username}>
                <FormLabel htmlFor="username">Username</FormLabel>
                <Input {...field} id="username" placeholder="Username" />
                <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                {isUsernameTaken && (
                  <FormErrorMessage>This username is already taken.</FormErrorMessage>
                )}
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
          <Field name="confirmPassword">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.confirmPassword && form.touched.confirmPassword}>
                <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
                <Input {...field} id="confirmPassword" type="password" placeholder="Confirm Password" />
                <FormErrorMessage>{form.errors.confirmPassword}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button type="submit" colorScheme="teal">
            Register
          </Button>
        </Form>
      </Formik>
    </Stack>
  );
}

export default Register;
