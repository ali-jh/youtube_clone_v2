import axios from "axios";

const Base_Url = "https://youtube-v3-alternative.p.rapidapi.com/search";

const options = {
  url: Base_Url,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${Base_Url}/${url}`, options);

  return data;
};
