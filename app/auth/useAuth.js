import { useContext } from "react";
import AuthContext from "./context";
import authStorage from "./storage";
import JwtDecode from "jwt-decode";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const login = (authToken) => {
    const user = JwtDecode(authToken); // console.log(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
  };

  const logout = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, login, logout };
};
