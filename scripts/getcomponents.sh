curl \
   -u $JIRA_USER:$JIRA_TOKEN \
   -G \
   -H "Content-Type: application/json" \
   https://comparethemarket.atlassian.net/rest/api/latest/issue/LEGO-400 | jq .fields.components