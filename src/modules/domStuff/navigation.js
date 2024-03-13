import createHome from "../pages/home";

function setUpCategory() {

}

function setUpButtons(category) {
    const buttons = {
        thisWeek: {
            title: 'THIS WEEK',
        },
        thisMonth: {
            title: 'THIS MONTH',
        },
        lastMonth: {
            title: 'LAST MONTH',
        },
        thisYear: {
            title: 'THIS YEAR',
        },
        total: {
            title: 'TOTAL',
        }
    }

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

    return {buttons}
}

export {setUpButtons}