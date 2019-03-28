const request = require('request');
const {component} = require('./getComponents')

const options = {
    url: 'https://comparethemarket.atlassian.net/rest/api/2/issue/',
    method: 'POST',
    auth: {
        'user': 'deepika.dixit@bglgroup.co.uk',
        'pass': 'l1nkBmw36bjcyqGUdxph379B'
    },
    headers: {
        'Content-Type': 'application/json'
    },
    body: `{\"fields\":{\"project\":{\"key\":\"RM\"},\"summary\":\"$TEAM_NAME releasing $COMPONENT\",\"description\":\"$TICKET\",\"issuetype\":{\"name\":\"Bug\"}}}`

};

function callback(error, response, body) {
    if (!error && response.statusCode == 201) {
        const info = JSON.parse(body);
        console.log(info.fields.components);
       return  info.fields.components;
    }
    }

request(options,callback)