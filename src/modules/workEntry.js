export default class NewWorkEntry {
    constructor(date, fromTime, toTime) {
        this.date = date;
        this.fromTime = fromTime;
        this.toTime = toTime
    }

    // Converts a time into a number with decimals for calculations
    hoursStringToNumber(stringToConvert) {
        if (stringToConvert.length <= 2) return Number(stringToConvert)/60
        return Number((stringToConvert.slice(0, stringToConvert.length-2))) + Number(stringToConvert.slice(stringToConvert.length-2))/60
    }

    // Takes an array with start and end time (17:30-19:00) f.eks
    calculateTimeInsideScope(timeScopeArray, workedFrom, workedTo) {
        let startingTime;
        let endTime;
        // Check that it is inside scope
        if (workedTo <= timeScopeArray[0]) return;
        // Sets start/end inside or at start of scope.
        (workedFrom >= timeScopeArray[0]) ? startingTime = workedFrom : startingTime = timeScopeArray[0];
        (workedTo <= timeScopeArray[1]) ? endTime = workedTo : endTime = timeScopeArray[1];

        return endTime - startingTime;
    }

    getHours() {
        return this.hoursStringToNumber(String(this.toTime - this.fromTime));
    }
}