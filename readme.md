1. Get ticket component 
  -> get first component description and set as $COMPONENT
  -> get `customfield_11200.value` and set as $TEAM_NAME
  -> get `customfield_11200.id` and set as $TEAM_ID
2. Logic to find timeslot based on component
  2.1 Is it a standard change?
  2.2 Get products affected
  2.3 Team responsible
3. Create release ticket with reference to original ticket
  -> Set product affected to "none" -> 16200
  -> Set as summary as `$TEAM_NAME releasing $COMPONENT`
  -> Set description to $TICKET
  -> Set team responsible to `$TEAM_ID`
4. Add a comment OR append release ticket link to original ticket