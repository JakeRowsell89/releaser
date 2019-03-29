const request = require('request-promise');
const { base } = require('./options')
const { jiraBaseURL, ticketApiPath } = require('./config')

const optionsBase = {
    url: `${jiraBaseURL}${ticketApiPath}`,
    method: 'POST',
    ...base,
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
            "customfield_11502": releaseDate,
            "customfield_11501": releaseDate,
            "priority": { id: "3" }
        }
    })

    return { ...optionsBase, body }
}
module.exports = (ticket, team, component, releaseDate) => {
    const options = buildOptions(ticket, team, component, releaseDate)
    const x = JSON.stringify({ "id": "140957", "key": "RM-7547", "self": "https://comparethemarket.atlassian.net/rest/api/2/issue/140957" })
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('waiting for 3 seconds')
            resolve(x)
        }, 3000)
    })
    // return request(options)
}