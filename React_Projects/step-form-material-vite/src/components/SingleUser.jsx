import { Button, TableCell, TableRow } from "@mui/material";
import axios from "axios";


function SingleUser(props) {
    const {singleUser, setShowUserDetails, setUser, setDetailsUser, setUserId, setShowEditForm, getUser} = props.info;

    const detailsUser = (id) => {
        setShowUserDetails(true);
        axios
          .get(`http://192.168.68.113:3002/users/${id}`)
          .then(function (response) {
            // console.log(response.data);
            setDetailsUser(response.data);
            // setUserId(id);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
      };

      const updateUser = (id) => {
        setShowEditForm(true);
        axios
          .get(`http://192.168.68.113:3002/users/${id}`)
          .then(function (response) {
            setUser(response.data);
            setUserId(id);
          })
          .catch(function (error) {
            console.log(error);
          });
      };
    

    const deleteUser = (id) => {
        axios.delete(`http://192.168.68.113:3002/users/${id}`).then((res) => {
          console.log(res);
          getUser();
        });
      };
  return (
    <TableRow hover role="checkbox" tabIndex={-1} >
      <TableCell align="center"> {singleUser.email}</TableCell>
      <TableCell align="center"> {singleUser.password}</TableCell>
      <TableCell align="center">
        <Button
          variant="outlined"
          color="secondary"
          // onClick={()=> navigate(`update/${user.id}`, {state: {user}})}
          onClick={() => detailsUser(singleUser.id)}
          sx={{ mr: 2 }}
        >
          Show Details
        </Button>
        <Button
          variant="outlined"
          color="error"
          // onClick={()=> navigate(`update/${user.id}`, {state: {user}})}
          onClick={() => updateUser(singleUser.id)}
          sx={{ mr: 2 }}
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={() => deleteUser(singleUser.id)}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default SingleUser;
