import { Fragment } from "react"
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';

function OrderSummary() {
    const navigate = useNavigate()
  return (
    <Fragment>
        <div>Order COnfirmed</div>
        <Button variant="outlined" size="large" color="success" onClick={() => navigate(-1)}>Go Back</Button>
        {/* <button onClick={() => navigate(-1)}>Go Home</button> */}
    </Fragment>
  )
}

export default OrderSummary
// , { replace: true }