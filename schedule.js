const nowDate = new Date();
const theDay = nowDate.getDay();
const buttonBack = document.querySelector('.arrow__back');
const buttonNext = document.querySelector('.arrow__next');

let dayTitle = document.querySelector('#dayTitle');
let scheduleText = document.querySelectorAll('.schedule__day');
let dayTitleAdd = '';

for (let i = 0; i < scheduleText.length; i++) {
    scheduleText[i].classList.remove('_active');
    scheduleText[i].classList.add('_hidden');
}
scheduleText[theDay].classList.add('_active');

switch (theDay) {
    case 0:
        dayTitleAdd = 'сегодня воскресенье';
        break;
    case 1:
        dayTitleAdd = 'сегодня понедельник';
        break;
    case 2:
        dayTitleAdd = 'сегодня вторник';
        break;
    case 3:
        dayTitleAdd = 'сегодня среда';
        break;
    case 4:
        dayTitleAdd = 'сегодня четверг';
        break;
    case 5:
        dayTitleAdd = 'сегодня пятница';
        break;
    case 6:
        dayTitleAdd = 'сегодня суббота';
        break;
}
dayTitle.innerHTML = dayTitleAdd;

buttonBack.addEventListener('click', () => {
    alert('Нажал кнопку назад! Оброботай этот запрос в JS строка 42');
    // Писать логику здесь
});
buttonNext.addEventListener('click', () => {
    alert('Нажал кнопку Вперед! Оброботай этот запрос в JS строка 45');
    // Писать логику здесь
});
