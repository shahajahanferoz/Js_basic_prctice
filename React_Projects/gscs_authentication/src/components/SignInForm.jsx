// import {
//   Box,
//   Button,
//   Checkbox,
//   Container,
//   FormControlLabel,
//   Grid,
//   TextField,
//   Typography,
// } from "@mui/material";
// import { useFormik } from "formik";
// import { Link } from "react-router-dom";
// import { signInSchema } from "./schemas";
// import { red } from '@mui/material/colors';
// import axios from "axios";
// // import Cookies from 'universal-cookie';

// function SignInForm() {
//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   const data = new FormData(event.currentTarget);
//   //   console.log({
//   //     email: data.get("email"),
//   //     password: data.get("password"),
//   //   });
//   // };

//   const initialValues = {
//     email: "",
//     password: "",
//   }


//   const {errors, touched, handleChange, handleSubmit} = useFormik({
//     initialValues,
//     validationSchema: signInSchema,
//     onSubmit: (values) => {
//       axios.post("http://192.168.68.113:3003/auth/signin", values)
//       .then(function (response) {
//         console.log("Log-in response ", response);
//         // const jwtToken = response.data;
//       })
//       .catch(function (error) {
//         console.log("Error: ", error);
//       });
//     }
//   })

//   return (
//     <Container component="main" maxWidth="sm">
//       <Box
//         sx={{
//           boxShadow: 4,
//           borderRadius: 2,
//           px: 4,
//           py: 6,
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Typography variant="h4" component="h4">
//           Sign in
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 onChange={handleChange}
//                 id="email"
//                 name="email"
//                 label="Email Address"
//               />
//               {errors.email && touched.email ?  <Typography variant="p" color={red[500]}>{errors.email}</Typography> : null}
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 onChange={handleChange}
//                 id="password"
//                 name="password"
//                 label="Password"
//               />
//               {errors.password && touched.password ?  <Typography variant="p" color={red[500]}>{errors.password}</Typography> : null}
//             </Grid>
//             <Grid item xs={12}>
//               <FormControlLabel
//                 control={<Checkbox value="remember" color="primary" checked required />}
//                 label="Remember me"
//               />
//             </Grid>
//           </Grid>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 1, mb: 3 }}
//           >
//             Log In
//           </Button>
//           <Grid container>
//             <Grid item xs>
//               <Link to="/reset-password" variant="body2">
//                 Forgot password?
//               </Link>
//             </Grid>
//             <Grid item>
//               {"Don't have an account? "}
//               <Link to="/signup" variant="body2">
//                 Sign Up
//               </Link>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </Container>
//   );
// }

// export default SignInForm;




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
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { signInSchema } from "./schemas";
import { red } from "@mui/material/colors";
import axios from "axios";



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

// // Function to get a cookie by name
// function getCookie(name) {
//   let matches = document.cookie.match(
//     new RegExp(
//       "(?:^|; )" + encodeURIComponent(name).replace(/[\-\.\+\*]/g, "\\$&") + "=([^;]*)"
//     )
//   );
//   return matches ? decodeURIComponent(matches[1]) : undefined;
// }

function SignInForm() {

  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };
  
  const { errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: signInSchema,
    onSubmit: (values) => {
      axios
        .post("http://192.168.68.113:3003/auth/signin", values,)
        .then(function (response) {
          console.log("Log-in response ", response);
          const jwtToken = response.data; // Adjust this line based on the actual structure of the response
          if(jwtToken !== "Unauthorized"){
            setCookie("jwtToken", jwtToken, { path: "/" });
            navigate('/employee',{state:{jwtToken}})
          }

          // You can also set an expiration date, domain, and other cookie options as needed

        })
        .catch(function (error) {
          console.log("Error: ", error);
        });
    },
  });

  // useEffect(() => {
  //   const cookies = document.cookie.split("; ");
  //   console.log("Cookies:", cookies);
  // }, []);

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
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                onChange={handleChange}
                id="email"
                name="email"
                label="Email Address"
              />
              {errors.email && touched.email ? (
                <Typography variant="p" color={red[500]}>
                  {errors.email}
                </Typography>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                onChange={handleChange}
                id="password"
                name="password"
                label="Password"
              />
              {errors.password && touched.password ? (
                <Typography variant="p" color={red[500]}>
                  {errors.password}
                </Typography>
              ) : null}
            </Grid>
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
              <Link to="/signup" variant="body2">
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
