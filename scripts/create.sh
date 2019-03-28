curl \
   -D- \
   -u $JIRA_USER:$JIRA_TOKEN \
   -X POST \
   --data "{\"fields\":{\"project\":{\"key\":\"LEGO\"},\"summary\":\"REST ye merry gentlemen.\",\"description\":\"Creating of an issue using project keys and issue type names using the REST API\",\"issuetype\":{\"name\":\"Bug\"}}}" \
   -H "Content-Type: application/json" \
   https://comparethemarket.atlassian.net/rest/api/2/issue/
