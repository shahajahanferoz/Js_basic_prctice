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




  function SignUpOtp() {
  

    const [otpMatch, setOtpMatch] = useState(false)
    // const params = useParams();
    // console.log("params: ", params.mail);
    // const {mail} = params
    const {state} = useLocation();
    const mail = state;
    const navigate = useNavigate();
    const { register, handleSubmit, } = useForm({
    })
    const onSubmit = (otp:string) => {
    //   console.log("data: ", otp)

      axios
      .post(`auth/signup_otp_chek/${mail}`, otp)
      .then(function (response) {
            console.log(response.status);
            const otpToken = response.data; // Adjust this line based on the actual structure of the response
            if( response.data && response.status === 201){
              navigate('/signup-form',{state: { mail, otpToken}})
            }
        })
        .catch(function (error) {
              console.log("Error check :", error);
            //   console.log("Error check :", error.response.data.statusCode);
            if(error.response.data.statusCode === 400){
                setOtpMatch(true)
            }
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
                  {otpMatch &&  <Typography variant="p" color={red[500]}>Yout given OTP is not match</Typography>}
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
                  <Link to="/signup-email" variant="body">
                    Sign up mail
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
    );
  }
  
  export default SignUpOtp;
  