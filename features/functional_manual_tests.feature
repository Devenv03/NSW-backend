Feature: Function manual tests for media feature

Scenario: Verify media endpoint for a particular music track id returns 404 response code
Given the media endpoint 'https://testapi.io/api/rmstest/media/p002d79p' is called
Then the API returns a 404 response code

Scenario: Verify the 'type' field value is set to 'music_track' for all records
Given the media endpoint is called
Then the API returns a 200 response code
And the type field value is "music_track" for all records

Scenario: Verify only id 'p002d7bc' has 'now_playing' field offset as true from all music tracks
Given the media endpoint is called
Then the API returns a 200 response code
And only the id 'p002d7bc' has 'now_playing' field offset as true from all music tracks