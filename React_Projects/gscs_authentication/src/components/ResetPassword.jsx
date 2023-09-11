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
import { Link } from "react-router-dom";

const ResetButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    //   backgroundColor: purple[700],
    backgroundColor: purple[700],
  },
}));

function ResetPassword() {
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
          <TextField
            margin="normal"
            required
            fullWidth
            id="fogetMail"
            label="Username or email"
            variant="standard"
          />
          {/* <ResetButton
            type="submit"
            variant="contained"
            // size="large"
            // sx={{ mt: 1, mb: 3 }}
          >
            Reset Password
          </ResetButton>
           */}

          <Grid container justifyContent="space-between" alignItems={"center"} sx={{ mb: 0, mt: 1 }}>
            <Grid item>
                <ResetButton type="submit" variant="contained">Reset Password</ResetButton>
            </Grid>
            <Grid item>
              Go for {}
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

export default ResetPassword;
