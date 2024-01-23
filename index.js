const express = require("express")
const port = 8080

const app = express()

app.get('/', (req,res) => {
    res.send('hahahhaha')
} )

app.listen(port, () => {
    console.log(`backend service is running ${port}`)
})