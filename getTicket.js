const request = require('request-promise');
const { base } = require('./options')
const { jiraBaseURL, ticketApiPath } = require('./config')

function buildOptions(ticket) {
  return {
    url: `${jiraBaseURL}${ticketApiPath}${ticket}`,
    ...base,
  };
}

module.exports = (ticket) => request(buildOptions(ticket)) 
