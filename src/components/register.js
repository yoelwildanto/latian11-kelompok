// src/components/Register.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

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
    <div>
      <Button onClick={handleToGoLogin}>Login</Button>
      <h2>Register</h2>
      <Formik initialValues={{ email: "", username: "", password: "", confirmPassword: "" }} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form>
          <div>
            <label>Email:</label>
            <Field type="text" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div>
            <label>Username:</label>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" className="error" />
          </div>
          <div>
            <label>Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <div>
            <label>Confirm Password:</label>
            <Field type="password" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" component="div" className="error" />
          </div>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;
