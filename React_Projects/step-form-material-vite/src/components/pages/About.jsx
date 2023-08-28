
import { Fragment } from "react"
import Sidenav from "../Sidenav"
import { Box } from "@mui/material"
import Navbar from "../Navbar"

function About() {
  return (
    <Fragment>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>About</h1>
        </Box>
      </Box>

    </Fragment>
  )
}

export default About