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
  import { Link, useLocation, useNavigate } from "react-router-dom";
  import { useForm } from "react-hook-form";
  import { red } from '@mui/material/colors';
  // import axios from "axios";
import { useState } from "react";
import axios from '../axiosInstance'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";



const schema = yup
  .object({
    newpassword: yup.string().min(8).required("please enter your password"),
    confirmpassword: yup.string().required().oneOf([yup.ref('newpassword'),null], "password must match"), 
  })
  .required();


  function ResetPasswordOtp() {
  

    const [otpError, setOtpError] = useState(false)
    const {state} = useLocation();
    const mail = state;
    const navigate = useNavigate();

    const { register, handleSubmit, formState: {errors}, } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data) => {
      console.log("data: ", data)

      axios
      .put(`forgot/change_forgot_password/${mail}`, data)
      .then(function (response) {
            console.log(response);
              navigate('/signin')
            
        })
        .catch(function (error) {
              console.log("Error check :", error);
                setOtpError(true)
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
              OTP
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
                    id="otp"
                    label="OTP"
                    {...register("otp", { required: true })}
                  />
                  {(!errors.confirmpassword && otpError) &&  <Typography variant="p" color={red[500]}>Yout given OTP is not match</Typography>}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="newpassword"
                    label="new Password"
                    {...register("newpassword", { required: true })}
                  />
                  {errors.newpassword && <Typography variant="p" color={red[500]}>{errors.newpassword?.message}</Typography>}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="confirmpassword"
                    label="confirm Password"
                    {...register("confirmpassword", { required: true })}
                  />
                  {errors.confirmpassword && <Typography variant="p" color={red[500]}>{errors.confirmpassword?.message}</Typography> }
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Go for Register
              </Button>
              <Grid container justifyContent="flex-end" sx={{ mb: 3, mt: 2 }}>
                <Grid item>
                  Back to Email Field {""}
                  <Link to="/reset-password" variant="body">
                    Reset Password
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
    );
  }
  
  export default ResetPasswordOtp;
  