import { createPool } from "mysql2";

const config =createPool({
    host: "127.0.0.1",
    user:"root",
    password: "lufy123",
    database:"gymhulk",
    port:"3307"
})

config.getConnection((err, connection) => {
    if (err) {
        console.error('ERROR: ', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('La conexión a la base de datos fue cerrada.');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('La base de datos tiene muchas conexiones.');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('La conexión a la base de datos fue rechazada.');
        }
    }
    if (connection) {
        connection.release();
    }
    return;
})

export default config;