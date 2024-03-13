import El from "../domStuff/createEl";

function createHome() {
    const header = document.querySelector('.pageHeader');
    const container = document.querySelector('.pageContainer');

    const containers = {
        headerContainer: new El('div', {
            classes: 'headerContainer',
            parent: header,
        })
    }
}

export default createHome;