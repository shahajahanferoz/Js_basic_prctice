import { Container } from "@mui/material"
import DetailedStatisticsCard from "./DetailedStatisticsCard"
import Sidenav from "./Sidenav"

function Dashboard() {
  return (
    <Container>
        <Sidenav />
        <DetailedStatisticsCard />
    </Container>
  )
}

export default Dashboard