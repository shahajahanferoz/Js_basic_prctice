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
  import { ThemeProvider, createTheme } from "@mui/material/styles";
  import { Link } from "react-router-dom";
  import { useFormik } from "formik";
  import { signUpSchema } from "./schemas";
  import { red } from '@mui/material/colors';
  import axios from "axios";
  
  function SignUpForm() {
    const theme = createTheme();
  
    const initialValues = {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      password: "",
      confirmpassword: "",
    }
  
    
    const {values,errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values,action) => {
            console.log("submit values ",data);
            // action.resetForm()
                axios
                .post("http://192.168.68.113:3003/auth/signup", data)
                .then(function (response) {
                      console.log(response);
                      action.resetForm()
                  })
                  .catch(function (error) {
                        console.log("Error :", error);
                      });
  
      }
    })
    const data = {
        // firstname: values.firstname,
    //   lastname: values.lastname,
      email: values.email,
    //   phone: values.phone,
      password: values.password,
    }
  
    return (
      <ThemeProvider theme={theme}>
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
              onSubmit={handleSubmit}
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
                    name="firstname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstname}
                    autoFocus
                  />
                  {errors.firstname && touched.firstname ?  <Typography variant="p" color={red[500]}>{errors.firstname}</Typography> : null}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    // required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastname}
                  />
                  {errors.lastname && touched.lastname ?  <Typography variant="p" color={red[500]}>{errors.lastname}</Typography> : null}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    // required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    // value={email}
                    // onChange={handleChange}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                  />
                  {errors.email && touched.email ?  <Typography variant="p" color={red[500]}>{errors.email}</Typography> : null}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    // required
                    fullWidth
                    id="phone"
                    label="Phone Number"
                    name="phone"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phone}
                  />
                  {errors.phone && touched.phone ?  <Typography variant="p" color={red[500]}>{errors.phone}</Typography> : null}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    // required
                    fullWidth
                    name="password"
                    id="password"
                    label="Password"
                    type="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                  />
                  {errors.password && touched.password ?  <Typography variant="p" color={red[500]}>{errors.password}</Typography> : null}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="confirmpassword"
                    id="confirmpassword"
                    label="Confirm Password"
                    type="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.confirmpassword}
                  />
                  {errors.confirmpassword && touched.confirmpassword ?  <Typography variant="p" color={red[500]}>{errors.confirmpassword}</Typography> : null}
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
                  <Link to="/login" variant="body">
                    Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }
  
  export default SignUpForm;
  