const request = require('request-promise');
const { base } = require('./options')
const { jiraBaseURL, ticketApiPath, ticketGuiPath } = require('./config')

function buildOptions(ticket, releaseTicket) {
  console.log('ticket ', ticket)
  console.log('releaseTicket ', releaseTicket)

  const optionsBase = {
    url: `${jiraBaseURL}${ticketApiPath}${ticket}/comment`,
    method: 'POST',
    ...base,
  };

  const body = JSON.stringify({
    "body": `[${releaseTicket.key}|${jiraBaseURL}${ticketGuiPath}${releaseTicket.key}]`
  })

  console.log(body)

  return { ...optionsBase, body }
}
module.exports = (ticket, releaseTicket) => {
  const options = buildOptions(ticket, releaseTicket)
  console.log(options)

  return request(options)
}