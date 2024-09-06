const mysql = require("mysql2")

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'CTPI2024*',
    database: "gestion" 

})

db.connect((e) => {
    if (e) {
        console.log("error en la conexion")
    }
    else {
        console.log("conectado a mi sql")
    }
})


module.exports = db