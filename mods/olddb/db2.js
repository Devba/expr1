const mariadb = require('mariadb');

async function asyncFunction(s) {
    const conn = await mariadb.createConnection({
        host: "1mag1na.xyz",
        user: "hoaddbb",
        password: "VFSAME",
    });

    try {
        const res = await conn.query(s, [2]);
        console.log(res); // [{ "1": 1 }]
        return res;
    } finally {
        conn.end();
    }
}
let sql="select * from hoacontabo.AuthRates";
asyncFunction(sql);