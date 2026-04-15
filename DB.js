const mysql = require("mysql2/promise");

async function main() {
  try {
    const connection = await mysql.createConnection({
      host: "mysql-fecc38f-databaseproject.b.aivencloud.com",
      port: 14683,
      user: "avnadmin",
      password: process.env.DB_PASSWORD, 
      database: "defaultdb",
      ssl: {
        rejectUnauthorized: false
      }
    });

    console.log("Connected successfully!");

    const sql = `
      CREATE TABLE IF NOT EXISTS User_Profile (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        date_joined DATE,
        username VARCHAR(50) NOT NULL
      )
    `;

    await connection.execute(sql);

    console.log("Table created successfully.");

    await connection.end();
  } catch (err) {
    console.error("Error:", err.message);
  }
}

main();