import { NavLink } from "react-router-dom"

function Navbar() {

    const navLinkStyle =({ isActive }) => {
        return{
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? 'red' : 'blue'
        }
    }
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
        </ul>
    </nav>
  )
}

export default Navbar