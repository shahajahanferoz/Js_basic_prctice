import  Typography  from "@mui/material/Typography" 
import Button from '@mui/material/Button';
import { Box } from "@mui/material";

export const MuiTypography = () => {
  return (
    <Box sx={{
      width: '100vw',
      display: 'flex', justifyContent: 'center',
      backgroundColor: 'primary.dark',
      '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
      },
    }}>
        <Box sx={{
        }}>
        <Typography variant='h1'>h1 Heading</Typography>
        <Typography variant='h2'>h2 Heading</Typography>
        <Typography variant='h3'>h3 Heading</Typography>
        <Typography variant='h4'>h4 Heading</Typography>
        <Typography variant='h5'>h5 Heading</Typography>
        <Typography variant='h6'>h6 Heading</Typography>

        <Typography variant='subtitle1'>subtitle 1</Typography>
        <Typography variant='subtitle2'>subtitle 2</Typography>
        </Box>
    </Box>
  )
}

export const ButtonUsage = ()=> {
  return <Button variant="contained">Hello world</Button>;
}