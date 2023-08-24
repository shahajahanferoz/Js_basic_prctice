import { useNavigate } from "react-router-dom"
import { useAuth } from "./auth"
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const Profile = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    auth.logout()
    navigate('/')
  }

  return (
    <div>Welcome to {auth.user} Profile.
    <Button variant="outlined" color="success" startIcon={<ExitToAppIcon />} onClick={handleLogout} > Logout </Button>
     
    <IconButton aria-label="Logout Button" color="success" onClick={handleLogout}>
      <LogoutIcon />
    </IconButton>
    </div>
  )
}
