import { NavLink } from "react-router-dom"
import { useAuth } from "./auth"
import { pink } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';


function Navbar() {

    function HomeIcon(props) {
        return (
          <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </SvgIcon>
        );
      }

    const navLinkStyle =({ isActive }) => {
        return{
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? 'red' : 'blue'
        }
    }

    const auth = useAuth()

  return (
    <nav>
        <ul>
            <li>
                <NavLink style={navLinkStyle} to="/"><HomeIcon sx={{ color: pink[300] }} /></NavLink>
            </li>
            <li>
                <NavLink style={navLinkStyle} to="/about">About</NavLink>
            </li>
            {/* <li>
                <NavLink style={navLinkStyle} to="/order-summary">Order-Summary</NavLink>
            </li> */}
             <li>
                <NavLink style={navLinkStyle} to="/products">Products</NavLink>
            </li>
            <li>
                <NavLink style={navLinkStyle} to="/services">Services</NavLink>
            </li>
            <li>
                <NavLink style={navLinkStyle} to="/profile">Profile</NavLink>
            </li>
            {
                !auth.user && (
                    <li>
                <NavLink style={navLinkStyle} to="/login">Login</NavLink>
                    </li>
                )
            }
        </ul>
    </nav>
  )
}

export default Navbar