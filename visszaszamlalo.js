const countdownElement = document.getElementById("countdown");
const datePicker = document.getElementById("datePicker");

function updateCountdown() {
    const selectedDate = new Date(datePicker.value); 
    const now = new Date();

    if (isNaN(selectedDate)) {
        countdownElement.innerHTML = "Kérlek válassz egy érvényes dátumot!";
        return;
    }

    const diffTime = selectedDate - now;

    if (diffTime > 0) {
        const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days} nap, ${hours} óra, ${minutes} perc, ${seconds} másodperc`;
    } else {
        countdownElement.innerHTML = "A választott dátum már elmúlt!";
    }
}

datePicker.addEventListener("input", function() {
    if (datePicker.value) {
        setInterval(updateCountdown, 1000);
    }
});

if (datePicker.value) {
    setInterval(updateCountdown, 1000); }
