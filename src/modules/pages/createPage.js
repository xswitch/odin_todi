import { intlFormat, getDaysInMonth, startOfMonth, addDays, startOfYear, addMonths } from "date-fns";
import { controller } from "../..";
import El from "../domStuff/createEl";
import { entriesInMonth, entriesInWeek, entriesLastMonth, entriesThisYear, sumHoursInArray } from "../timeCalcs";
import { getPayInfo, sumAllEntries, sumObject } from "../payCalc";
import MoneyIcon from "../../img/money.svg";
import TimeIcon from "../../img/time.svg";


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
            createMonth(entriesLastMonth(projectEntries));
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

function getWeekDay(date) {
    return intlFormat(date, {
        weekday: 'short',
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
    const daysArray = []
    for (let i = 0; i <= 6; i++) {
        daysArray.push(new El('div', {
            parent: weekContainer.element,
            classes: 'weekEntry'
        }))
    }

    entries.forEach((entry, index) => {
        const day = (entry.date.getDay() == 0) ? 7 : entry.date.getDay();
        const entryContainer = daysArray[day-1];
        const entryTitle = new El('h2', {
            parent: entryContainer.element,
            classes: 'weekTitle weekWhite',
            text: getWeekdayAndDate(entry.date),
        })
        if ((new Date).getDate() == entry.date.getDate()) entryTitle.addClass = 'currentDayWeek'
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
        const totalPayContainer = new El('div', {
            classes: 'totalPayContainer',
            parent: entryContainer.element,
        })
        const totalPay = [
            new El('span', {
                parent: totalPayContainer.element,
                classes: 'payName',
                text: 'TOTAL: ',
            }),
            new El('span', {
                parent: totalPayContainer.element,
                classes: 'weekPayAmount',
                text: `${Math.round(sumObject(payInfo))} NOK`,
            })
        ]
    })

    const headerContainer = document.querySelector('.pageHeader');
    headerContainer.classList.add('weekHeader')
        const text1 = new El('h1', {
            classes: 'headerText white',
            parent: headerContainer,
            text: 'This Week: '
        })
        const weekHoursContainer = new El('div', {
            classes: 'weekHeaderHours',
            parent: headerContainer,
        })
        const text2 = new El('h1', {
            classes: 'headerText',
            parent: weekHoursContainer.element,
            text: sumHoursInArray(entries)
        })
        const text3 = new El('img', {
            classes: 'headerIcon',
            parent: weekHoursContainer.element,
            properties: {src: TimeIcon},
        })
        const weekMoneyContainer = new El('div', {
            classes: 'weekHeaderHours',
            parent: headerContainer,
        })
        const text4 = new El('h1', {
            classes: 'headerText',
            parent: weekMoneyContainer.element,
            text: Math.round(sumAllEntries(entries, controller.scopes)),
        })
        const text5 = new El('img', {
            classes: 'headerIcon',
            parent: weekMoneyContainer.element,
            properties: {src: MoneyIcon},
        })
    
}

function createMonth(entries) {
    const daysInMonth = getDaysInMonth(entries[0].date)
    const monthContainer = new El('div', {classes: 'monthContainer', parent: '.pageContent'});
    const dateContainers = []
    let start = startOfMonth(entries[0].date)

    for (let i = 0; i < daysInMonth; i++) {
        dateContainers.push(new El('div', {
            classes: 'monthEntry',
            parent: monthContainer.element
        }))
        const entryContainer = new El('div', {
            classes: 'entryContainer',
            parent: dateContainers[i].element
        })
        const dateContainer = new El('div', {
            classes: 'monthDateContainer empty',
            parent: entryContainer.element,
        })
        const dateText = new El('h3', {
            parent: dateContainer.element,
            text: getWeekDay(start)
        })
        const dateNumber = new El('h3', {
            parent: dateContainer.element,
            text: (start.getDate())
        })
        // Gives today another class for visualization
        if ((new Date).getDate() == start.getDate() && (new Date).getMonth() == start.getMonth()) dateNumber.addClass = 'currentDay';
        start = addDays(start, 1);
    }

    entries.forEach(entry => {
        const dateIndex = entry.date.getDate()-1
        const timeContainer = new El('div', {
            classes: 'monthTimeContainer',
            parent: dateContainers[dateIndex].element.firstChild
        })
        const startToEndText = new El('h3', {
            parent: timeContainer.element,
            text: `${getStartToEndText(entry)}`
        })
        const totalHoursText = new El('h3', {
            parent: timeContainer.element,
            text: `(${entry.timeDifference} Hours)`
        })
        const totalPayText = new El('h3', {
            parent: dateContainers[dateIndex].element.firstChild,
            text: `${Math.round(sumObject(getPayInfo(entry, controller.scopes)))} NOK`
        })
        dateContainers[dateIndex].element.lastChild.firstChild.classList.remove('empty')
    })
}


function createYear(entries) {
    let monthsContainerArray = []
    const yearContainer = new El('div', {classes: 'yearContainer', parent: '.pageContent'})
    const entriesSplitIntoMonths = []
    let yearStart = startOfYear(new Date)
    for (let i = 0; i <= 11; i++) {
        // Splits entries into the months they belong in
        entriesSplitIntoMonths.push(entries.filter(entry => {
            if (entry.date.getMonth() == i) return entry
        }))
        monthsContainerArray.push(new El('div', {
            classes: 'yearEntryContainer',
            parent: yearContainer.element
        }))
        const monthCard = new El('h3', {classes: 'monthCard', parent: monthsContainerArray[i].element})
        const monthInfo = new El('h3', {classes: 'yearMonthInfo empty', parent: monthCard.element, text: intlFormat(yearStart, {month: 'long'})})

        // If entries on that month, populate
        if (entriesSplitIntoMonths[i].length > 0) {
            const moneyMade = sumAllEntries(entriesSplitIntoMonths[i], controller.scopes)
            const hoursWorked = sumHoursInArray(entriesSplitIntoMonths[i])
            monthInfo.classes = 'yearMonthInfo'

            const hoursText = new El('h3', {
                classes: 'monthCardHours',
                parent: monthCard.element,
                text: `${hoursWorked} Hrs`,
            })
            const moneyText = new El('h3', {
                classes: 'monthCardMoney',
                parent: monthCard.element,
                text: `${Math.round(moneyMade)} NOK`
            })
        }
        if ((new Date).getMonth() == i) monthInfo.addClass = 'currentMonth'
        yearStart = addMonths(yearStart, 1);
    }
}


function createTotal(entries) {
}

function createError() {

}