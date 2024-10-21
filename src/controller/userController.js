
import userService from '../service/userService'

const handleUser = (req, res) => {
    console.log("User: ", req.body);
    return res.render('user.ejs')
}

const handleCreatNewUser = (req, res) => {
    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password;

    // Tạo 1 user 
    // userService.createNewUser(email, username, password)

    // lấy danh sách user
    userService.getUser();

    return res.send("Create new user")
}

module.exports = {
    handleUser,
    handleCreatNewUser
}