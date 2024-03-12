export default class WorkEntry {
    constructor(date, fromTime, toTime) {
        this.date = date;
        this.fromTime = fromTime;
        this.toTime = toTime
    }

    get totalHours () {
        return (this.toTime - this.fromTime);
    }

}