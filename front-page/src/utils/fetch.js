import axios from 'axios';

const PORT = process.env.PORT || '5567';
const MYSQLHOST = process.env.MYSQLHOST || 'localhost';

const fetch = axios.create({
  baseURL: `http://${MYSQLHOST}:${PORT}`,
  timeout: 10000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

const DBDapi = async (method, endpoint, body) => fetch
  .request({ method, url: endpoint, data: body })
    .then(({ status, data }) => ({ status, data }));

export default DBDapi