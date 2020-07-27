const sendForm = () => {
    'use strict';
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

export default sendForm;