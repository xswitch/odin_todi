import createHome from "../pages/home";
import El from "./createEl";
import ThisWeekIcon from "../../img/week.svg"
import ThisMonthIcon from "../../img/month.svg"
import LastMonthIcon from "../../img/lastmonth.svg"
import ThisYearIcon from "../../img/year.svg"
import TotalIcon from "../../img/total.svg"



function setUpCategory(category) {
    const navContainer = document.querySelector('.sideBar>main');
    const categoryLabel = new El('div',{
        classes: 'navLabel',
        parent: navContainer,
        text: category.toUpperCase(),
    })
    const categorySingleString = category.replace(' ', '')

    const categoryButtons = {
        thisWeek: {
            button: new El('button', {
                classes: `navButton projectButton`,
                parent: navContainer,
            }),
        },
        thisMonth: {
            button: new El('button', {
                classes: `navButton projectButton`,
                parent: navContainer,
            }),
        },
        lastMonth: {
            button: new El('button', {
                classes: `navButton projectButton`,
                parent: navContainer,
            }),
        },
        thisYear: {
            button: new El('button', {
                classes: `navButton projectButton`,
                parent: navContainer,
            }),
        },
        total: {
            button: new El('button', {
                classes: `navButton projectButton`,
                parent: navContainer,
            }),
        },
    }

    // THIS WEEK
    categoryButtons.thisWeek.image = new El('img', {
        classes: 'navImg',
        parent: categoryButtons.thisWeek.button.element,
        properties: {src: ThisWeekIcon},
    })
    categoryButtons.thisWeek.label = new El('span', {
        text: 'THIS WEEK',
        parent: categoryButtons.thisWeek.button.element,
    })

    // THIS MONTH
    categoryButtons.thisMonth.image = new El('img', {
        classes: 'navImg',
        parent: categoryButtons.thisMonth.button.element,
        properties: {src: ThisMonthIcon},
    })
    categoryButtons.thisMonth.label = new El('span', {
        text: 'THIS MONTH',
        parent: categoryButtons.thisMonth.button.element,
    })

    // LAST MONTH
    categoryButtons.lastMonth.image = new El('img', {
        classes: 'navImg',
        parent: categoryButtons.lastMonth.button.element,
        properties: {src: LastMonthIcon},
    })
    categoryButtons.lastMonth.label = new El('span', {
        text: 'LAST MONTH',
        parent: categoryButtons.lastMonth.button.element,
    })

    // YEAR
    categoryButtons.thisYear.image = new El('img', {
        classes: 'navImg',
        parent: categoryButtons.thisYear.button.element,
        properties: {src: ThisYearIcon},
    })
    categoryButtons.thisYear.label = new El('span', {
        text: 'THIS YEAR',
        parent: categoryButtons.thisYear.button.element,
    })

    // TOTAL
    categoryButtons.total.image = new El('img', {
        classes: 'navImg',
        parent: categoryButtons.total.button.element,
        properties: {src: TotalIcon},
    })
    categoryButtons.total.label = new El('span', {
        text: 'TOTAL',
        parent: categoryButtons.total.button.element,
    })

    return [categoryLabel, categoryButtons]
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
        setUpCategory(category)
    })
}

(function() {
    const homeButton = document.querySelector('.homeButton');
    homeButton.addEventListener('click', () => {
        resetPage()
        createHome();
    })
})()

export {setUpButtonsClassToggle, resetPage, createStoredCategories}