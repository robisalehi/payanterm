


document.addEventListener("DOMContentLoaded", () => {
    let secondCounter = 0;
    let minuteCounter = 0;
    let hourCounter = 0;
    setInterval(() => {
        if (secondCounter <= 60) {
            secondCounter++;
            document.getElementById("initial-second").textContent = secondCounter;
        }else {
            secondCounter = 0;
        }
    }, 1000);
   setInterval(() => {
    if(minuteCounter <= 60){
        minuteCounter++;
        document.getElementById("initial-minute").textContent = minuteCounter;
    }else{
        minuteCounter = 0;
    }
   },60000);
   setInterval(() =>{
    hourCounter++;
    document.getElementById("initial-hour").textContent = hourCounter;
   }, 3600000);
});