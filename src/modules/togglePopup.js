const togglePopup = () => {
    const popupCall = document.querySelector('.popup-call'),
        callBtn = document.querySelectorAll('.call-btn--modal');

    callBtn.forEach(elem => {
        elem.addEventListener('click', () => {
            event.preventDefault();
            popupCall.style.display = 'block';
        });        
    });   


    popupCall.addEventListener('click', () => {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
            popupCall.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popupCall.style.display = 'none';
            }
        }
    });
};

export default togglePopup;