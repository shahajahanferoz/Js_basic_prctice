import { useNavigate } from "react-router-dom"

export const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
        <div>THis is HOme PAGE</div>
        <button onClick={() => navigate('order-summary')}>Place Order</button>
    </div>
  )
}
