const express = require("express")
const { use } = require("express/lib/application")
const { sendFile } = require("express/lib/response")
const path = require("path")
const app = express()
const pathToIndex = '../client/index.html'
path.resolve(__dirname, '../client/index.html') = pathToIndex
app.use('/*', (req, res) => {
    res.sendFile(pathToIndex)
})
module.exports(app)
