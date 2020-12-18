import { useState } from "react";

// apiFunc = listingsApi.getListings()
export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true); // loading before connection
    const response = await apiFunc(...args); // This is where we actually call the target API function.      You can encapsulate all the logic for calling APIs inside a single reusable function
    setLoading(false); // connecting is complete > Loading is ended

    setError(!response.ok); // error check >   // request is successfull or not
    setData(response.data);
    return response;
  };

  return { data, error, loading, request };
};
