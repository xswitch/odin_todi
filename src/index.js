import WorkEntry from './modules/workEntry';
import './style.css';
import createScope from './modules/scopeEntry';
import { sumAllEntries } from './modules/payCalc';

const workEntries = [
    new WorkEntry('2024-03-10', 1000, 2200),
    new WorkEntry('2024-03-15', 800, 1800),
];

const scopes = [
    createScope('Kveld', 56, [1700, 2100]),
    createScope('Natt', 70, [2100, 2400]),
    createScope('Vanlige timer', 195.67),
    createScope('Lør', 70, false, 6),
    createScope('Søn', 70, false, 0),
]

console.log(sumAllEntries(workEntries, scopes))

console.log(workEntries)