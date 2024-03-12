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

    getHours() {
        return this.hoursStringToNumber(String(this.toTime - this.fromTime));
    }
}