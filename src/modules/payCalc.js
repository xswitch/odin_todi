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
    scopeArray.forEach(currentScope => {
        console.log(currentScope.name)
        console.log(timeInScope(currentScope.scope, entry.numericStartTime, entry.numericEndTime))
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