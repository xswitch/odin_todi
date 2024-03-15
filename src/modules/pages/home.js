import El from "../domStuff/createEl";

function createHome() {
    const header = document.querySelector('.pageHeader');
    header.classList.add('homeHeader')
    const headerText = new El('h1', {classes: 'headerText white', parent: header, text: 'Welcome,'})
    const headerName = new El('h1', {classes: 'headerText purple', parent: header, text: 'Bjørn Ivar.'})
    const container = document.querySelector('.pageContent');
    const homeContainer = new El('div', {
        classes: 'homeContainer',
        parent: container,
    })
    const containers = {
        newProjectContainer: new El('div', {classes: 'homeSection newProjectContainer', parent: homeContainer.element}),
        newEntryContainer: new El('div', {classes: 'homeSection newEntryContainer', parent: homeContainer.element}),
        monthOverview: new El('div', {classes: 'homeSection monthOverview', parent: homeContainer.element}),
        scopeContainer: new El('div', {classes: 'homeSection scopeContainer', parent: homeContainer.element}),
        taxContainer: new El('div', {classes: 'homeSection taxContainer', parent: homeContainer.element}),
    }
}

export default createHome;