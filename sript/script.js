'use strict';
// модалка при нажатии в чердаке и подвале
const togglePopup = () => {
    const popupCall = document.querySelector('.popup-call'),
        callBtn = document.querySelectorAll('.call-btn');

    callBtn.forEach(elem => {
        elem.addEventListener('click', () => {
            popupCall.style.display = 'block';
        });        
    });   


    popupCall.addEventListener('click', () => {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
            popupCall.style.display = 'none';
        } else {
            target = target.closest('popup-content');
            if (!target) {
                popupCall.style.display = 'none';
            }
        }
    });
};

togglePopup();

// аккордеон
const accordion = () => {
    const headingOne = document.getElementById('headingOne-two'),
        headingTwo = document.getElementById('headingTwo-two'),
        headingThree = document.getElementById('headingThree-two'),
        collapseOne = document.getElementById('collapseOne-two'),
        collapseTwo = document.getElementById('collapseTwo-two'),
        collapseThree = document.getElementById('collapseThree-two');

    headingOne.addEventListener('click', event => {
        event.preventDefault();
        console.log('0');
        collapseOne.style.display = 'block';
        collapseTwo.style.display = 'none';
        collapseThree.style.display = 'none';            
    });

    headingTwo.addEventListener('click', event => {
        event.preventDefault();
        console.log('1');
        collapseTwo.style.display = 'block';
        collapseOne.style.display = 'none';
        collapseThree.style.display = 'none';             
    });

    headingThree.addEventListener('click', event => {
        event.preventDefault();
        console.log('2');
        collapseThree.style.display = 'block';
        collapseOne.style.display = 'none';
        collapseTwo.style.display = 'none';        
    });
};

accordion();

// отправка форм
const sendForm = () => {
    const errorMessage = 'Что-то пошло не так',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо, мы скоро с Вами свяжемся!';

        

    const postData = body => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };