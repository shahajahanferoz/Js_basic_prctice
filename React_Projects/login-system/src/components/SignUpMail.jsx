import {
    Avatar,
    Box,
    Button,
    Container,
    Grid,
    TextField,
    Typography,
  } from "@mui/material";
  import LockPersonIcon from "@mui/icons-material/LockPerson";
  import { Link, useNavigate } from "react-router-dom";
  import { useForm } from "react-hook-form";
  import { yupResolver } from "@hookform/resolvers/yup"
  import * as yup from "yup" 
  import { red } from '@mui/material/colors';
import axios from '../axiosInstance'

  const schema = yup
  .object({
    email: yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,"Please enter a valid address").required("please enter your email"),
  })
  .required()
  
  function SignUpMail() {
  

    const navigate = useNavigate();
    const { register, handleSubmit, formState: {errors}, } = useForm({
      resolver: yupResolver(schema),
    })
    const onSubmit = (data) => {
      console.log("data: ", data)
            // navigate(`/signup-otp/${data.email}`)

      axios
      .post("auth/signup_otp", data)
      .then(function (response) {
            console.log(response);
            navigate('/signup-otp',{state: data.email})
        })
        .catch(function (error) {
              console.log("Error :", error);
            });
    };
  
    return (
      <Container component="main" maxWidth="sm">
          {/* <CssBaseline /> */}
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
            <Avatar sx={{ m: 1, mt:5, bgcolor: "secondary.main" }}>
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
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="email"
                    label="Email Address"
                    {...register("email", { required: true })}
                  />
                  {errors.email &&  <Typography variant="p" color={red[500]}>{errors.email?.message}</Typography>}
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Go for OTP
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
  
  export default SignUpMail;
  