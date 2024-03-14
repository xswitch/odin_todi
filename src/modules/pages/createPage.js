import { getDate, intlFormat } from "date-fns";
import { controller } from "../..";
import El from "../domStuff/createEl";
import { entriesInWeek } from "../timeCalcs";


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

function getDateInfo(date) {
    return intlFormat(date, {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
      })
}

function createWeek(entries) {
    const weekContainer = new El('div', {
        parent: '.pageContent',
        classes: 'weekContainer'
    })
    entries.forEach(entry => {
        const entryContainer = new El('div', {
            parent: weekContainer.element,
            classes: 'weekEntry'
        })
        const entryTitle = new El('h2', {
            parent: entryContainer.element,
            classes: 'weekTitle',
            text: getDateInfo(entry.date),
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