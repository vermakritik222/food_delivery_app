import axios from "axios";

const api = axios.create({
  //   baseURL: process.env.REACT_APP_API_BASE_URL,
  baseURL: "http://localhost:8000/api/v1",
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

export const getRestaurants = () => {
  return api.get("/restaurants");
};

export const getRestaurantsMetadata = async (metadataId) => {
  return await api.get(`/restaurants/${metadataId}`);
};
