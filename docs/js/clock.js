"use strict";
window.onload = function () {
    setInterval(counter, 1000);

    function counter() {
        const date = new Date();
        const displayDate = `${date.getFullYear()}-${date.getMonth()+1 > 9 ? date.getMonth()+1 : "0" + (date.getMonth()+1)}-${date.getDate() > 9 ? date.getDate() : "0" + date.getDate()} ${date.getHours() > 9 ? date.getHours() : "0" + date.getHours()}:${date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes()}:${date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds()}`
        document.getElementById("clock").innerHTML = displayDate;
    }
}



