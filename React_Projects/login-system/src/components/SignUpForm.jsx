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
  import { Link, useLocation, useNavigate } from "react-router-dom";
  import { useForm } from "react-hook-form";
  import { yupResolver } from "@hookform/resolvers/yup"
  import * as yup from "yup"
  import { red } from '@mui/material/colors';
  import axios from "axios";

  const schema = yup
  .object({
    firstname:yup.string().min(2).max(25).required("please Enter your first name"),
    lastname:yup.string().min(2).max(25).required("please Enter your last name"),
    phone: yup.string().required("Please enter your phone number").matches(/^01\d{9}/g,"Invalid Phone Number"),
    password: yup.string().min(8).required("please enter your password"),
    confirmpassword: yup.string().required().oneOf([yup.ref('password'),null], "password must match"), 
  })
  .required()

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
  
  function SignUpForm() {
  

    // const params = useParams();
    // const {mail, otpToken} = params;
    const {state} = useLocation();
    // console.log(state);
    const {mail,otpToken} = state;
    const navigate = useNavigate();
    const { register, handleSubmit, formState: {errors}, } = useForm({
      resolver: yupResolver(schema),
    })
    const onSubmit = (data) => {
      // console.log("dataaaaaaa: ", data)
      const registerData = {
        first_name: data.firstname,
        last_name: data.lastname,
        contact: data.phone,
        password: data.password,
        otp_token: otpToken
      }

      axios
      .post(`http://192.168.68.113:3003/auth/signup/${mail}`, registerData)
      .then(function (response) {
            console.log(response);
            const regToken = response.data; // Adjust this line based on the actual structure of the response
              setCookie("regToken", regToken, { path: "/" });
              navigate('/signin')

        })
        .catch(function (error) {
              console.log("Error :", error);
            });
    };
  
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
                    autoFocus
                  />
                  {errors.firstname  ?  <Typography variant="p" color={red[500]}>{errors.firstname?.message}</Typography> : null}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    {...register("lastname")}
                  />
                  {errors.lastname  ?  <Typography variant="p" color={red[500]}>{errors.lastname?.message}</Typography> : null}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="phone"
                    label="Phone Number"
                    {...register("phone")}
                  />
                  {errors.phone && <Typography variant="p" color={red[500]}>{errors.phone?.message}</Typography>}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    {...register("password", { required: true })}
                    id="password"
                    label="Password"
                    type="password"
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
  
  export default SignUpForm;
  