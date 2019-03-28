require('dotenv').config()
const request = require('request-promise');

const options = {
    url: 'https://comparethemarket.atlassian.net/rest/api/latest/issue/LEGO-400',
    auth: {
        'user': process.env.JIRA_USER,
        'pass': process.env.JIRA_TOKEN
    },
    headers: {
        'Content-Type': 'application/json'
    }
};

module.exports = request(options)
