curl \
   -D- \
   -u jake.rowsell@bglgroup.co.uk:hNND6npUih1G7h0AMexV9DF9 \
   -X POST \
   --data "{\"fields\":{\"project\":{\"key\":\"LEGO\"},\"summary\":\"REST ye merry gentlemen.\",\"description\":\"Creating of an issue using project keys and issue type names using the REST API\",\"issuetype\":{\"name\":\"Bug\"}}}" \
   -H "Content-Type: application/json" \
   https://comparethemarket.atlassian.net/rest/api/2/issue/
