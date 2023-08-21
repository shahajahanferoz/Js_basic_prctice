import { Fragment } from "react"
import { useNavigate } from "react-router-dom"

function OrderSummary() {
    const navigate = useNavigate()
  return (
    <Fragment>
        <div>Order COnfirmed</div>
        <button onClick={() => navigate(-1)}>Go Home</button>
    </Fragment>
  )
}

export default OrderSummary
// , { replace: true }