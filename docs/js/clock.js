"use strict";
window.onload = function(){
   setInterval(counter, 1000);

    function counter() {
        const date = new Date();
        const displayDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        document.getElementById("clock").innerHTML = displayDate;
    }
}



