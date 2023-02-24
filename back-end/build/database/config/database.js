"use strict";
require("dotenv/config");
const config = {
    username: process.env.MYSQLUSER || 'root',
    password: process.env.MYSQLPASSWORD || 'password',
    database: process.env.MYSQLDATABASE || 'dbname',
    host: process.env.MYSQLHOST || 'localhost',
    port: Number(process.env.MYSQLPORT) || 3307,
    dialect: 'mysql',
    dialectOptions: {
        timezone: 'Z',
    },
    logging: false,
};
module.exports = config;
