const request = require('request-promise');

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
module.exports = request(options)