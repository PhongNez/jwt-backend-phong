
const name = "Phong"

const handleHelloWorld = (req, res) => {
    return res.render("home.ejs", { name })
}


module.exports = { handleHelloWorld }