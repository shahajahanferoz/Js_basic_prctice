
import useWindowWidth from "./hooks/useWindowWidth";


function LayoutComponent() {

  const onSmallScreen = useWindowWidth(850);

  return (
    <div>
        <h1>You are browsing on {onSmallScreen ? 'small' : 'large'} device</h1>
    </div>
  )
}

export default LayoutComponent