import { timeInScope, getTimeDifference } from "./timeCalcs";


// Sums all payment for workEntries within an array against a scope array.
function sumAllEntries(entryArray, scopeArray) {
    let total = 0;
    entryArray.forEach(entry => {
        total += sumObject(getPayInfo(entry, scopeArray))
    })
    return total;
}

// Takes an array and entry and checks that entry with all scopes in array.
function getPayInfo(entry, scopeArray) {
    let pay = {}
    scopeArray.forEach(currentScope => {
        // Only choose the ones actually in scope
        if (currentScope.scope != false && timeInScope(currentScope.scope, entry.fromTime, entry.toTime)) {
            pay[currentScope.name] = Math.round(getTimeDifference(timeInScope(currentScope.scope, entry.fromTime, entry.toTime)) * currentScope.rate);
        } else if (currentScope.scope == false) {
            pay[currentScope.name] = Math.round(getTimeDifference([entry.fromTime, entry.toTime]) * currentScope.rate)
        }
    })
    return pay
}

// Sums up all values in an object
function sumObject(obj) {
    let total = 0;
    Object.keys(obj).forEach(key => {
        total += obj[key]
    })

    return total;
}

export {sumAllEntries, getPayInfo, sumObject}