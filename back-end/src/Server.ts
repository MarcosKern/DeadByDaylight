import 'dotenv/config'
import App from "./App";

const PORT = process.env.PORT || '3306';
const app = new App();

app.start(PORT)