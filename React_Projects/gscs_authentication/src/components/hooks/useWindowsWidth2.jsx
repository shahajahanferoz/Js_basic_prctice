import { useEffect, useMemo, useState } from "react";

const useWindowWidth2 = () => {
  const [screenSize, setScreenSize] = useState(0);
  const [deviceType, setDeviceType] = useState("Desktop");

  const deviceName = useMemo(() => {
    if (screenSize <= 680 && screenSize > 200) {
      setDeviceType("Mobile");
      return deviceType;
    } else if (screenSize > 680 && screenSize < 1280) {
      setDeviceType("Tab");
      return deviceType;
    } else if (screenSize > 1280) {
      setDeviceType("Desktop");
      return deviceType;
    } else {
      setDeviceType("watch");
      return deviceType;
    }
  }, [screenSize, deviceType]);

  //   const checkScreenSize = useCallback(() => {
  //     setScreenSize(window.innerWidth);
  //   },[]);

  useEffect(() => {
    const checkScreenSize = () => {
      setScreenSize(window.innerWidth);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  // }, [screenSize]);

  return deviceName;
};

export default useWindowWidth2;
