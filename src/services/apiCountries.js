const BASE_URL = 'https://github.com/lennertVanSever/graphcountries';

const fetchApi = async () => {
  const response = await fetch(BASE_URL);
  const result = await response.json()
  return result;
}

export default fetchApi;