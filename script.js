function updateTime() {
    let currentDate = new Date();

    let hours = currentDate.getHours().toString().padStart(2, '0');
    let minutes = currentDate.getMinutes().toString().padStart(2, '0');
    let seconds = currentDate.getSeconds().toString().padStart(2, '0');
    
    document.getElementById('idomost').textContent = hours + ":" + minutes + ":" + seconds;
}

setInterval(updateTime, 1000);

updateTime();
