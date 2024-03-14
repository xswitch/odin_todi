import { addDays, endOfWeek, startOfWeek } from "date-fns"
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

export {timeInScope, entriesInWeek};