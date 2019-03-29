module.exports = {
  base: {
    auth: {
      'user': process.env.JIRA_USER,
      'pass': process.env.JIRA_TOKEN
    },
    headers: {
      'Content-Type': 'application/json'
    }
  }
}