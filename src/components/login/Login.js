import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, FastField, ErrorMessage } from "formik";

//add styles
import styles from "./style.module.css";
import {
  BsLock,
  AiOutlineMail,
  ToastContainer,
  notify,
  userimg,
  xvalidateSchema,
  xinitialValues,
} from "../validation";

//end styles
const Login = () => {
  const initialValues = xinitialValues;
  const validateSchema = xvalidateSchema.fields.login;

  const onSubmit = (value) => {
    console.log(Object.keys(value));
    if (Object.keys(value)) {
      notify("signup ", "success");
    } else {
      notify("invalid", "error");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validateSchema}
      validateOnBlur={false}
    >
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Form className={styles.formContainer}>
            <h5 className={styles.h5}>Login</h5>
            <div className={styles.header}>
              <img src={userimg} alt="userimg" />
            </div>

            <div className={styles.formField}>
              <span>
                <AiOutlineMail className={styles.span} />
              </span>
              <FastField
                type="email"
                name="email"
                placeholder="Email Address"
                className={styles.formInput}
              />

              <ErrorMessage
                name="email"
                component="div"
                className={styles.uncompleted}
              />
            </div>
            <div className={styles.formField}>
              <span>
                <BsLock className={styles.span} />
              </span>
              <FastField
                type="password"
                name="password"
                placeholder="Password"
                className={styles.formInput}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={styles.uncompleted}
              />
            </div>

            <div className={styles.formButton}>
              <Link to="/signin">Sign up</Link>
              <button type="submit">Login</button>
            </div>
            <ToastContainer />
          </Form>
        </div>
      </div>
    </Formik>
  );
};

export default Login;
