import useWindowWidth2 from "./hooks/useWindowsWidth2";

function LayoutComponent() {

  const deviceName = useWindowWidth2();



  return (
    <div>
      <h1>You are browsing on {deviceName && deviceName} device</h1>
    </div>
  );
}

export default LayoutComponent;
