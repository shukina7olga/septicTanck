const getCheck = () => {
    const checkBtn = document.querySelector('.check-btn'),
        popupCheck = document.querySelector('.popup-check');

    checkBtn.addEventListener('click', () => {
        popupCheck.style.display = 'block';
    });
    
    popupCheck.addEventListener('click', () => {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
            popupCheck.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popupCheck.style.display = 'none';
            }
        }
    });
};

export default getCheck;