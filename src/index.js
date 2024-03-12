import WorkEntry from './modules/workEntry';
import './style.css';
import createScope from './modules/scopeEntry';
import { sumAllEntries } from './modules/payCalc';

const workEntries = [
    new WorkEntry('2024-12-03', 1000, 2200),
    new WorkEntry('2024-13-04', 800, 1800),
];

const scopes = [
    createScope('Kveld', 56, [1700, 2100]),
    createScope('Natt', 70, [2100, 2400]),
    createScope('Vanlige timer', 195.67),
    createScope('Lør/Søn', 70)
]

console.log(sumAllEntries(workEntries, scopes))