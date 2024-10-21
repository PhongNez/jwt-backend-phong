// Get the client
const mysql = require('mysql2');


// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt',
});
// Băm password
import bcrypt from 'bcryptjs';
let salt = bcrypt.genSaltSync(10);

const hashPassword = (password) => {
    let hashPassword = bcrypt.hashSync(password, salt);

    return hashPassword
}

const getUser = () => {
    connection.query(
        'SELECT * FROM `users`',
        function (err, results) {
            console.log(results);
        }
    );
}

const createNewUser = (email, username, password) => {
    let hash = hashPassword(password);
    connection.query(
        'INSERT INTO users (email, username, password) VALUES (?,?,?)', [email, username, hash],
        function (err, results, fields) {
            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
        }
    );
}

module.exports = {
    createNewUser, getUser
}