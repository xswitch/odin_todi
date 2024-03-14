import { controller } from "../..";
import El from "../domStuff/createEl";
import { entriesInWeek } from "../timeCalcs";


export default function createPage(type, project) {
    const projectEntries = controller.getEntriesByProject(project)
    const dateNow = new Date;
    entriesInWeek(projectEntries)

    switch (type) {
        case 'week':
            createWeek()
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
            createTotal()
            break;
        default:
            createError()
            break;
    }

}

function createWeek() {

}

function createMonth() {

}

function createYear() {

}

function createLastMonth() {

}

function createTotal() {

}

function createError() {

}