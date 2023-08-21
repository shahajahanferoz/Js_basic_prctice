import { useParams } from "react-router-dom"

export default function UserDetails() {
  const {userId} = useParams()

  return (
    <div>THis is UserDetails Page {userId}</div>
  )
}
