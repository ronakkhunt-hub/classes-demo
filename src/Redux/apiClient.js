import axios from "axios";

export const getOptions = async (url) => {
  return await axios.get(url);
};

export const postOptions = async (url, data) => {
  return await axios.post(url, JSON.stringify(data), {
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
};
