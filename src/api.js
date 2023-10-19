import axios from "axios";

const apiKey = '0c1e89b9ded609b03f6b23eba7068d6d';
const baseUrl = 'https://api.themoviedb.org/3';

const fetchTopMovies = {
  method: 'GET',
  url: `${baseUrl}/trending/all/day`,
  params: {
    language: 'en-US',
  },
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
};

axios(fetchTopMovies)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

export default fetchTopMovies;