import axios from 'axios';

const PROTOCOL = process.env.REACT_APP_PROTOCOL || 'http'
const MYSQLHOST = process.env.REACT_APP_MYSQLHOST || 'localhost';

const fetch = axios.create({
  baseURL: `${PROTOCOL}://${MYSQLHOST}`,
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