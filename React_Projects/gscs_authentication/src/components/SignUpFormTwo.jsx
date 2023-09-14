import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    CssBaseline,
    FormControlLabel,
    Grid,
    TextField,
    Typography,
  } from "@mui/material";
  import LockPersonIcon from "@mui/icons-material/LockPerson";
  import { Link } from "react-router-dom";
  import { useForm } from "react-hook-form";
  import { yupResolver } from "@hookform/resolvers/yup"
  import * as yup from "yup"
  import { useFormik } from "formik";
  import { signUpSchema } from "./schemas";
  import { red } from '@mui/material/colors';
  import axios from "axios";

  const schema = yup
  .object({
    // firstName: yup.string().required(),
    // age: yup.number().positive().integer().required(),
    firstname:yup.string().min(2).max(25).required("please Enter your first name"),
    lastname:yup.string().min(2).max(25).required("please Enter your last name"),
    // email: yup.string().email().required("please enter your email"),
    email: yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,"Please enter a valid address").required("please enter your email"),
    phone: yup.string().required("Please enter your phone number").matches(/^01\d{9}/g,"Invalid Phone Number"),
    password: yup.string().min(6).required("please enter your password"),
    confirmpassword: yup.string().required().oneOf([yup.ref('password'),null], "password must match"), 
  })
  .required()
  
  function SignUpFormTwo() {
  

    const { register, handleSubmit, watch, formState: {errors}, } = useForm({
      resolver: yupResolver(schema),
    })
    // console.log("useForm: ",useForm());
    const onSubmit = (data) => {
      console.log("data: ", data)
      const registerData = {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        contact: data.phone,
        password: data.password,
      }

      axios
      .post("http://192.168.68.113:3003/auth/signup", registerData)
      .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
              console.log("Error :", error);
            });
    };
    // console.log(watch("firstname")) // watch input value by passing the name of it

    // const initialValues = {
    //   firstname: "",
    //   lastname: "",
    //   email: "",
    //   phone: "",
    //   password: "",
    //   confirmpassword: "",
    // }
    
    // const {values,errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    //     initialValues,
    //     validationSchema: signUpSchema,
    //     onSubmit: (values,action) => {
    //         // console.log("submit values ",data);
    //         // action.resetForm()
    //             // axios
    //             // .post("http://192.168.68.113:3003/auth/signup", data)
    //             // .then(function (response) {
    //             //       console.log(response);
    //             //       action.resetForm()
    //             //   })
    //             //   .catch(function (error) {
    //             //         console.log("Error :", error);
    //             //       });
  
    //   }
    // })
    // const data = {
    //     // firstname: values.firstname,
    // //   lastname: values.lastname,
    //   email: values.email,
    // //   phone: values.phone,
    //   password: values.password,
    // }
  
    return (
      <Container component="main" maxWidth="sm">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              boxShadow: 4,
              borderRadius: 2,
              px: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockPersonIcon />
            </Avatar>
            <Typography variant="h4" component="h4">
              Sign Up
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 3 }}
              autoComplete="off"
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    // required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    {...register("firstname")}
                    // onBlur={handleBlur}
                    // onChange={handleChange}
                    // value={values.firstname}
                    autoFocus
                  />
                  {/* <p>{errors.firstname?.message}</p> */}
                  {errors.firstname  ?  <Typography variant="p" color={red[500]}>{errors.firstname?.message}</Typography> : null}
                  {/* {errors.firstname && touched.firstname ?  <Typography variant="p" color={red[500]}>{errors.firstname}</Typography> : null} */}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    // required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    {...register("lastname")}
                    // onBlur={handleBlur}
                    // onChange={handleChange}
                    // value={values.lastname}
                  />
                  {errors.lastname  ?  <Typography variant="p" color={red[500]}>{errors.lastname?.message}</Typography> : null}
                  {/* {errors.lastname && touched.lastname ?  <Typography variant="p" color={red[500]}>{errors.lastname}</Typography> : null} */}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    // required
                    fullWidth
                    id="email"
                    label="Email Address"
                    {...register("email", { required: true })}
                    // value={email}
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    // onChange={handleChange}
                    // value={values.email}
                  />
                  {/* {errors.email &&  <Typography variant="p" color={red[500]}>{"errors.email"}</Typography>} */}
                  {/* {console.log("email error",errors.email)} */}
                  {errors.email &&  <Typography variant="p" color={red[500]}>{errors.email?.message}</Typography>}
                  {/* {errors.email && <span>This field is required</span>} */}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    // required
                    fullWidth
                    id="phone"
                    label="Phone Number"
                    {...register("phone")}
                    // onBlur={handleBlur}
                    // onChange={handleChange}
                    // value={values.phone}
                  />
                  {errors.phone && <Typography variant="p" color={red[500]}>{errors.phone?.message}</Typography>}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    // required
                    fullWidth
                    {...register("password", { required: true })}
                    id="password"
                    label="Password"
                    type="password"
                    // onBlur={handleBlur}
                    // onChange={handleChange}
                    // value={values.password}
                  />
                  {errors.password && <Typography variant="p" color={red[500]}>{errors.password?.message}</Typography>}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    {...register("confirmpassword")}
                    id="confirmpassword"
                    label="Confirm Password"
                    type="password"
                    // onBlur={handleBlur}
                    // onChange={handleChange}
                    // value={values.confirmpassword}
                  />
                  {errors.confirmpassword && <Typography variant="p" color={red[500]}>{errors.confirmpassword?.message}</Typography> }
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox checked color="primary" required />}
                    label="I agree the term of User"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end" sx={{ mb: 3, mt: 2 }}>
                <Grid item>
                  Already have an account?
                  <Link to="/signin" variant="body">
                    Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
    );
  }
  
  export default SignUpFormTwo;
  