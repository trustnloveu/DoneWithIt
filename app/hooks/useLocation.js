import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  // Location Data Change
  const [location, setLocation] = useState();

  // getLocation with Permission, so long as user permisson is gained
  const getLocation = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync();

      if (!granted) return;

      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();

      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };

  // call getLocation function
  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
