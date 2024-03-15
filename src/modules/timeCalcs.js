import { addDays, endOfMonth, endOfWeek, endOfYear, startOfMonth, startOfWeek, startOfYear } from "date-fns"
// Takes a converted array with start and end time (17.50-19.00) f.eks
function timeInScope(timeScopeArray, workedFrom, workedTo) {
    let startingTime;
    let endTime;
    // Check that it is inside scope
    // Sets start/end inside or at start of scope.
    if (workedTo <= timeScopeArray[0]) return false;
    (workedFrom >= timeScopeArray[0]) ? startingTime = workedFrom : startingTime = timeScopeArray[0];
    (workedTo <= timeScopeArray[1]) ? endTime = workedTo : endTime = timeScopeArray[1];

    return (endTime-startingTime)/100;
}

function entriesInWeek(entries) {
    const start = addDays(startOfWeek(new Date), 1);
    const end = addDays(endOfWeek(new Date), 1);
    return entries.filter((entry) => {
        if (entry.date > start && entry.date < end) return true;
    })
}

function entriesInMonth(entries) {
    const start = startOfMonth(new Date)
    const end = endOfMonth(new Date)

    
    return filterTimePeriod(entries, start, end)
}

function entriesLastMonth(entries) {
    let start = new Date()
    let end = new Date();

    start = startOfMonth(start.setMonth(start.getMonth() - 1))
    end = endOfMonth(end.setMonth(end.getMonth() - 1))

    return filterTimePeriod(entries, start, end)
}

function entriesThisYear(entries) {
    let start = startOfYear(new Date());
    let end = endOfYear(new Date());

    return filterTimePeriod(entries, start, end)
}

function filterTimePeriod(entries, start, end) {
    return entries.filter((entry) => {
        if (entry.date > start && entry.date < end) return entry
    })
}

function sumHoursInArray(entryArray) {
    return entryArray.reduce((prev, cur) => prev + cur.timeDifference, 0)
}

export {timeInScope, entriesInWeek, entriesInMonth, entriesLastMonth, entriesThisYear, sumHoursInArray};