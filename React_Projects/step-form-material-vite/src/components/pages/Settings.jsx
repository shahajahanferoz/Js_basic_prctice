import { Fragment } from "react"
import Sidenav from "../Sidenav"
import { Box } from "@mui/material"
import Navbar from "../Navbar"

function Settings() {
  return (
    <Fragment>
        <Navbar />
      <Box height={30} />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Settings</h1>
        </Box>
      </Box>

    </Fragment>
  )
}

export default Settings