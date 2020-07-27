const calculateAcordeon = () => {
    const panelHeading = document.querySelectorAll('.panel-heading'),
        panelCollapse = document.querySelectorAll('.panel-collapse'),
        constructBtn = document.querySelectorAll('.construct-btn'),
        discBtn = document.getElementById('discBtn');

    panelHeading.forEach((elem, i) => {
        elem.addEventListener('click', () => {
            event.preventDefault(); 
        
            for (let j = 0; j < panelCollapse.length; j++) {
                if (i === j) {
                    panelCollapse[j].classList.toggle('in');
                } else {
                    panelCollapse[j].classList.remove('in');
                }
            }
        });

        // аккордеон при клике на кнопку
        constructBtn.forEach((e, i) => {
            e.addEventListener('click', event => {
                event.preventDefault();
                let target = event.target;
                if (target.closest('.construct-btn')) {
                    if (i < panelCollapse.length - 1){
                        panelCollapse[i].classList.remove('in');
                        panelCollapse[i + 1].classList.add('in');
                    } 
                }
            }); 
        });      
    });

    // модальное окно с классом popup-discount
    discBtn.addEventListener('click', () => {
        panelCollapse[3].classList.add('in');
        const popupDiscount = document.querySelector('.popup-discount');

        popupDiscount.style.display = 'block';
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
    });

};

export default calculateAcordeon;