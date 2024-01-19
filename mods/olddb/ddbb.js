// Required Modules
const mariadb = require("mariadb");

// Main function
async function main() {
    let conn;

    try {
        conn = await mariadb.createConnection({
            host: "1mag1na.xyz",
            user: "hoaddbb",
            password: "VFSAME",
            database: "hoacontabo",
        });

        await print_contacts(conn);
    } catch (err) {
        // Manage Errors
        console.log(err);
    } finally {
        // Close Connection
        if (conn) conn.close();
    }
}

// Print list of contacts
function print_contacts(conn) {
    return new Promise(
        (resolve, reject) => {
            resolve(
                conn
                    .queryStream("select * from hoacontabo.AuthRates")
                    .on("error", (err) => {
                        console.error("Issue retrieving contact information", err);
                    })
                    .on("fields", (meta) => {
                        console.error("Field Metadata:", meta);
                    })
                    .on("data", (row) => {
                        console.log(`${row.first_name} ${row.last_name} <${row.email}>`);
                    })
            )
        }
    );
}
module.exports =main()
//main();
