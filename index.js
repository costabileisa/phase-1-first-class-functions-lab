// Code your solution in this file!
const returnFirstTwoDrivers = array => array.slice(0, 2);

const returnLastTwoDrivers = array => array.slice(-2);

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return multiplier => fare * multiplier;
};

function fareDoubler(fare) {
    // return createFareMultiplier(fare)(2)
    const double = createFareMultiplier(fare);
    return double(2);
};

function fareTripler(fare) {
    // return createFareMultiplier(fare)(3)
    const triple = createFareMultiplier(fare);
    return triple(3);
};

function selectDifferentDrivers(array, fn) {
    return fn(array);
};