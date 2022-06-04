import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
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

export const postRestaurantsItemId = async (itemId) => {
  return await api.post(`/restaurants/itemsdata`, { oderIds: itemId });
};

export const postOder = async (data) => {
  return await api.post(`/oder/place`, { data });
};
