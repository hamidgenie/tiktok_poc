import axios from "axios";

const { REACT_APP_RAPID_API_KEY, REACT_APP_RAPID_API_HOST } = process.env;

export default function useApi() {
  const api = axios.create({
    baseURL: "https://tokapi-mobile-version.p.rapidapi.com/v1",
    headers: {
      common: {
        "X-RapidAPI-Key": REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": REACT_APP_RAPID_API_HOST,
      },
    },
  });

  return { api };
}
