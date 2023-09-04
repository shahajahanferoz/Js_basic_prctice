import { Box, Button, Typography } from '@mui/material'

function SingleUserDetails(props) {
    const {detailsUser, setShowUserDetails, getUser } = props.data;
    const {firstname, lastname, email, password} = detailsUser;
  return (
    <Box
    sx={{
      marginTop: 4,
      mb: 5,
      px: 4,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gap={2}
      sx={{
        marginTop: 4,
        boxShadow: 4,
        borderRadius: 2,
        px: 4,
        py: 5,
      }}
    >
      <Box gridColumn="span 2">
        <Typography variant="h5">Name: </Typography>
      </Box>
      <Box gridColumn="span 10">
        <Typography variant="h6">{firstname + " " + lastname}</Typography>
      </Box>
      <Box gridColumn="span 2">
        <Typography variant="h5">Email: </Typography>
      </Box>
      <Box gridColumn="span 10">
        <Typography variant="h6">{email}</Typography>
      </Box>
      <Box gridColumn="span 2">
        <Typography variant="h5">Password: </Typography>
      </Box>
      <Box gridColumn="span 10">
        <Typography variant="h6">{password}</Typography>
      </Box>
    </Box>
    <Button
      variant="contained"
      onClick={() => setShowUserDetails(false)}
      sx={{ mt: 3, mb: 2 }}
    >
      Close This
    </Button>
  </Box>
  )
}

export default SingleUserDetails