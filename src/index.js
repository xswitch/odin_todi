import WorkEntry from './modules/workEntry';
import createScope from './modules/scopeEntry';
import './style.css';
import { createStoredCategories, setUpButtonsClassToggle } from './modules/domStuff/navigation';
import createCategory from './modules/categoryEntry';
import createHome from './modules/pages/home';

const controller = (function () {
    let currentPage = ['home', 'default'];
    const workEntries = [
        new WorkEntry('2024-03-18', '07:30', '14:45', 'bryne'),
        new WorkEntry('2024-03-19', '07:30', '14:45', 'bryne'),
        new WorkEntry('2024-03-20', '07:30', '14:45', 'bryne'),
        new WorkEntry('2024-03-21', '15:15', '22:00', 'bryne'),
    ];
    
    const categories = [
        createCategory('All Projects', 'default'),
        createCategory('Blåsenborg', 'blåsenborg'),
        createCategory('Bryne', 'bryne')
    ]
    
    const scopes = [
        createScope('Vanlige timer', 195.67),
        createScope('Kveld', 56, [1700, 2100]),
        createScope('Natt', 70, [2100, 2400]),
        createScope('Lør', 70, false, 6),
        createScope('Søn', 70, false, 0),
    ]

    const getCurrentPage = () => {
        return currentPage;
    }

    const setCurrentPage = (newArray) => {
        currentPage = newArray
    }

    // Filters based on entered project string
    const getEntriesByProject = (project) => {
        return workEntries.filter(entry => entry.projectsArray.includes(project))
    }

    return {workEntries, categories, scopes, getCurrentPage, setCurrentPage, getEntriesByProject}
})()
createStoredCategories(controller.categories)
setUpButtonsClassToggle()
createHome()
export {controller}