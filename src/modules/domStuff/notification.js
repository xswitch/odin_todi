import Toastify from 'toastify-js'

const toast = (function() {
    function success(toastText) {
        Toastify({
            text: toastText,
            className: 'toastSuccess',
            style: {
                background: 'rgb(130, 250, 130)',
                color: 'black',
                borderRadius: '10px'
            },
            duration: 60000,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            stopOnFocus: true, // Prevents dismissing of toast on hover,
        }).showToast();
    }

    function error(toastText) {
        Toastify({
            text: toastText,
            className: 'toastError',
            duration: 6000,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            stopOnFocus: true, // Prevents dismissing of toast on hover,
        }).showToast();
    }

    function info(toastText) {
        Toastify({
            text: toastText,
            className: 'toastInfo',
            duration: 6000,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            stopOnFocus: true, // Prevents dismissing of toast on hover,
        }).showToast();
    }

    return {success, error, info}
})()

export {toast}

/* 
Standard amount of elements for notification popup
Ability to set custom classes {container: 'popupContainer', title: 'popupTitle', description: 'popupDescription'}
Store notifications in an array

*/