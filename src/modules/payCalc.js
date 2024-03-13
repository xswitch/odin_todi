import { timeInScope } from "./timeCalcs";


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

    // Gets inside a scope
    scopeArray.forEach(currentScope => {
        if (currentScope.day === false) pay[currentScope.name] = timeInScope(currentScope.scope, entry.numericStartTime, entry.numericEndTime) * currentScope.rate
        if (currentScope.day == entry.day) pay[currentScope.name] = entry.timeDifference * currentScope.rate
    })

    console.log(pay)
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