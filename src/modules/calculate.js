const calculate = () => {
    const myonoffswitch = document.getElementById('myonoffswitch'),
        onoffswitchTwo = document.getElementById('myonoffswitch-two'),
        selectBox = document.querySelectorAll('.select-box'),
        titleText = document.querySelectorAll('.title-text'),
        calcResult = document.getElementById('calc-result');

    let result = 0,
        flag1 = true,
        flag2 =true;
    calcResult.disabled = true;

    const calc = () => {
        if (flag1 === false) {
            result = 10000;
            if (flag1 === false) {
                result += 1000;
            }
        } else if (flag1 === true) {
            result = 15000;
            if (flag1 === true) {
                result += 2000;
            }
        }        
    };

    calc();

    onoffswitchTwo.addEventListener('click', () => {
        if (onoffswitchTwo.checked) {
            flag2 = false; // есть днище 
        } else {
            flag2 = true; // нет днища
        }
    });  


    myonoffswitch.addEventListener('click', () => {
        if (myonoffswitch.checked) {
            selectBox[2].style.display = 'none';
            selectBox[3].style.display = 'none';
            titleText[1].style.display = 'none';
            flag1 = false; // однокамерный 
            
        } else {
            selectBox[2].style.display = 'inline-block';
            selectBox[3].style.display = 'inline-block';
            titleText[1].style.display = 'block';
            flag1 = true; // двукамерный 
            
        }        
    });
    calcResult.value = result;
};

export default calculate;