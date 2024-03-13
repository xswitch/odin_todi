import WorkEntry from './modules/workEntry';
import createScope from './modules/scopeEntry';
import './style.css';
import { setUpButtons } from './modules/domStuff/navigation';

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

setUpButtons()