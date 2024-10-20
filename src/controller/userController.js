// Get the client
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt',
});

const handleUser = (req, res) => {
    return res.render('user.ejs')
}

const handleCreatNewUser = (req, res) => {
    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password;


    connection.query(
        'INSERT INTO users (email, username, password) VALUES (?,?,?)', [email, username, password],
        function (err, results, fields) {
            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
        }
    );
    return res.send("Create new user")
}

module.exports = {
    handleUser,
    handleCreatNewUser
}