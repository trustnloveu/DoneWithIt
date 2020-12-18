import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

// DefaultTHeme is just a JavaScript Object with a bunch of properties.
// Copy -> Override by using Spread Operator

//  const myTheme =  >>>   export default
export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};
