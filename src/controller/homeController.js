
const name = "Phong"

const handleHelloWorld = (req, res) => {
    console.log("Home: ", req.body);
    return res.render("home.ejs", { name })
}


module.exports = { handleHelloWorld }