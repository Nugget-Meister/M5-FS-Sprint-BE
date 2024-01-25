const app = require('./app')
require("dotenv").config()

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server launched and listening on port ${port}.`)
})