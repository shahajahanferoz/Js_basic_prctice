import * as Yup from "yup";

export const  signUpSchema = Yup.object().shape({
    firstname:Yup.string().min(2).max(12).required("please Enter your first name"),
    lastname:Yup.string().min(2).max(18).required("please Enter your last name"),
    email: Yup.string().email().required("please enter your email"),
    password: Yup.string().min(6).required("please enter your password"),
    // confirm_password: Yup.string().required().oneOf([Yup.ref('password'),null], "password must match"), 

});