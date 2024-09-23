const axios  = require ('axios');
const { expect } = require('chai');

async function getMedia(url){
    response = await axios.get(url);
    return response
}

async function verifyStatusCode(expectedCode, actualCode) {
    expect(expectedCode,`Status code - Expected:${expectedCode} but Actual:${expectedCode}`).equals(actualCode,);
}

async function verifyResponseTimeLessThanExpectedTime(responseTime, maxTime) {
    expect(responseTime, `Response time - Maxtime:${maxTime} Actual response time :${responseTime}`).lessThan(maxTime)
}

async function verifyIdFieldNotNullOrEmpty(responseData){
    responseData.forEach((obj, index) => {
        verifyResponseNotNull(obj.id);
        verifyResponseNotEmptyString(obj.id);
     });
}

async function verifySegmentType(responseData, objectValue){
    responseData.forEach((obj, index) => {
        expect(obj.segment_type).to.be.equal(objectValue);
    })
}

async function verifyPrimaryfieldNotNullOrEmpty(responseData){
    responseData.forEach((obj, index) => {
        verifyResponseNotNull(obj.title_list.primary);
        verifyResponseNotEmptyString(obj.title_list.primary);
     });
}

async function verifyNowPlaying(responseData, numberOfTracks, isTrue){
    const actualNowPlayingTrue = [];
    responseData.forEach((obj, index) => {
        if (obj.offset.now_playing === isTrue){
            actualNowPlayingTrue.push(obj.offset.now_playing);
        }
     });
     expect(actualNowPlayingTrue.length, ` Expected:${numberOfTracks} now playing field as ${isTrue} but Actual :'${actualNowPlayingTrue.length}'`).to.be.equal(numberOfTracks);
}

async function toBoolean(value) {
    // Convert string "true" to boolean true
    return value === 'true';  
  }

async function verifyResponseHeaderDate(responseHeaderDate){
    verifyResponseNotNull(responseHeaderDate);
    expect(responseHeaderDate,`Expected:NOT undefined Actual:${responseHeaderDate}`).to.not.be.undefined;
 } 

 async function verifyWithTodaysDate(responseHeaderDate, dateToday){
    expect(responseHeaderDate,`Expected:${dateToday} Actual:${responseHeaderDate}`).to.be.equal(dateToday);
 } 

 async function verifyResponseNotNull(responseData){
    expect(responseData,`Expected:NOT null Actual:${responseData}`).to.not.be.null;
}

async function verifyResponseNotEmptyString(responseData){
    expect(responseData,`Expected:NOT '' Actual:${responseData}`).to.not.equal('');
}

module.exports = {
    getMedia: getMedia,
    verifyStatusCode: verifyStatusCode,
    verifyResponseTimeLessThanExpectedTime:verifyResponseTimeLessThanExpectedTime,
    verifyIdFieldNotNullOrEmpty:verifyIdFieldNotNullOrEmpty,
    verifySegmentType:verifySegmentType,
    verifyPrimaryfieldNotNullOrEmpty:verifyPrimaryfieldNotNullOrEmpty,
    verifyNowPlaying:verifyNowPlaying,
    toBoolean: toBoolean,
    verifyResponseHeaderDate: verifyResponseHeaderDate,
    verifyWithTodaysDate:verifyWithTodaysDate,
  };
