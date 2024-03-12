import NewWorkEntry from './modules/workEntry';
import './style.css';

console.log('Hello World')


const firstWorkEntry = new NewWorkEntry('2024-12-03', '0700', '1630');

console.log(firstWorkEntry.getHours())