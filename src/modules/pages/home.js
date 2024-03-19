import { intlFormat, setDay } from "date-fns";
import { controller } from "../..";
import createCategory from "../categoryEntry";
import El from "../domStuff/createEl";
import { createStoredCategories, removeAllCategories, setUpButtonsClassToggle } from "../domStuff/navigation";
import WorkEntry from "../workEntry";
import { toast } from "../domStuff/notification";

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

    // NEW ENTRY CARD
    const newEntryCard = {
        newEntryTitle: new El('h1', {classes: 'homeCard homeCardTitle purple', parent: containers.newEntryContainer.element, text: 'NEW ENTRY'}),
        newEntryDate: new El('input', {classes: 'homeCard homeCardDate', parent: containers.newEntryContainer.element, properties: {type: 'date'}}),
        newEntryFromTime: new El('input', {classes: 'homeCard homeCardDate', parent: containers.newEntryContainer.element, properties: {type: 'time'}}),
        newEntryToTime: new El('input', {classes: 'homeCard homeCardDate', parent: containers.newEntryContainer.element, properties: {type: 'time'}}),
        newEntryProjectContainer: new El('select', {classes: 'homeCard homeCardSelect newSelect', parent: containers.newEntryContainer.element}),
        newEntryButton: new El('button', { classes: 'homeCard homeCardButton', parent: containers.newEntryContainer.element, text: 'CREATE'}),
    }

    // NEW ENTRY SUBMITTED
    newEntryCard.newEntryButton.element.addEventListener('click', () => {
        controller.workEntries.push(new WorkEntry(newEntryCard.newEntryDate.element.value,
        newEntryCard.newEntryFromTime.element.value,
        newEntryCard.newEntryToTime.element.value,
        newEntryCard.newEntryProjectContainer.element.value))
    })

    // NEW PROJECT CARD
    const newProjectCard = {
        newProjectTitle: new El('h1', {classes: 'homeCard homeCardTitle purple', parent: containers.newProjectContainer.element, text: 'NEW PROJECT'}),
        newProjectName: new El('input', {classes: 'homeCard homeCardDate', parent: containers.newProjectContainer.element, properties: {placeholder: 'Project Name'}}),
        newProjectButton: new El('button', { classes: 'homeCard homeCardButton', parent: containers.newProjectContainer.element, text: 'CREATE'}),
    }

    // NEW PROJECT SUBMITTED
    newProjectCard.newProjectButton.element.addEventListener('click', () => {
        controller.categories.push(createCategory(newProjectCard.newProjectName.element.value.replace(' ', ''), newProjectCard.newProjectName.element.value))
        toast.success(`New project "${newProjectCard.newProjectName.element.value}" created.`)
        removeAllCategories()
        createStoredCategories(controller.categories)
        setUpButtonsClassToggle()
        removeAllChildren(newEntryCard.newEntryProjectContainer.element);
        populateSelect(newEntryCard.newEntryProjectContainer.element, controller.categories, 'newEntryOption')
    })

    // NEW SCOPE CARD
    const scopeCard = {
        scopeTitle: new El('h1', {classes: 'homeCard homeCardTitle purple', parent: containers.scopeContainer.element, text: 'SCOPES'}),
        currentScopes: new El('div', {classes: 'homeCard scopeOverview', parent: containers.scopeContainer.element}),
        currentScopesHeader: new El('div', {classes: 'scopeHeaderContainer', parent: '.scopeOverview'}),
        currentScopesName: new El('h4', {classes: 'currentScopeHeader', parent: '.scopeHeaderContainer', text: 'NAME'}),
        currentScopesScope: new El('h4', {classes: 'currentScopeHeader', parent: '.scopeHeaderContainer', text: 'SCOPE'}),
        currentScopesRate: new El('h4', {classes: 'currentScopeHeader', parent: '.scopeHeaderContainer', text: 'RATE'}),
        newScopeButton: new El('button', { classes: 'homeCard homeCardButton', parent: containers.scopeContainer.element, text: 'CREATE NEW'}),
    }

    populateWithScopes(scopeCard.currentScopes.element, controller.scopes)
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

// Populate scope container
function populateWithScopes(scopeContainer, scopes) {
    scopes.forEach(curScope => {
        const name = curScope.name;
        const scope = (() => {
            if (curScope.day === false) {
                return (curScope.scope[0] == 1 && curScope.scope[1] == 2400) ? 'All Day' : `${curScope.scope[0]} - ${curScope.scope[1]}`
            } else {
                // Returns name of day if it exists
                const dayOfWeek = setDay(new Date(), curScope.day);
                return intlFormat(dayOfWeek, {
                    weekday: 'long'
                })
            }
        })()
        const rate = curScope.rate;

        const container = new El('div', {
            classes: 'scopeInfoContainer',
            parent: scopeContainer,
        })

        const nameElement = new El('h4', {classes: 'currentScopeInfo', parent: container.element, text: name})
        const scopeElement = new El('h4', {classes: 'currentScopeInfo', parent: container.element, text: scope})
        const rateElement = new El('h4', {classes: 'currentScopeInfo', parent: container.element, text: rate})


    })
}

function removeAllChildren(element, excludeClass = false) {
    const children = Array.from(element.children)
    children.forEach(child => {
        if (child.classList.contains('newEntryOption')) return;
        child.remove()
    })
}

export default createHome;