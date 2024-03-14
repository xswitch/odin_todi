import { getDate, intlFormat, getTime } from "date-fns";
import { controller } from "../..";
import El from "../domStuff/createEl";
import { entriesInWeek } from "../timeCalcs";
import { getPayInfo } from "../payCalc";


export default function createPage(type, project) {
    const projectEntries = controller.getEntriesByProject(project)
    const dateNow = new Date;
    entriesInWeek(projectEntries)

    switch (type) {
        case 'week':
            createWeek(entriesInWeek(projectEntries))
            break;
        case 'month':
            createMonth()
            break;
        case 'lastMonth':
            createLastMonth()
            break;
        case 'year':
            createYear()
            break;
        case 'total':
            createTotal(projectEntries)
            break;
        default:
            createError()
            break;
    }

}

function getWeekdayAndDate(date) {
    return intlFormat(date, {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
      })
}

function getDayAndMonth(date) {
    return intlFormat(date, {
        month: 'long',
        day: 'numeric',
      })
}

function getStartToEndText(entry) {
    return `${intlFormat(entry.fromTime, {hour: 'numeric', minute: 'numeric'})} - ${intlFormat(entry.toTime, {hour: 'numeric', minute: 'numeric'})}`
}


function createWeek(entries) {
    const weekContainer = new El('div', {
        parent: '.pageContent',
        classes: 'weekContainer'
    })
    entries.forEach(entry => {
        console.log(getPayInfo(entry, controller.scopes))
        const entryContainer = new El('div', {
            parent: weekContainer.element,
            classes: 'weekEntry'
        })
        const entryTitle = new El('h2', {
            parent: entryContainer.element,
            classes: 'weekTitle weekWhite',
            text: getWeekdayAndDate(entry.date),
        })
        const workedContainer = new El('div', {
            parent: entryContainer.element,
            classes: 'weekWorkedContainer',
            text: getStartToEndText(entry),
        })
        const totalWorkedText = new El('div', {
            parent: entryContainer.element,
            classes: 'weekTotalWorkedText weekPurple',
            text: `${entry.timeDifference} Hours`
        })
    })
}

function createMonth() {

}

function createYear() {

}

function createLastMonth() {

}

function createTotal(entries) {
    console.log(entries)
}

function createError() {

}