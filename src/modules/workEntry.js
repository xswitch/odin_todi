export default class WorkEntry {
    constructor(date, fromTime, toTime, project = "default") {
        this.date = new Date(date);
        this.fromTime = new Date(`${date} ${fromTime}`);
        this.toTime = new Date(`${date} ${toTime}`)
        this.day = this.date.getDay()
    }

    get totalHours () {
        return (this.toTime - this.fromTime);
    }

    get timeDifference() {
        return Math.abs(this.fromTime - this.toTime)/3600000
    }

    get numericStartTime() {
        return (this.fromTime.getHours() + this.fromTime.getMinutes()/60)*100
    }

    get numericEndTime() {
        return (this.toTime.getHours() + this.toTime.getMinutes()/60)*100
    }

}