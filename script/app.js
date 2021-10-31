let timeZone = 'Asia/Tokyo';

let itBeNight = () =>{
	document.documentElement.classList.add('is-night');
}

let thereBeLight = () =>{
	document.documentElement.classList.remove('is-night');
}

function setClock () {
    var DateTime = luxon.DateTime.local().setZone();
    DateTime = luxon.DateTime.local().setZone(timeZone);

    if(DateTime.hour >= 7 && DateTime.hour <= 18)
    {
        thereBeLight();
    }
    else
    {
        itBeNight();
    }

    const time = document.querySelector('.js-time');
    time.innerHTML= DateTime.toFormat("HH':'mm':'ss");


    const seconds = DateTime.second / 60;
    const minutes = (seconds+DateTime.minute) / 60;
    const hours = (minutes+DateTime.hour) / 12;

    const hourhand = document.querySelector('.js-hour');
    const minutehand = document.querySelector('.js-minute');
    const secondhand = document.querySelector('.js-second');

    setRotation(secondhand, seconds);
    setRotation(minutehand, minutes);
    setRotation(hourhand, hours);
}

function setRotation(element, rotation)
{
    element.style.setProperty('--rotation', rotation * 360)
    element.setAttribute('data-hand',rotation);
}

function myFunction() {
    timeZone = document.querySelector(".js-select").value;
    setClock;
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded!");
    setClock;
    setInterval(setClock, 1000)

    const select = document.querySelector(".js-select");
    timeZone = select.value;
    select.addEventListener("change", myFunction);
});