import 'dotenv/config'
import App from "./App";

const PORT = process.env.MYSQLPORT || '3306';
const app = new App();

app.start(PORT)