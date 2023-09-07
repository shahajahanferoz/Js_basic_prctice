import useWindowWidth from "./hooks/useWindowWidth";


function LayoutComponentTwo() {

  const onSmallScreen = useWindowWidth();

  return (
    <div className={onSmallScreen ? 'small' : 'large'}>
        <h1>This is another component</h1>
    </div>
  )
}

export default LayoutComponentTwo