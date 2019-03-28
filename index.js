require('dotenv').config()

const getTicket = require('./getTicket')
const getComponent = require('./getComponents')
const create = require('./create')
const getNextReleaseWindow = require('./businessCases')
const ticket = 'LEGO-400'
const team = {
  id: '21214',
  name: 'LEGO'
}
let releaseDate;

getTicket(ticket)
  .then(JSON.parse)
  .then(getComponent)
  .then((component) => {
    const release = getNextReleaseWindow.logic(ticket)
    console.log(release)
    releaseDate = release.format()
    return component
  })
  .then(component => create(ticket, team, component, releaseDate))
  .then(x => console.log(x))
  .catch(e => console.log(e))