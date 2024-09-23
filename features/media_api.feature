Feature: Music tracks feature

@smoke
Scenario: Verify media endpoint returns 200 response code within 1000 miliseconds
Given the media endpoint is called
Then the API returns a 200 response code
And response time is less than 1000 miliseconds

@sanity
Scenario: Verify the 'id' field value is NOT set to null or empty('') and the 'segment_type' value is set to 'music' for all records
Given the media endpoint is called
Then the API returns a 200 response code
And  the id field value is not null or empty for all records
And the segment_type value is "music" for all records

@regression
Scenario: Verify the 'primary' field value within 'title_list' is NOT set to null or empty('') for all records
Given the media endpoint is called
Then the API returns a 200 response code
And the primary field value within title_list is not null or empty for all records

@regression
Scenario: Verify only one track in the media list has 'now_playing' field offset as true
Given the media endpoint is called
Then the API returns a 200 response code
And in the media list, only 1 track has now_playing field offset as 'true'

@regression
Scenario: Verify data value in the response header
Given the media endpoint is called
Then the API returns a 200 response code
And response header returns valid date
