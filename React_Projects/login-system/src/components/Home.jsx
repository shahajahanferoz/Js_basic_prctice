import { Fragment, useState } from "react"
import SideNav from "./SideNav"
import { Box } from "@mui/material"
import NavBar from "./NavBar"


function Home() {
  const [isCollapsed, setIsCollapsed] = useState(localStorage.getItem('open') || 'false')

  // console.log('isCollapsed', isCollapsed)
  
  return (
    <Fragment>
      <NavBar setIsCollapsed={setIsCollapsed}/>
      <Box height={30} />
      <Box sx={{ display: 'flex' }}>
      <SideNav isCollapsed={isCollapsed} />
      <Box component={'main'} sx={{ flexGrow: 1, p: 3}}>
        <h1>Home</h1>
      </Box>
      </Box>
    </Fragment>
  )
}

export default Home