// Adds the first number with a converted decimal
function getTimeNumber(time) {
    return Math.floor(time/100) + (time/100%1).toFixed(2)/60*100
}

// Return the difference in time between two points [1300, 2100] = 8
function getTimeDifference(timeArray) {
    return getTimeNumber(timeArray[1]) - getTimeNumber(timeArray[0]);
}

// Takes a converted array with start and end time (17.50-19.00) f.eks
function timeInScope(timeScopeArray, workedFrom, workedTo) {
    let endTime;
    let startingTime;
    // Check that it is inside scope
    // Sets start/end inside or at start of scope.
    if (workedTo <= timeScopeArray[0]) return false;
    (workedFrom >= timeScopeArray[0]) ? startingTime = workedFrom : startingTime = timeScopeArray[0];
    (workedTo <= timeScopeArray[1]) ? endTime = workedTo : endTime = timeScopeArray[1];

    return [startingTime, endTime];
}

export {getTimeNumber, timeInScope, getTimeDifference};