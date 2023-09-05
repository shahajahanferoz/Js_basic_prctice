import { Fragment } from "react";
import Sidenav from "../Sidenav";
import Navbar from "../Navbar";
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import "../../Dash.css"
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccordionDash from "../AccordionDash";
import BarChart from "../chart/BarChart";
import CountUp from 'react-countup';

function Home() {
  return (
    <Fragment >
      <div className="bg-color">
        <Navbar />
       <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction="row">
                <Card className="gradient" sx={{ minWidth: 49 + '%', height: 150, }}>
                  <CardContent >
                  <div className="icon-style"><CreditCardIcon /></div>
                    <Typography gutterBottom variant="h5" component="div" sx={{color: '#fff'}}>
                      $<CountUp delay={0.1} end={32000} duration={1}  />
                    </Typography>
                    <Typography gutterBottom  variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                      Total Earning
                    </Typography>
                  </CardContent>
                </Card>
                <Card  sx={{ minWidth: 49 + '%', height: 150  }}>
                  <CardContent className="gradient-light">
                    <div className="icon-style"><ShoppingBagIcon /></div>
                    <Typography gutterBottom variant="h5" component="div" sx={{color: '#fff'}}>
                      $<CountUp delay={0.1} end={7600} duration={1}  />
                    </Typography>
                    <Typography gutterBottom  variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                      Total Order
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
              <Card sx={{ maxWidth: 345 }} >
                  <Stack spacing={2} direction="row" className="gradient-light">
                      <div className="icon-style"><StorefrontIcon /></div>
                      <div className="padding-all">
                      <Stack>
                      <span className="price-title">$203k</span>
                      <span className="price-subtitle">Total Income</span>
                      </Stack>
                      </div>
                  </Stack>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                  <Stack spacing={2} direction="row">
                      <div className="icon-style-black"><StorefrontIcon /></div>
                      <div className="padding-all">
                      <Stack>
                      <span className="price-title">$203k</span>
                      <span className="price-subtitle">Total Income</span>
                      </Stack>
                      </div>
                    </Stack>
                </Card>
              </Stack>
            </Grid>
          </Grid>

          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 60 + 'vh'  }}>
                  <CardContent>
                    <BarChart />
                  </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: 60 + 'vh' }}>
                  <CardContent>
                    <div className="padding-all">
                      <span className="price-title">Popular Product</span>
                    </div>
                    <AccordionDash />
                  </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
      </div>
     
    </Fragment>
  );
}

export default Home;
