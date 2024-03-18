import { controller } from "../..";
import El from "../domStuff/createEl";
import WorkEntry from "../workEntry";

function createHome() {
    const header = document.querySelector('.pageHeader');
    header.classList.add('homeHeader')
    const headerText = new El('h1', {classes: 'headerText white', parent: header, text: 'Welcome,'})
    const headerName = new El('h1', {classes: 'headerText purple', parent: header, text: 'Bjørn Ivar'})
    const container = document.querySelector('.pageContent');
    const homeContainer = new El('div', {
        classes: 'homeContainer',
        parent: container,
    })
    const containers = {
        newEntryContainer: new El('div', {classes: 'homeSection newEntryContainer', parent: homeContainer.element}),
        newProjectContainer: new El('div', {classes: 'homeSection newProjectContainer', parent: homeContainer.element}),
        monthOverview: new El('div', {classes: 'homeSection monthOverview', parent: homeContainer.element}),
        scopeContainer: new El('div', {classes: 'homeSection scopeContainer', parent: homeContainer.element}),
        taxContainer: new El('div', {classes: 'homeSection taxContainer', parent: homeContainer.element}),
    }

    const newEntryCard = {
        newEntryTitle: new El('h1', {classes: 'homeCard homeCardTitle', parent: containers.newEntryContainer.element, text: 'NEW ENTRY'}),
        newEntryDate: new El('input', {classes: 'homeCard homeCardDate', parent: containers.newEntryContainer.element, properties: {type: 'date'}}),
        newEntryFromTime: new El('input', {classes: 'homeCard homeCardDate', parent: containers.newEntryContainer.element, properties: {type: 'time'}}),
        newEntryToTime: new El('input', {classes: 'homeCard homeCardDate', parent: containers.newEntryContainer.element, properties: {type: 'time'}}),
        newEntryProjectContainer: new El('select', {classes: 'homeCard homeCardSelect newSelect', parent: containers.newEntryContainer.element}),
        newEntryButton: new El('button', { classes: 'homeCard homeCardButton', parent: containers.newEntryContainer.element, text: 'CREATE'}),
    }

    newEntryCard.newEntryButton.element.addEventListener('click', () => {
        controller.workEntries.push(new WorkEntry(newEntryCard.newEntryDate.element.value,
        newEntryCard.newEntryFromTime.element.value,
        newEntryCard.newEntryToTime.element.value,
        newEntryCard.newEntryProjectContainer.element.value))
    })

    populateSelect(newEntryCard.newEntryProjectContainer.element, controller.categories, 'newEntryOption')
}

// Takes an array with ['text', 'value'] and creates options
function populateSelect(selectElement, options, classes = 'option') {
    options.forEach(option => {
        const text = option[0].toUpperCase()
        const value = option[1]
        const optionElement = new El('option', {properties: {value}, text, parent: selectElement, classes})
    })
}

function removeAllChildren(element) {
    const children = Array.from(element.children)
    children.forEach(child => {
        child.remove()
    })
}

export default createHome;