import WorkEntry from './modules/workEntry';
import createScope from './modules/scopeEntry';
import './style.css';
import { createStoredCategories, setUpButtonsClassToggle } from './modules/domStuff/navigation';
import createCategory from './modules/categoryEntry';

const controller = (function () {
    let currentPage = ['home', 'default'];
    const workEntries = [
        new WorkEntry('2024-03-06', '10:30', '20:30', 'blåsenborg'),
        new WorkEntry('2024-03-07', '08:00', '18:00', 'bryne'),
        new WorkEntry('2024-03-08', '08:00', '18:00', 'bryne'),
        new WorkEntry('2024-03-09', '08:00', '18:00', 'blåsenborg'),
        new WorkEntry('2024-03-10', '08:00', '18:00', 'bryne'),
        new WorkEntry('2024-03-11', '08:00', '13:30', 'bryne'),
        new WorkEntry('2024-03-12', '08:00', '18:00', 'bryne'),
        new WorkEntry('2024-03-13', '08:00', '18:00', 'blåsenborg'),
        new WorkEntry('2024-03-14', '08:00', '18:00', 'bryne'),
        new WorkEntry('2024-03-15', '08:00', '18:00', 'blåsenborg'),
        new WorkEntry('2024-03-16', '08:00', '20:30', 'blåsenborg'),
        new WorkEntry('2024-03-17', '08:00', '18:00', 'blåsenborg'),
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

export {controller}