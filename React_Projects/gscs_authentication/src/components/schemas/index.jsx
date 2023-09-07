import * as Yup from "yup";

export const  signUpSchema = Yup.object().shape({
    firstname:Yup.string().min(2).max(25).required("please Enter your first name"),
    lastname:Yup.string().min(2).max(25).required("please Enter your last name"),
    // email: Yup.string().email().required("please enter your email"),
    email: Yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,"Invalid email number").required("please enter your email"),
    phone: Yup.string().required("Please enter your phone number").matches(/^01\d{9}/g,"Invalid Phone Number"),
    password: Yup.string().min(6).required("please enter your password"),
    confirmpassword: Yup.string().required().oneOf([Yup.ref('password'),null], "password must match"), 

});