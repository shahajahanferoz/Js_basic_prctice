import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    TextField,
    Typography,
  } from "@mui/material";
  import { Link, useNavigate } from "react-router-dom";
  import { red } from "@mui/material/colors";
  // import axios from "axios";
  import * as yup from "yup";
  import { yupResolver } from "@hookform/resolvers/yup";
  import { useForm } from "react-hook-form";
  import { useState } from "react";
  import axios from '../axiosInstance'
  
  const schema = yup
    .object({
      email: yup
        .string()
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, "Please enter a valid address")
        .required("please enter your email"),
      // password: yup.string().min(8).required("please enter your password"),
    })
    .required();
  
  // Function to set a cookie
  function setCookie(name, value, options = {}) {
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie =
      encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
    
  }
  
  function SignInForm() {
  
    const navigate = useNavigate();
    const [logError, setLogError] = useState(false)
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
      axios
        .post(`auth/signin`, data)
        .then(function (response) {
          console.log(response);
          const loginToken = response.data; // Adjust this line based on the actual structure of the response
          setCookie("loginToken", loginToken, { path: "/" });
          navigate("/dashboard");
        })
        .catch(function (error) {
          console.log("Error check :: ", error);
          setLogError(true)
        });
    };
  
    return (
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            boxShadow: 4,
            borderRadius: 2,
            px: 4,
            py: 6,
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" component="h4">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  {...register("email")}
                  id="email"
                  label="Email Address"
                />
                {errors.email && (
                  <Typography variant="p" color={red[500]}>
                    {" "}
                    {errors.email?.message}{" "}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  {...register("password", { required: true })}
                  id="password"
                  label="Password"
                  type="password"
                />
              { logError &&  <Typography variant="p" color={red[500]}>Yout given mail or Paaword is not match</Typography>}       
              </Grid>
              {/* { logError &&  <Typography variant="p" color={red[500]}>Yout given mail or Paaword is not match</Typography>} */}
  
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="remember" color="primary" checked required />
                  }
                  label="Remember me"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 3 }}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/reset-password" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                {"Don't have an account? "}
                <Link to="/signup-email" variant="body2">
                  Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    );
  }
  
  export default SignInForm;
  