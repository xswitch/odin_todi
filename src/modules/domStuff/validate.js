import { controller } from "../.."

function validateNewEntry(entryValues) {
    let newDate = new Date(entryValues.date);
    newDate = [newDate.getFullYear(), newDate.getMonth()+1, newDate.getDate()];
    const similarDates = controller.workEntries.filter(entry => {
        if (entry.fullDate.join('') == newDate.join('')) return true;
        return false;
    })

    // Checks
    if (similarDates[0] != undefined) return 'Date already has entry'
    if (entryValues.date == '') return 'Input date!'
    if (entryValues.fromTime == '') return 'Input starting time!'
    if (entryValues.toTime == '') return 'Input end time!'
    if (Number(entryValues.fromTime.replace(':', '')) > Number(entryValues.toTime.replace(':', ''))) return "End must be after starting time!"

    
    return true;
}

function validateNewProject(project) {
    let isValid = [true, ''];

    if (project == '') isValid = [false, `Project name can't be empty!`];
    controller.categories.forEach(category => {
        if (category[1] == project.replace(' ', '').toLowerCase() || category[0].replace(' ', '').toLowerCase() == project.replace(' ', '').toLowerCase()) isValid = [false, 'Project already exists!'];
    })
    return isValid
}

export {validateNewEntry, validateNewProject}