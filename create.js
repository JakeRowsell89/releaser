const request = require('request-promise');

const optionsBase = {
    url: 'https://comparethemarket.atlassian.net/rest/api/2/issue/',
    method: 'POST',
    auth: {
        'user': process.env.JIRA_USER,
        'pass': process.env.JIRA_TOKEN
    },
    headers: {
        'Content-Type': 'application/json'
    }
};

function buildOptions(ticket, team, component, releaseDate) {
    console.log('ticket ', ticket)
    console.log('team ', team)
    console.log('component ', component)
    const body = JSON.stringify({
        "fields": {
            "project": { "key": "RM" },
            "summary": `${team.name} releasing ${component}`,
            "description": ticket,
            "issuetype": { "id": "10600" },
            "customfield_10802": [{ id: "16200" }], // product affected "none"
            "customfield_11200": { id: team.id }, // team responsible
            "customfield_15000": ["CheckReleaseStartDateEndDate", "IfRecordClonedPleaseVerifyFields"],
            "customfield_11502": releaseDate, // add real dates
            "customfield_11501": releaseDate, // add real dates
            "priority": { id: "3" }
        }
    })

    return { ...optionsBase, body }
}
module.exports = (ticket, team, component, releaseDate) => {
    const options = buildOptions(ticket, team, component, releaseDate)
    console.log(options)
    console.log('DISABLED LIVE POSTING OF TICKET CREATION')
    const x = { "id": "140860", "key": "RM-7539", "self": "https://comparethemarket.atlassian.net/rest/api/2/issue/140860" } // request(options)
    return Promise.resolve(x)
}