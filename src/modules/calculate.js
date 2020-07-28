const calculate = () => {
    const myonoffswitch = document.getElementById('myonoffswitch'),
        onoffswitchTwo = document.getElementById('myonoffswitch-two'),
        selectBox = document.querySelectorAll('.select-box'),
        titleText = document.querySelectorAll('.title-text'),
        calcResult = document.getElementById('calc-result'),
        formControl = document.querySelectorAll('.form-control'),
        accordion = document.getElementById('accordion');

    calcResult.disabled = true;
   

    const calc = () => {
        let d2 = 0,  d22 = 0,  bottom = 0, sumRes, count,
            r1 = 0,  r21 = 0,
            r2 = 0,  r22 = 0;

        if (myonoffswitch.checked) {
            count = 10000;

            selectBox[2].style.display = 'none';
            selectBox[3].style.display = 'none';
            titleText[1].style.display = 'none';

            if (formControl[0].options[1].selected) {
                d2 += (count / 1000) *20;
            }
            if (formControl[1].options[1].selected) {
                r1 += (count / 1000) *30;
            }
            if (formControl[1].options[2].selected) {
                r2 += (count / 1000) *50;
            }

            if (onoffswitchTwo.checked) {
                bottom += 1000;
            }

        } else {
            count = 15000;

            selectBox[2].style.display = 'inline-block';
            selectBox[3].style.display = 'inline-block';
            titleText[1].style.display = 'block';

            
            if (formControl[0].options[1].selected) {
                d2 += (count / 1000) *20;
            }
            if (formControl[1].options[1].selected) {
                r1 += (count / 1000) *30;
            }
            if (formControl[1].options[2].selected) {
                r2 += (count / 1000) *50;
            }

            if (formControl[2].options[1].selected) {
                d22 += (count / 1000) *20;
            }
            if (formControl[3].options[1].selected) {
                r21 += (count / 1000) *30;
            }
            if (formControl[3].options[2].selected) {
                r22 += (count / 1000) *50;
            }

            if (onoffswitchTwo.checked) {
                bottom += 2000;
            }
        }

        sumRes = count + d2 + d22 + r1 + r21 + r2 + r22 + bottom; 
        return sumRes;
    };

    accordion.addEventListener('click', () => {  
        calcResult.value = calc();
    });



    // модальное окно с классом popup-discount
    const discBtn = document.getElementById('discBtn'),
        panelCollapse = document.querySelectorAll('.panel-collapse'),
        popupDiscount = document.querySelector('.popup-discount');   


    discBtn.addEventListener('click', () => {
        panelCollapse[3].classList.add('in');

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

export default calculate;