
import userService from '../service/userService'

const handleUser = async (req, res) => {
    console.log("User: ", req.body);
    // lấy danh sách user
    let userList = await userService.getUser();
    // await userService.deleteUser(4)
    return res.render('user.ejs', { userList })
}

const handleCreatNewUser = async (req, res) => {
    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password;

    // Tạo 1 user 
    await userService.createNewUser(email, username, password)



    return res.redirect("/user")
}

const handleDeleteUser = async (req, res) => {
    console.log('Check params:', req.params.id);
    await userService.deleteUser(req.params.id)
    return res.redirect("/user")
}

module.exports = {
    handleUser,
    handleCreatNewUser,
    handleDeleteUser
}