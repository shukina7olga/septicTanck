'use strict';

import togglePopup from './modules/togglePopup';
import accordion from './modules/accordion';
import sendForm from './modules/sendForm';
import sharesInf from './modules/sharesInf';
import popupDisc from './modules/popupDisc';
import getCheck from './modules/getCheck';
import modalQestion from './modules/modalQestion';
import calculateAcordeon from './modules/calculateAcordeon';
import calculate from './modules/calculate';



// модалка при нажатии в чердаке и подвале
togglePopup();
// аккордеон
accordion();
// отправка форм
sendForm();
// акции доп инфа
sharesInf();
// акции модалка
popupDisc();
// модалка получить чек-лист и скидку
getCheck();
// модалка остались вопросы
modalQestion();
// аккордееон калькулятор + модалка
calculateAcordeon();
calculate();
