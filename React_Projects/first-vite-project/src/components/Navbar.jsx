import { NavLink } from "react-router-dom"
import { useAuth } from "./auth"

function Navbar() {

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
                <NavLink style={navLinkStyle} to="/">Home</NavLink>
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