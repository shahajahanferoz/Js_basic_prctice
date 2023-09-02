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
import axios from "axios";
import { useState } from "react";

function SignUpForm() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  let {firstname: firstName, lastname: lastName, email, password} = user;
  const theme = createTheme();

  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    //   firstname: data.get("firstName"),
    //   lastname: data.get("lastName"),
    // });

    // const data2 = {
    //   email: data.get("email"),
    //   password: data.get("password"),
    //   firstname: data.get("firstName"),
    //   lastname: data.get("lastName"),
    // };
    // console.log(data2);

    console.log(user);
    
    axios
    .post("http://192.168.68.113:3002/users", user)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log("Error :", error);
    });
    
    setUser(()=>({firstname:'',lastname:'',email:'',password:''}))
    // event.target.reset()
    console.log(user);
  };

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
                  name="firstname"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={handleChange}
                  value={firstName}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastname"
                  value={lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  id="password"
                  label="Password"
                  type="password"
                  value={password}
                  onChange={handleChange}
                />
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
