const calculateAcordeon = () => {
    const panelHeading = document.querySelectorAll('.panel-heading'),
        panelCollapse = document.querySelectorAll('.panel-collapse'),
        constructBtn = document.querySelectorAll('.construct-btn');

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


};

export default calculateAcordeon;