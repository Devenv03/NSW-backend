const { Given, When, Then } = require('@cucumber/cucumber');
const mediaApi = require("../support/media_api");
const url = require("../support/data/api_endpoints");

let response;
let responseTime;
let responseData;
let endpoint = '/rmstest/media';
let actualURL = url.baseURL + endpoint

Given('the media endpoint is called', async function () {
    
    // Get time before the request
    const startTime = performance.now();

    // Call to media endpoint
    response = await mediaApi.getMedia(actualURL);

    // Get time after the request
    const endTime = performance.now();

    // Store response data
    responseData = response.data;

    // Get response time 
    responseTime = endTime - startTime
  });  

Then('the API returns a {int} response code', async function (expectedStatusCode) {
  // Verify status code
    await mediaApi.verifyStatusCode(response.status, expectedStatusCode);
  });

Then('response time is less than {float} miliseconds', async function (maxTime) {
  // Verify response time is less than Max time
  await mediaApi.verifyResponseTimeLessThanExpectedTime(responseTime, maxTime);
  });

Then('the id field value is not null or empty for all records', async function () {
  // Verify Id field value is NOT null or empty string('')
  await mediaApi.verifyIdFieldNotNullOrEmpty(responseData.data);
  });

Then('the segment_type value is {string} for all records', async function (objectValue) {
  // Verify segment type value
  await mediaApi.verifySegmentType(responseData.data, objectValue);
  });

Then('the primary field value within title_list is not null or empty for all records', async function () {
  // Verify Primary field value is NOT null or empty string('')
  await mediaApi.verifyPrimaryfieldNotNullOrEmpty(responseData.data);
  });

Then('in the media list, only {int} track has now_playing field offset as {string}', async function (numberOfTracks, value) {
  // Convert string to boolean
  const isTrue = await mediaApi.toBoolean(value);

  // Verify media list has only 1 now playing field offset as true
    await mediaApi.verifyNowPlaying(responseData.data, numberOfTracks, isTrue );
  });

  Then('response header returns valid date', async function () {
    const responseHeaderDateString = response.headers['date']
    // Verify response header date is not null or undefined 
    await mediaApi.verifyResponseHeaderDate(responseHeaderDateString);

    // Convert response header date string to local date string
    const responseHeaderDate = new Date(responseHeaderDateString).toLocaleDateString();
    
    // Get local date string 
    const today = new Date().toLocaleDateString();
    
    // Verify response header date is local date string(Todays Date)
    await mediaApi.verifyWithTodaysDate(responseHeaderDate,today);
  });
  