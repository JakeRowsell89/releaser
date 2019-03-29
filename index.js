require('dotenv').config()
const express = require('express')
const http = require('http')
const request = require('request-promise')
const getTicket = require('./getTicket')
const getComponent = require('./getComponents')
const create = require('./create')
const getNextReleaseWindow = require('./businessCases')
const addReleaseTicketToTicket = require('./addCommentToTicket')
var bodyParser = require('body-parser');

const team = {
  id: '21214',
  name: 'LEGO'
}
let releaseDate;

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/book', (req, res) => {
  const ticket = req.body.text.toUpperCase()

  getTicket(ticket)
    .then(JSON.parse)
    .then(getComponent)
    .then((component) => {
      res.send(`Creating your release ticket for ${ticket}`)
      const release = getNextReleaseWindow.logic(ticket)
      releaseDate = release.format()
      return component
    })
    .then(component => create(ticket, team, component, releaseDate))
    .then(JSON.parse)
    .then((releaseTicket) => {
      const url = `https://comparethemarket.atlassian.net/secure/RapidBoard.jspa?rapidView=118&projectKey=RM&modal=detail&selectedIssue=${releaseTicket.key}`

      request({
        uri: req.body.response_url,
        method: 'POST',
        body: JSON.stringify({ text: url }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      return releaseTicket
    })
    .then(releaseTicket => addReleaseTicketToTicket(ticket, releaseTicket))
    .catch(e => console.log(`Unable to create release ticket: ${e}`))
})

app.listen(3000)

// app.use()

