import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function UserForm({ errors, touched, values, status }) {
  return (
    <div>
      <Form>
        <Field name="name" type="text" placeholder="name" />
        {touched.name && errors.name && <p className="error">{errors.name}</p>}
        <Field name="email" type="email" placeholder="email" />
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}
        <Field name="password" type="password" placeholder="password" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <label className="checkbox-container">
          Terms of Service
          <Field type="checkbox" name="terms" checked={values.terms} />
          <span className="checkmark" />
        </label>
        {touched.terms && errors.terms && (
          <p className="error">{errors.terms}</p>
        )}
        <button type="submit">Press here</button>
      </Form>
    </div>
  );
}

const FormikForm = withFormik({
  mapPropsToValues({ name, email, password, terms }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      terms: terms || false
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Oh no! You forgot your name!"),
    email: Yup.string().required("Oh no! You forgot your email!"),
    password: Yup.string().required("Oh no! You forgot your password!"),
    terms: Yup.boolean().required("Please check terms of service.")
  })
})(UserForm);

export default FormikForm;
