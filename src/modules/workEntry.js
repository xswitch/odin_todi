export default class WorkEntry {
    constructor(date, fromTime, toTime) {
        this.date = new Date(date);
        this.fromTime = fromTime;
        this.toTime = toTime
        this.day = this.date.getDay()
    }

    get totalHours () {
        return (this.toTime - this.fromTime);
    }

}