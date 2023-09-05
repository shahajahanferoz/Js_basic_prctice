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
import { Typography } from "@mui/material";
import SingleUser from "./SingleUser";
import SingleUserDetails from "./SingleUserDetails";
import SinglaUserEdit from "./SinglaUserEdit";

const columns2 = [
  { id: "userName", label: "User Name", align: "center", minWidth: 170 },
  { id: "userPassword", label: "Password", align: "center", minWidth: 100 },
  { id: "others", label: "others", align: "center", minWidth: 100 },
];

export default function UserList() {
  const [users, setUsers] = React.useState([]);
  const [showEditForm, setShowEditForm] = React.useState(false);
  const [showUserDetails, setShowUserDetails] = React.useState(false);
  const [editId, setUserId] = React.useState(0);
  const [user, setUser] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [detailsUser, setDetailsUser] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });


  React.useEffect(() => {
    axios
    .get("http://192.168.68.113:3002/users")
    .then(function (response) {
      setUsers(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);

  

  console.log('users', users)
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
      {showEditForm && (
        <SinglaUserEdit
          data={{
            user,
            editId,
            setUser,
            users,
            setUsers,
            setShowEditForm,
          }}
        />
      )}

      {showUserDetails && (
        <SingleUserDetails
          data={{ detailsUser, setShowUserDetails }}
        />
      )}

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
                  <SingleUser
                    data={{
                      singleUser: user,
                      setShowUserDetails,
                      setUser,
                      setDetailsUser, 
                      setUserId,
                      setShowEditForm,
                      users,
                      setUsers,
                    }}
                    key={user.id}
                  />
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
