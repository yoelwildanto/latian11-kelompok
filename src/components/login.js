// src/components/Login.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  usernameOrEmail: Yup.string().required("Username or Email is required"),
  password: Yup.string().required("Password is required"),
});

function Login() {
  const navigate = useNavigate();
//   const [expression, setExpression] = useState('');


  const handleSubmit = (values, { resetForm }) => {
    axios.get("http://localhost:3001/users", { params: { usernameOrEmail: values.usernameOrEmail, password: values.password } }).then((response) => {
      if (response.data.length === 1) {
        resetForm();
        navigate("/timeline");
      } else {
        alert("Invalid username/email or password.");
      }
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <Formik initialValues={{ usernameOrEmail: "", password: "" }} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form>
          <div>
            <label>Username or Email:</label>
            <Field type="text" name="usernameOrEmail" />
            <ErrorMessage name="usernameOrEmail" component="div" className="error" />
          </div>
          <div>
            <label>Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
