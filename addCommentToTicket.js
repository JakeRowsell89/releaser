const request = require('request-promise');



function buildOptions(ticket, releaseTicket) {
  console.log('ticket ', ticket)
  console.log('releaseTicket ', releaseTicket)

  const optionsBase = {
    url: `https://comparethemarket.atlassian.net/rest/api/2/issue/${ticket}/comment`,
    method: 'POST',
    auth: {
      'user': process.env.JIRA_USER,
      'pass': process.env.JIRA_TOKEN
    },
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({
    "body": `[${releaseTicket.key}|https://comparethemarket.atlassian.net/browse/${releaseTicket.key}]`
  })

  return { ...optionsBase, body }
}
module.exports = (ticket, releaseTicket) => {
  const options = buildOptions(ticket, releaseTicket)
  console.log(options)

  return request(options)
}