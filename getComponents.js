require('dotenv').config()
const request = require('request');

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

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        const info = JSON.parse(body);
        console.log(info.fields.components);
       return  info.fields.components;
    }
    }

request(options,callback)
