const request = require('request-promise');

function buildOptions(ticket) {
  return {
    url: 'https://comparethemarket.atlassian.net/rest/api/latest/issue/' + ticket,
    auth: {
      'user': process.env.JIRA_USER,
      'pass': process.env.JIRA_TOKEN
    },
    headers: {
      'Content-Type': 'application/json'
    }
  };
}

module.exports = (ticket) => request(buildOptions(ticket)) 
