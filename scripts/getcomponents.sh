curl \
   -D- \
   -i \
   -u $JIRA_USER:$JIRA_TOKEN \
   -X GET \
   -H "Content-Type: application/json" \
   https://comparethemarket.atlassian.net/rest/api/latest/issue/LEGO-400 > output.json