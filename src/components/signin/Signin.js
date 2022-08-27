import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, FastField, ErrorMessage } from "formik";

//add styles
import styles from "./style.module.css";
import {
  BsKey,
  BsLock,
  BsPerson,
  AiOutlineMail,
  ToastContainer,
  notify,
  userimg,
  xvalidateSchema,
  xinitialValues,
} from "../validation";

//end styles
const Signin = () => {
  let initialValues = xinitialValues;
  const validateSchema = xvalidateSchema.fields.signin;

  const onSubmit = (value) => {
    if (Object.keys(value).length) {
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
            <h5 className={styles.h5}>Signup</h5>
            <div className={styles.header}>
              <img src={userimg} alt="userimg" />
            </div>
            <div className={styles.formField}>
              <span>
                <BsPerson className={styles.span} />
              </span>
              <FastField
                type="name"
                name="name"
                placeholder="Enter UserName"
                className={styles.formInput}
              />

              <ErrorMessage
                name="name"
                component="div"
                className={styles.uncompleted}
              />
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
            <div className={styles.formField}>
              <span>
                <BsKey className={styles.span} />
              </span>
              <FastField
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className={styles.formInput}
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className={styles.uncompleted}
              />
            </div>
            <div className={styles.formField}>
              <div className={styles.formChecked}>
                <p htmlFor="isAccepted">I accept terms of privacy policy :</p>
                <FastField
                  type="checkbox"
                  name="isAccepted"
                  className={styles.formInput}
                />
              </div>
              <ErrorMessage
                name="isAccepted"
                component="div"
                className={styles.uncompleted}
              />
            </div>

            <div className={styles.formButton}>
              <Link to="/login">Login</Link>
              <button type="submit">Sign Up</button>
            </div>
            <ToastContainer />
          </Form>
        </div>
      </div>
    </Formik>
  );
};

export default Signin;
