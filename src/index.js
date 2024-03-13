import WorkEntry from './modules/workEntry';
import './style.css';
import createScope from './modules/scopeEntry';
import { getPayInfo, sumAllEntries } from './modules/payCalc';
import { timeInScope } from './modules/timeCalcs';

const workEntries = [
    new WorkEntry('2024-03-10', '10:30', '20:30'),
    new WorkEntry('2024-03-10', '08:00', '18:00'),
];

const scopes = [
    createScope('Kveld', 56, [1700, 2100]),
    createScope('Natt', 70, [2100, 2400]),
    createScope('Vanlige timer', 195.67),
    createScope('Lør', 70, false, 6),
    createScope('Søn', 70, false, 0),
]


console.log(workEntries)




document.querySelector('.getInfo').addEventListener('click', () => {
    const dateInput = document.querySelector('.getDate').value
    const startTimeInput = document.querySelector('.getStartTime').value
    const endTimeInput = document.querySelector('.getEndTime').value

    const startDate = new Date(`${dateInput} ${startTimeInput}`)
    const endDate = new Date(`${dateInput} ${endTimeInput}`)
    const difference = Math.abs(startDate - endDate)/3600000
})

