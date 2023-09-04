import LockPersonIcon from "@mui/icons-material/LockPerson";
import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import axios from "axios";

function SinglaUserEdit(props) {
    const {user, editId, setUser, getUser, setShowEditForm} = props.data;
    const {firstname, lastname, email, password} = user;


    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
      };
      const handleUpdate = (event) => {
        event.preventDefault();
    
        axios
          .put(`http://192.168.68.113:3002/users/${editId}`, user)
          .then(function (response) {
            console.log(response);
            getUser();
          })
          .catch(function (error) {
            console.log("Error :", error);
          });
    
        setUser(() => ({ firstname: "", lastname: "", email: "", password: "" }));
      };

  return (
    <Box
          sx={{
            marginTop: 8,
            mb: 5,
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
            Update Data
          </Typography>
          <Box
            component="form"
            onSubmit={handleUpdate}
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
                  value={firstname}
                  onChange={handleChange}
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
                  value={lastname}
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
              Update
            </Button>
          </Box>
            <Button
              variant="contained"
              onClick={() => setShowEditForm(false)}
              sx={{ mt: 3, mb: 2 }}
            >
              Close This Form
            </Button>
        </Box>
  )
}

export default SinglaUserEdit