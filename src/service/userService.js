// Get the client
import mysql from 'mysql2/promise';
import bluebird from 'bluebird';
import db from '../models/index'
// Create the connection to database


// Băm password
import bcrypt from 'bcryptjs';
import { where } from 'sequelize/lib/sequelize';
import { raw } from 'body-parser';
let salt = bcrypt.genSaltSync(10);

const hashPassword = (password) => {
    let hashPassword = bcrypt.hashSync(password, salt);

    return hashPassword
}

const getUser = async () => {


    // try {
    //     const connection = await mysql.createConnection({
    //         host: 'localhost',
    //         user: 'root',
    //         database: 'jwt',
    //         Promise: bluebird,
    //     });
    //     const [results, fields] = await connection.query(
    //         'SELECT * FROM `user`'
    //     );
    //     return results
    //     console.log(">> Result: ", results);
    // }
    // catch (e) {
    //     console.log("Error: ", e);
    // }

    let newUser = await db.User.findOne({
        where: {
            id: 1
        },
        attributes: ['id', 'email', 'password'],
        include: {
            model: db.Group,
            attributes: ['name', 'description'],
        },
        raw: true, nest: true
    })

    console.log("Test: ", newUser);

    // let newRole = await db.Group.findOne({
    //     where: {
    //         id: 1
    //     },
    //     include: { model: db.Role }
    //     , raw: true, nest: true
    // })

    // console.log("Test group: ", newRole);

    let getRole = await db.Role.findAll({
        include: {
            model: db.Group,
            where: {
                id: 1
            }
        }, raw: true, nest: true
    })
    console.log("Test role: ", getRole);

    let users = [];
    users = await db.User.findAll();
    console.log("users: ", users[0] && users[0].username);
    return users



}

const createNewUser = async (email, username, password) => {

    let hash = hashPassword(password);
    try {
        const user = await db.User.create({
            email: email,
            password: password,
            username: username
        });
    } catch (err) {
        console.log("Lỗi:", err);
    }

}

const deleteUser = async (id) => {
    // console.log("id", id);
    // const connection = await mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     database: 'jwt',
    //     Promise: bluebird,
    // });

    // try {
    //     const [results, fields] = await connection.query(
    //         'DELETE FROM user WHERE id=?', [id]
    //     );
    //     console.log(results);
    // } catch (e) {
    //     console.log(e);
    // }

    await db.User.destroy({
        where: {
            id: id
        }
    })

}

const getUserById = async (id) => {
    // const connection = await mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     database: 'jwt',
    //     Promise: bluebird,
    // });
    // try {
    //     const [results, fields] = await connection.query(
    //         'select * FROM user WHERE id=?', [id]
    //     );
    //     return results;
    // } catch (e) {
    //     console.log(e);
    // }

    let user = {};
    user = await db.User.findOne({
        where: {
            id
        }
    })
    return user.get({ plain: true });
}

const updateUser = async (username, email, id) => {
    // const connection = await mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     database: 'jwt',
    //     Promise: bluebird,
    // });
    // try {
    //     console.log(username, email, id);
    //     const [results, fields] = await connection.query(
    //         ' UPDATE user SET username = ?, email = ? WHERE id=?', [username, email, id]
    //     );
    //     return results;
    // } catch (e) {
    //     console.log(e);
    // }


    await db.User.update(
        {
            username: username, email: email
        }
        , {
            where: {

                id: id
            }
        }
    )
}

module.exports = {
    createNewUser, getUser, deleteUser, getUserById, updateUser
}