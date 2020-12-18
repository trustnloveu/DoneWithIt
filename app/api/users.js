import client from "./client";

// userInfo = name, email, password ...
const register = (userInfo) => client.post("/users", userInfo);

export default { register };
