"use strict";
window.onload = function () {
    setInterval(counter, 1000);

    function counter() {
        const date = new Date();
        const displayDate = `${date.getFullYear()}-${date.getMonth() > 9 ? date.getMonth() : "0" + date.getMonth()}-${date.getDay() > 9 ? date.getDay() : "0" + date.getDay()} ${date.getHours() > 9 ? date.getHours() : "0" + date.getHours()}:${date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes()}:${date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds()}`
        document.getElementById("clock").innerHTML = displayDate;
    }
}



