require('dotenv').config()

const getTicket = require('./getTicket')
const getComponent = require('./getComponents')
const create = require('./create')
const ticket = 'LEGO-400'
const team = {
  id: '21214',
  name: 'LEGO'
}

getTicket(ticket)
  .then(JSON.parse)
  .then(getComponent)
  .then(component => create(ticket, team, component))
  .then(x => console.log(x))
  .catch(e => console.log(e))