
import { Box, Button, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

const primary = purple[800]; // #f44336

function Dashboard() {
  const navigate = useNavigate();



  const logOut = ()=>{
    document.cookie='loginToken=; expires=Thu, 01 jan 1970 00:00:01 GMT;';
    navigate('/signin')
  }

  return (
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: primary,
    }}
  >
    <Typography variant="h1" style={{ color: 'white' }}>
      Welcome To Dash Board
    </Typography>
    <Typography variant="h6" style={{ color: 'white' }}>
      If you want to check authentication click log out
    </Typography>
    <Button variant="contained" onClick={()=>logOut()}>Logout</Button>
  </Box>
  )
}

export default Dashboard