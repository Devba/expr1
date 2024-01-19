// Required Modules
const mariadb = require("mariadb");

//Initialize Pool
const pool = mariadb.createPool({
    host: "1mag1na.xyz",
    user: "hoaddbb",
    password: "VFSAME",
    database: "hoacontabo",
    connectionLimit: 100,
});

console.log("Total connections: ", pool.totalConnections());
console.log("Active connections: ", pool.activeConnections());
console.log("Idle connections: ", pool.idleConnections());

async function main() {
    let conn;

    try {
        conn = await fetchConn();

        // Use Connection
        var rows = await get_contacts(conn);
        for (i = 0, len = rows.length; i < len; i++) {

            let d=new Date().toISOString();
            console.log(d);
            console.log("Total connections: ", pool.totalConnections());
            console.log("Active connections: ", pool.activeConnections());
            console.log("Idle connections: ", pool.idleConnections());

            console.log(`${rows[i].first_name} ${rows[i].last_name} <${rows[i].email}>`);
        }
    } catch (err) {
        // Manage Errors
        console.log(err);
    } finally {
        // Close Connection
        if (conn) conn.end();
    }
}

// Fetch Connection
async function fetchConn() {
    let conn = await pool.getConnection();
    console.log("Total connections: ", pool.totalConnections());
    console.log("Active connections: ", pool.activeConnections());
    console.log("Idle connections: ", pool.idleConnections());
    return conn;
}

//Get list of contacts
async function get_contacts(conn) {
    return await conn.query("select * from hoacontabo.AuthRates");
}
main();
