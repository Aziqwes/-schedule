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

const switchDay = (day) => {
    switch (day) {
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
};
switchDay(theDay);

let caunt = theDay;

buttonBack.addEventListener('click', () => {
    for (let i = 0; i < scheduleText.length; i++) {
        scheduleText[i].classList.remove('_active');
        scheduleText[i].classList.add('_hidden');
    }
    caunt <= 0 && (caunt = caunt + 7);
    scheduleText[--caunt].classList.add('_active');
    switchDay(caunt);
});
buttonNext.addEventListener('click', () => {
    for (let i = 0; i < scheduleText.length; i++) {
        scheduleText[i].classList.remove('_active');
        scheduleText[i].classList.add('_hidden');
    }
    caunt >= 6 && (caunt = caunt - 7);
    scheduleText[++caunt].classList.add('_active');
    switchDay(caunt);
});
