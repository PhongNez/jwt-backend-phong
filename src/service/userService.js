// Get the client
import mysql from 'mysql2/promise';
import bluebird from 'bluebird';

// Create the connection to database


// Băm password
import bcrypt from 'bcryptjs';
let salt = bcrypt.genSaltSync(10);

const hashPassword = (password) => {
    let hashPassword = bcrypt.hashSync(password, salt);

    return hashPassword
}

const getUser = async () => {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'jwt',
            Promise: bluebird,
        });
        const [results, fields] = await connection.query(
            'SELECT * FROM `users`'
        );
        return results
        console.log(">> Result: ", results);
    }
    catch (e) {
        console.log("Error: ", e);
    }

}

const createNewUser = async (email, username, password) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebird,
    });
    let hash = hashPassword(password);
    const [results, fields] = await connection.query(
        'INSERT INTO users (email, username, password) VALUES (?,?,?)', [email, username, hash]
    );

}

const deleteUser = async (id) => {
    console.log("id", id);
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebird,
    });

    try {
        const [results, fields] = await connection.query(
            'DELETE FROM users WHERE id=?', [id]
        );
        console.log(results);
    } catch (e) {
        console.log(e);
    }

}

const getUserById = async (id) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebird,
    });
    try {
        const [results, fields] = await connection.query(
            'select * FROM users WHERE id=?', [id]
        );
        return results;
    } catch (e) {
        console.log(e);
    }
}

const updateUser = async (username, email, id) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebird,
    });
    try {
        console.log(username, email, id);
        const [results, fields] = await connection.query(
            ' UPDATE users SET username = ?, email = ? WHERE id=?', [username, email, id]
        );
        return results;
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    createNewUser, getUser, deleteUser, getUserById, updateUser
}