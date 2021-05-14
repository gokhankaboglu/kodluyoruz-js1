
function askTime(){
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    hour = ( hour < 10 ) ? '0' + hour : hour;
    minute = (minute < 10 ) ? '0' + minute : minute;
    second = ( second < 10 ) ? '0' + second : second;

    let time = `${hour}:${minute}:${second}`

    document.querySelector('#clock').innerHTML = time;

    setTimeout(askTime, 1000)
}

function askDay(){
    let day = new Date();
    let week = new Array(7);
    week[0] = 'Pazartesi';
    week[1] = 'Salı';
    week[2] = 'Çarşamba';
    week[3] = 'Perşembe';
    week[4] = 'Cuma';
    week[5] = 'Cumartesi';
    week[6] = 'Pazar';
    
    let dayText = week[(day.getDay()) - 1];

    document.querySelector('#day').innerHTML = dayText;
}

askTime()
askDay()

let person = prompt('Lütfen, adınızı giriniz : ')
let newPerson = document.querySelector('#name').innerHTML = `Merhaba ${person}, Hoşgeldin`;