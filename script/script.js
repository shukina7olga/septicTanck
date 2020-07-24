'use strict';
// модалка при нажатии в чердаке и подвале
const togglePopup = () => {
    const popupCall = document.querySelector('.popup-call'),
        callBtn = document.querySelectorAll('.call-btn');

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
        collapseOne.style.display = 'block';
        collapseTwo.style.display = 'none';
        collapseThree.style.display = 'none';            
    });

    headingTwo.addEventListener('click', event => {
        event.preventDefault();
        collapseTwo.style.display = 'block';
        collapseOne.style.display = 'none';
        collapseThree.style.display = 'none';             
    });

    headingThree.addEventListener('click', event => {
        event.preventDefault();
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

    const forms = document.querySelectorAll('form'),
        userName = document.getElementsByName('user_name'),
        userPhone = document.getElementsByName('user_phone'),
        userQuest = document.getElementsByName('user_quest');

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font=size: 2rem; color: black;';

    userName.forEach(element => {
        element.addEventListener('input', function() {
            this.value = this.value.replace(/([^А-ЯЁa-яё\s])|([A-Za-z])/gi, '');
        });
    });

    userPhone.forEach(element => {
        element.addEventListener('input', function() {
            this.value = this.value.replace(/[^+\d]/g, '');
        });
    });


    forms.forEach(element => {
        element.addEventListener('submit', event => {
            event.preventDefault(); // чтобы не было перезагрузки стр
            element.appendChild(statusMessage);
            const formData = new FormData(element);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            statusMessage.textContent = loadMessage;


            const clearInput = () => {
                forms.forEach(e => {
                    const inputs = e.querySelectorAll('input');
                    inputs.forEach(item => {item.value = '';});                        
                });

            };

            const removeMessage = () => {
                setTimeout(() => {
                    statusMessage.remove();
                }, 5000);
            };

            postData(body)
            .then((response) => {
                clearInput();
                removeMessage();
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
                statusMessage.textContent = successMessage;
        
            })
            .catch(error => {
                clearInput();
                removeMessage();
                statusMessage.textContent = errorMessage;
            });
        });
    });

    const postData = body => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };
};

sendForm();

// акции доп инфа
const sharesInf = () => {
    const addBtn = document.getElementById('addBtn'),
        addBlock = document.querySelectorAll('.addBlock');

    addBtn.addEventListener('click', () => {
        addBtn.style.display = 'none';

        addBlock.forEach(elem => {
            elem.classList.remove('hidden');
            elem.classList.remove('visible-sm-block');
        });
        
    });
}; 

sharesInf();

// акции модалка
const popupDisc = () => {
    const discountBtn = document.querySelectorAll('.discount-btn'),
    popupDiscount = document.querySelector('.popup-discount');

    discountBtn.forEach(elem => {
        elem.addEventListener('click', () => {
            popupDiscount.style.display = 'block';
        });
    });

    popupDiscount.addEventListener('click', () => {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
            popupDiscount.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popupDiscount.style.display = 'none';
            }
        }
    });

};

popupDisc();

// модалка получить чек-лист и скидку
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

getCheck();

// модалка остались вопросы
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

modalQestion();