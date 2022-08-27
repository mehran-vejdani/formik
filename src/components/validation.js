import "react-toastify/dist/ReactToastify.css";
import { BsKey, BsLock, BsPerson } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import { notify } from "./toast";
import userimg from "./images/user.png";
import * as yup from "yup";

const xinitialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  isAccepted: false,
};
const xvalidateSchema = yup.object().shape({
  signin: yup.object().shape({
    name: yup.string().trim().required("Please Fill the Name"),
    email: yup
      .string()
      .email("Invalid Format")
      .required("Please Fill the Email "),
    password: yup
      .string()
      .required("Please Fill the Password")
      .min(6, "Password is too short - should be 6 chars minimum"),
    confirmPassword: yup.string().when("password", {
      is: (value) => (value && value.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref("password")], "Both password need to be the same"),
    }),
    isAccepted: yup
      .boolean()
      .oneOf([true], "You must accept the pricing policy terms and conditions"),
  }),
  login: yup.object().shape({
    email: yup
      .string()
      .email("Invalid Format")
      .required("Please Fill the Email "),
    password: yup
      .string()
      .required("Please Fill the Password")
      .min(6, "Password is too short - should be 6 chars minimum"),
  }),
});

export {
  BsKey,
  BsLock,
  BsPerson,
  AiOutlineMail,
  ToastContainer,
  notify,
  userimg,
  xvalidateSchema,
  xinitialValues,
};
