import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { purple } from "@mui/material/colors";
import { red } from "@mui/material/colors";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import axios from "../axiosInstance";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

const schema = yup
  .object({
    email: yup
      .string()
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, "Please enter a valid address")
      .required("please enter your email"),
    // password: yup.string().min(8).required("please enter your password"),
  })
  .required();


function ResetPassword() {

  const [serverError, setServerError] = useState(false)
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data.email);
    axios
      .post(`forgot/search/${data.email}`, )
      .then(function (response) {
        console.log(response);
        navigate("/reset-password-otp",{state: data.email})
      })
      .catch(function (error) {
        console.log("Error check :: ", error);
        setServerError(true)
      });
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          // alignItems: "center"
        }}
      >
        <Typography variant="h4" component="h4">
          Forgot Password
        </Typography>

        <Box
          sx={{
            boxShadow: 2,
            borderRadius: 1,
            py: 3,
            px: 4,
            marginTop: 2,
          }}
        >
          <Typography variant="body1">
            Lost your password? Please enter your username or email address. You
            will receive a link to create a new password via email.
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="fogetMail"
                  {...register("email")}
                  label="Username or email"
                  variant="standard"
                />
                {errors.email ? 
                    ( <Typography variant="p" color={red[500]}> {" "}{errors.email?.message}{" "}</Typography>)
                  : 
                    (serverError && (<Typography variant="p" color={red[500]}>Your email is not found</Typography> ))}
              </Grid>
            </Grid>

            <ResetButton
              type="submit"
              // variant="contained"
              // size="large"
              // sx={{ mt: 1, mb: 3 }}
            >
              Reset Password
            </ResetButton>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default ResetPassword;
