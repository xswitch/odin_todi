function setUpButtons() {
    const buttons = {
        home: document.querySelector('#homeButton'),
        week: document.querySelector('#weekButton'),
        month: document.querySelector('#monthButton')
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