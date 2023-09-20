import { Fragment, useState } from "react"
import SideNav from "./SideNav"
import { Avatar, Box, Button, Card, CardContent, Grid, LinearProgress, List, ListItem, ListItemText, Typography } from "@mui/material"
import NavBar from "./NavBar"
import { Facebook, GitHub, Instagram, Language, Person, Twitter } from "@mui/icons-material"


const UserProfileTwo = () => {
  
  const [isCollapsed, setIsCollapsed] = useState(localStorage.getItem('open') || 'false')
  return (
    <Fragment>
      <NavBar setIsCollapsed={setIsCollapsed}/>
      <Box height={50} />
      <Box sx={{ display: 'flex' }}>
      <SideNav isCollapsed={isCollapsed} />
      <Box component={'main'} sx={{ flexGrow: 1, p: 3}}>

      {/* <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card elevation={3}>
            <CardContent>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Grid item>
                  <Avatar
                    sx={{
                      width: 150,
                      height: 150,
                      backgroundColor: "primary.main",
                    }}
                  >
                    <Person sx={{ fontSize: 60 }} />
                  </Avatar>
                </Grid>
                <Grid item>
                  <div>
                    <Typography variant="h4">John Doe</Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "text.secondary" }}
                    >
                      Full Stack Developer
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", fontSize: "0.875rem" }}
                    >
                      Bay Area, San Francisco, CA
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ marginTop: 2 }}
                    >
                      Follow
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      sx={{ marginTop: 1 }}
                    >
                      Message
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6">Full Name</Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Kenneth Valdez
              </Typography>
              <hr /> 
              <Typography variant="h6">Full Name</Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Kenneth Valdez
              </Typography>
              <hr />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card elevation={3} sx={{ marginTop: 2 }}>
            <CardContent>
              <List>
                <ListItem>
                  <Language fontSize="small" sx={{ marginRight: 2 }} />
                  <ListItemText
                    primary="Website"
                    secondary="https://bootdey.com"
                  />
                </ListItem>
                <ListItem>
                  <GitHub fontSize="small" sx={{ marginRight: 2 }} />
                  <ListItemText primary="Github" secondary="bootdey" />
                </ListItem>
                <ListItem>
                  <Twitter fontSize="small" sx={{ marginRight: 2 }} />
                  <ListItemText primary="Twitter" secondary="@bootdey" />
                </ListItem>
                <ListItem>
                  <Instagram fontSize="small" sx={{ marginRight: 2 }} />
                  <ListItemText primary="Instagram" secondary="bootdey" />
                </ListItem>
                <ListItem>
                  <Facebook fontSize="small" sx={{ marginRight: 2 }} />
                  <ListItemText primary="Facebook" secondary="bootdey" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card elevation={3} sx={{ marginTop: 2 }}>
            <CardContent>
              <div>
                <Typography variant="h6">Project Status</Typography>
                <LinearProgress
                  variant="determinate"
                  value={80}
                  sx={{ height: 5, marginTop: 1 }}
                />
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Web Design
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={72}
                  sx={{ height: 5, marginTop: 1 }}
                />
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Website Markup
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={89}
                  sx={{ height: 5, marginTop: 1 }}
                />
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  One Page
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={55}
                  sx={{ height: 5, marginTop: 1 }}
                />
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Mobile Template
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={66}
                  sx={{ height: 5, marginTop: 1 }}
                />
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Backend API
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card elevation={3} sx={{ marginTop: 2 }}>
            <CardContent>
              <div>
                <Typography variant="h6">Project Status</Typography>
                <LinearProgress
                  variant="determinate"
                  value={80}
                  sx={{ height: 5, marginTop: 1 }}
                />
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Web Design
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={72}
                  sx={{ height: 5, marginTop: 1 }}
                />
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Website Markup
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={89}
                  sx={{ height: 5, marginTop: 1 }}
                />
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  One Page
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={55}
                  sx={{ height: 5, marginTop: 1 }}
                />
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Mobile Template
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={66}
                  sx={{ height: 5, marginTop: 1 }}
                />
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Backend API
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid> */}

      <Grid container spacing={3}>
        <Grid item xs={3}>
          Profile Part
        </Grid>
        <Grid item xs={9} >
          details part
        </Grid>
      </Grid>
      </Box>
      </Box>
    </Fragment>
  )
}

export default UserProfileTwo




