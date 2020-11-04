import axios from 'axios';

const baseUrl = 'https://fir-cows-958ae.firebaseio.com/react-goats';

const getGoats = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}.json`).then((response) => {
    const goatResponse = response.data;
    resolve(Object.values(goatResponse));
  }).catch((error) => reject(error));
});

export default { getGoats };
