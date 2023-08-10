import axios from "axios";

const Base_Url = "https://youtube-v3-alternative.p.rapidapi.com";

const options = {
  url: Base_Url,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key":'c9786b82a0msh3c967b3033edf02p142cb6jsnfe3260ddb3ae',
    "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${Base_Url}/${url}`, options);

  return data;
};
