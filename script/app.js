

let itBeNight = () =>{
	document.documentElement.classList.add('is-night');
}

let thereBeLight = () =>{
	document.documentElement.classList.remove('is-night');
}

function setClock () {

    const hourhand = document.querySelector('[data-hour-hand]');
    const minutehand = document.querySelector('.js-minute');
    const secondhand = document.querySelector('.js-second');

    const currentDate = new Date();
    const seconds = currentDate.getSeconds() / 60;
    const minutes = (seconds+currentDate.getMinutes()) / 60;
    const hours = (minutes+currentDate.getHours()) / 12;

    console.log(currentDate.getSeconds())

    setRotation(secondhand, seconds);
    setRotation(minutehand, minutes);
    setRotation(hourhand, hours);

}

function setRotation(element, rotation)
{
    element.style.setProperty('--rotation', rotation * 360)
}

const getAPI = async () => {
	const endPoint = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=nl&cnt=1`;
	const weatherResponse = await get(endPoint);

	showResult(setClock);
};

document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded!");
    setClock();
    itBeNight();
    thereBeLight();

    setInterval(setClock, 1000)
});