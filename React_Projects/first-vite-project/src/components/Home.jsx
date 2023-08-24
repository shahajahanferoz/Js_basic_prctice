import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';

export const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
        <div>THis is HOme PAGE</div>
        <Button variant="contained" color="success" size="medium" onClick={() => navigate('order-summary')}>Place Order</Button>
        {/* <button onClick={() => navigate('order-summary')}>Place Order</button> */}
    </div>
  )
}
