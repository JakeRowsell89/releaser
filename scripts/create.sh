curl \
   -D- \
   -u $JIRA_USER:$JIRA_TOKEN \
   -X POST \
   --data "{\"fields\":{\"project\":{\"key\":\"RM\"},\"summary\":\"$TEAM_NAME releasing $COMPONENT\",\"description\":\"$TICKET\",\"issuetype\":{\"name\":\"Bug\"}}}" \
   -H "Content-Type: application/json" \
   https://comparethemarket.atlassian.net/rest/api/2/issue/
