import WorkEntry from './modules/workEntry';
import createScope from './modules/scopeEntry';
import './style.css';
import { createStoredCategories, setUpButtonsClassToggle, setUpCategory } from './modules/domStuff/navigation';
import createCategory from './modules/categoryEntry';

const controller = (function () {
    let currentPage = ['home', 'default'];
    const workEntries = [
        new WorkEntry('2024-03-10', '10:30', '20:30', 'blåsenborg'),
        new WorkEntry('2024-03-10', '08:00', '18:00', 'blåsenborg'),
    ];
    
    const categories = [
        createCategory('All Projects', true),
        createCategory('Blåsenborg'),
        createCategory('Bryne')
    ]
    
    const scopes = [
        createScope('Kveld', 56, [1700, 2100]),
        createScope('Natt', 70, [2100, 2400]),
        createScope('Vanlige timer', 195.67),
        createScope('Lør', 70, false, 6),
        createScope('Søn', 70, false, 0),
    ]

    const getCurrentPage = () => {
        return currentPage;
    }

    const changePage = (pageArray) => {
        if (pageArray == currentPage) return;
        currentPage = pageArray;
    }

    return {workEntries, categories, scopes}
})()
createStoredCategories(controller.categories)
setUpButtonsClassToggle()

console.log(controller.workEntries[0].projectsArray)
console.log(controller.categories[1])