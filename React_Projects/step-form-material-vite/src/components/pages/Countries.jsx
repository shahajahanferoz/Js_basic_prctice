import { Fragment } from "react"
import Sidenav from "../Sidenav"
import { Box, Button, Stack, Typography } from "@mui/material"
import Navbar from "../Navbar"
import AddIcon from '@mui/icons-material/Add';
import { teal } from '@mui/material/colors';
import CountryTable from "../CountryTable";
import axios from 'axios';


function Countries() {

    const getCountryData = () => {
        // console.log("hello")

        // Make a request for a user with a given ID
        axios.get('http://192.168.68.106:3001/api/v1/public/countries')
        .then(function (response) {
        console.log(response.data.payload.countries[0].name);
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
        .finally(function () {
        // always executed
        });
    }
    
  return (
    <Fragment>
        <Navbar />
      <Box height={30} />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Box height={12} sx={{bgcolor: '#2f2f2f'}} />
          <Stack direction="row" justifyContent="space-between"  sx={{mb: 2}} >
            <Typography variant="h3" component="h3" >Countries</Typography>
            <Button size="large" variant="contained"  startIcon={<AddIcon />} sx={{background: teal[800]}} onClick={getCountryData}>
                Country
            </Button>
          </Stack>

          <CountryTable />

        </Box>
      </Box>
    </Fragment>
  )
}

export default Countries
