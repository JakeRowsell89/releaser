require('dotenv').config()

const express = require('express')
const http = require('http')
var bodyParser = require('body-parser');
const request = require('request-promise')
const getTicket = require('./getTicket')
const getComponent = require('./getComponents')
const create = require('./create')
const getNextReleaseWindow = require('./businessCases')
const addReleaseTicketToTicket = require('./addCommentToTicket')
const options = require('./options')
const { jiraBaseURL, releaseGuiPath } = require('./config')

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
      const release = getNextReleaseWindow.logic(ticket)
      releaseDate = release.format()

      res.send(`:rocket: Creating your release ticket for ${ticket} :rocket:`)

      return component
    })
    .then(component => create(ticket, team, component, releaseDate))
    .then(JSON.parse)
    .then((releaseTicket) => {
      request({
        uri: req.body.response_url,
        method: 'POST',
        body: JSON.stringify({ text: `:tada: Release ticket <${jiraBaseURL}${releaseGuiPath}${releaseTicket.key}|${releaseTicket.key}> created :tada:` }),
        headers: options.base.headers
      })
      return releaseTicket
    })
    .then(releaseTicket => addReleaseTicketToTicket(ticket, releaseTicket))
    .catch(e => console.log(`:thinking: Unable to create release ticket: ${e} :thinking:`))
})

app.listen(3000)

