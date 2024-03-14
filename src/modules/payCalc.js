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
        if (currentScope.day === false && timeInScope(currentScope.scope, entry.numericStartTime, entry.numericEndTime)) {
            pay[currentScope.name] = {}
            pay[currentScope.name].amount = timeInScope(currentScope.scope, entry.numericStartTime, entry.numericEndTime) * currentScope.rate;
            pay[currentScope.name].hours = timeInScope(currentScope.scope, entry.numericStartTime, entry.numericEndTime)
        }
        if (currentScope.day === entry.day) {
            console.log(currentScope.day)
            console.log(entry.day)
            pay[currentScope.name] = {}
            pay[currentScope.name].hours = entry.timeDifference
            pay[currentScope.name].amount = entry.timeDifference * currentScope.rate
        }
    })

    return pay
}

// Sums up all values in an object
function sumObject(obj) {
    let total = 0;
    Object.keys(obj).forEach(key => {
        total += obj[key].amount
    })

    return total;
}

export {sumAllEntries, getPayInfo, sumObject}