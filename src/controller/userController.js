
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

const getUpdateUser = async (req, res) => {
    let id = req.params.id;
    console.log(">>>update Params: ", id);
    let userData = {};
    let user = await userService.getUserById(id);

    if (user && user.length > 0) {
        //   Mảng có phần tử thì mới gán
        userData = user[0];
    }
    console.log("User Data: ", user);
    return res.render("update-user.ejs", { userData })
}

const handleUpdateUser = async (req, res) => {
    let email = req.body.email;
    let username = req.body.username;
    let id = req.body.userId
    console.log("email: ", email);
    console.log("username: ", username);
    console.log("id: ", id);
    await userService.updateUser(username, email, id)

    return res.redirect("/user")
}
module.exports = {
    handleUser,
    handleCreatNewUser,
    handleDeleteUser,
    getUpdateUser,
    handleUpdateUser
}