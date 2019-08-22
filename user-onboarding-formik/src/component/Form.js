import React from "react";
import { withFormik, Form, Field } from "formik";

function UserForm() {
  return (
    <div>
      <Form>
        <Field name="name" type="text" placeholder="name" />
        <Field name="email" type="email" placeholder="email" />
        <Field name="password" type="password" placeholder="password" />
        <label className="checkbox-container">
          Terms of Service
          <Field type="checkbox" name="terms" />
          <span className="checkmark" />
        </label>
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
      terms: terms || ""
    };
  }
})(UserForm);

export default FormikForm;
