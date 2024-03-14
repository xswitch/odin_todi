import { getDate, intlFormat, getTime } from "date-fns";
import { controller } from "../..";
import El from "../domStuff/createEl";
import { entriesInMonth, entriesInWeek, entriesLastMonth, entriesThisYear, timeInScope } from "../timeCalcs";
import { getPayInfo, sumObject } from "../payCalc";


export default function createPage(type, project) {
    const projectEntries = controller.getEntriesByProject(project)
    const dateNow = new Date;
    entriesInWeek(projectEntries)

    switch (type) {
        case 'week':
            createWeek(entriesInWeek(projectEntries))
            break;
        case 'month':
            createMonth(entriesInMonth(projectEntries));
            break;
        case 'lastMonth':
            createLastMonth(entriesLastMonth(projectEntries));
            break;
        case 'year':
            createYear(entriesThisYear(projectEntries))
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
            text: `${getStartToEndText(entry)} (${entry.timeDifference} Hours)`,
        })
        const hourContainer = new El('div', {
            parent: entryContainer.element,
            classes: 'weekHourContainer',
        })

        const payNameLabel = new El('h3', {
            parent: hourContainer.element,
            classes: 'weekPayLabel',
            text: 'TYPE',
        })
        const payHoursLabel = new El('h3', {
            parent: hourContainer.element,
            classes: 'weekPayLabel',
            text: 'HOURS',
        })
        const payAmountLabel = new El('h3', {
            parent: hourContainer.element,
            classes: 'weekPayLabel',
            text: 'AMOUNT',
        })
        
        const payInfo = getPayInfo(entry, controller.scopes);
        for (const key in payInfo) {
            const hours = payInfo[key].hours;
            const amount = Math.round(payInfo[key].amount);
            const paymentName = new El('h3', {
                parent: hourContainer.element,
                classes: 'payName',
                text: `${key}`
            })
            const paymentHours = new El('h3', {
                parent: hourContainer.element,
                classes: 'payHours',
                text: hours,
            })
            const paymentAmount = new El('h3', {
                parent: hourContainer.element,
                classes: 'weekPayAmount',
                text: amount,
            })
        }
        const totalPay = [
            new El('span', {
                parent: hourContainer.element,
                classes: 'payName',
                text: 'TOTAL',
            }),
            new El('span', {
                parent: hourContainer.element,
                classes: 'weekPayAmount',
                text: `${Math.round(sumObject(payInfo))}`,
            })
        ]
    })
}

function createMonth(entries) {
    console.log(entries)
}

function createLastMonth(entries) {
    console.log(entries)
}

function createYear(entries) {
    console.log(entries)
}


function createTotal(entries) {
}

function createError() {

}