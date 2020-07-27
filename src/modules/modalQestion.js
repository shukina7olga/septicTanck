const modalQestion = () => {
    const directorkBtn = document.querySelector('.director-btn'),
    popupConsult = document.querySelector('.popup-consultation');

    directorkBtn.addEventListener('click', () => {
        popupConsult.style.display = 'block';
    });

    popupConsult.addEventListener('click', () => {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
            popupConsult.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popupConsult.style.display = 'none';
            }
        }
    });
};

export default modalQestion;