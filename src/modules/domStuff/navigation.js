import createHome from "../pages/home";
import El from "./createEl";
import ThisWeekIcon from "../../img/week.svg"
import ThisMonthIcon from "../../img/month.svg"
import LastMonthIcon from "../../img/lastmonth.svg"
import ThisYearIcon from "../../img/year.svg"
import TotalIcon from "../../img/total.svg"
import { controller } from "../..";
import createPage from "../pages/createPage";



function setUpCategory(category, project) {
    const navContainer = document.querySelector('.sideBar>main');
    const categoryLabel = new El('div',{
        classes: 'navLabel',
        parent: navContainer,
        text: category.toUpperCase(),
    })

    const buttons = {
        week: createNavButton('THIS WEEK', ThisWeekIcon),
        month: createNavButton('THIS MONTH', ThisMonthIcon),
        lastMonth: createNavButton('LAST MONTH', LastMonthIcon),
        year: createNavButton('THIS YEAR', ThisYearIcon),
        total: createNavButton('TOTAL', TotalIcon),
    }
    setUpNavButtons(buttons, project);

    // Event Listeners

    return [categoryLabel, buttons]
}

function createNavButton(text, img) {
    const navContainer = document.querySelector('.sideBar>main')
    const button = new El('button', {
            classes: `navButton projectButton`,
            parent: navContainer,
    })
    const image = new El('img', {
        classes: 'navImg',
        parent: button.element,
        properties: {src: img},
    })
    const label = new El('span', {
        text: text,
        parent: button.element,
    })
    return button
}

function setUpNavButtons(buttons, project) {
    for (const buttonName in buttons) {
        const buttonElement = buttons[buttonName].element;
        buttonElement.addEventListener('click', () => {
            // Returns if already on page
            if (controller.getCurrentPage()[0] == buttonName && controller.getCurrentPage()[1] == project) return;
            // Changes page and calls createPage with the right parameters
            controller.setCurrentPage([buttonName, project]);
            resetPage()
            createPage(buttonName, project);
        })
    }
}


function setUpButtonsClassToggle() {
    const allButtons = document.querySelectorAll('.navButton');

    allButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.add('active')
            allButtons.forEach(curButton => {
                if (curButton == button) return;
                curButton.classList.remove('active')
            })
        })
    })
}

function resetPage() {
    const pageParent = document.querySelector('.page')
    document.querySelector('.pageHeader').remove();
    document.querySelector('.pageContent').remove();
    new El('div', {
        classes: 'pageHeader',
        parent: pageParent,
    })
    new El('div', {
        classes: 'pageContent',
        parent: pageParent,
    })
}

function createStoredCategories(categoriesArray) {
    categoriesArray.forEach(category => {
        setUpCategory(category[0], category[1])
    })
}

(function() {
    const homeButton = document.querySelector('.homeButton');
    homeButton.addEventListener('click', () => {
        const curPage = controller.getCurrentPage()
        if (curPage[0] == 'home' && curPage[1] == 'default') return;
        resetPage()
        createHome
        controller.setCurrentPage(['home', 'default'])
    })
})()

export {setUpButtonsClassToggle, resetPage, createStoredCategories}