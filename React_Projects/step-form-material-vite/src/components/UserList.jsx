import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from "@mui/material";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import { Outlet, useNavigate } from "react-router-dom";


const columns2 = [
  { id: "userName", label: "User Name", align: "center", minWidth: 170 },
  { id: "userPassword", label: "Password", align: "center", minWidth: 100 },
];

export default function UserList() {
  ////////////////////////////////////////////////////////////////////////////
  const navigate = useNavigate();
  const [users, setUsers] = React.useState([]);

  const getUser = () => {
    axios
      .get("http://192.168.68.113:3002/users")
      .then(function (response) {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  React.useEffect(() => {
    getUser();
  }, []);

  ///////////////////////////

  const [showEditForm, setShowEditForm] = React.useState(false);

  const [editId, setUserId] = React.useState(0)
  const [user, setUser] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  let {firstname, lastname, email, password} = user;

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
    
    setUser(()=>({firstname:'',lastname:'',email:'',password:''}))

  };

  const updateUser = (id) => {
    setShowEditForm(true);
    axios
    .get(`http://192.168.68.113:3002/users/${id}`)
    .then(function (response) {
      // console.log(response.data);
      setUser(response.data);
      setUserId(id)

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }

  const deleteUser = (id) => {
    axios.delete(`http://192.168.68.113:3002/users/${id}`).then((res) => {
      console.log(res);
      getUser();
    });
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%" }}>
      {/* <Outlet /> */}
      {
        showEditForm && 
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
            <Button
            variant="contained"
            onClick={()=> setShowEditForm(false)}
            sx={{ mt: 3, mb: 2 }}
        >
            Close This Form
        </Button>
            </Box>
        </Box>
      }


      <TableContainer sx={{ maxHeight: 530 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Typography variant="h6">Users</Typography>
              </TableCell>
              <TableCell align="center" colSpan={2}>
                <Typography variant="h6" fontWeight="bold">
                  Details
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              {columns2.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  <Typography variant="body2" fontWeight="bold">
                    {column.label}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={user.id}>
                    <TableCell align="center"> {user.email}</TableCell>
                    <TableCell align="center"> {user.password}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="outlined"
                        color="error"
                        // onClick={()=> navigate(`update/${user.id}`, {state: {user}})}
                        onClick={() => updateUser(user.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => deleteUser(user.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
