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

function historyTm() {
    var ele = document.getElementById("historyTmText");
    var text = document.getElementById("displayText");
    if(ele.style.display == "block") {
            ele.style.display = "none";
        text.innerHTML = "История Туркменистана";
    }
    else {
        ele.style.display = "block";
        text.innerHTML = "История Туркменистана";
    }
} function ogp() {
    var ele = document.getElementById("ogpText");
    var text = document.getElementById("displayText");
    if(ele.style.display == "block") {
            ele.style.display = "none";
        text.innerHTML = "О.Г.П";
    }
    else {
        ele.style.display = "block";
        text.innerHTML = "О.Г.П";
    }
} function eng() {
    var ele = document.getElementById("engText");
    var text = document.getElementById("displayText");
    if(ele.style.display == "block") {
            ele.style.display = "none";
        text.innerHTML = "Английский язык";
    }
    else {
        ele.style.display = "block";
        text.innerHTML = "Английский язык";
    }
} function alg() {
    var ele = document.getElementById("algText");
    var text = document.getElementById("displayText");
    if(ele.style.display == "block") {
            ele.style.display = "none";
        text.innerHTML = "Алгебра";
    }
    else {
        ele.style.display = "block";
        text.innerHTML = "Алгебра";
    }
} function physics() {
    var ele = document.getElementById("physicsText");
    var text = document.getElementById("displayText");
    if(ele.style.display == "block") {
            ele.style.display = "none";
        text.innerHTML = "Физика";
    }
    else {
        ele.style.display = "block";
        text.innerHTML = "Физика";
    }
} function ogd() {
    var ele = document.getElementById("ogdText");
    var text = document.getElementById("displayText");
    if(ele.style.display == "block") {
            ele.style.display = "none";
        text.innerHTML = "О.Ж.Д";
    }
    else {
        ele.style.display = "block";
        text.innerHTML = "О.Ж.Д";
    }
} 