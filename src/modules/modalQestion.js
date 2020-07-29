const modalQestion = () => {
    const directorkBtn = document.querySelector('.director-btn'),
        popupConsult = document.querySelector('.popup-consultation'),
        directorForm = document.querySelectorAll('.director-form');

    const errorMessage = 'Что-то пошло не так',
    loadMessage = 'Загрузка...',
    successMessage = 'Спасибо, мы скоро с Вами свяжемся!';

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font=size: 2rem; color: black;';

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

    directorForm.forEach(element => {
        element.addEventListener('submit', event => {
            event.preventDefault(); // чтобы не было перезагрузки стр
            element.appendChild(statusMessage);
            const formData = new FormData(element);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            statusMessage.textContent = loadMessage;
            
        // let question = document.querySelector('input[name="user_quest"]').value;
        // body['userQuestion'] = question;

            const clearInput = () => { 
                const inputs = directorForm.querySelectorAll('input');
                inputs.forEach(item => {item.value = '';});                        
                
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

export default modalQestion;