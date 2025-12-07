function updateClock() {
    const now = new Date();
    
    // Update date
    const dateElement = document.getElementById('date');
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    dateElement.textContent = now.toLocaleDateString('en-US', options);

    // Update clock hands
    const secondsRatio = now.getSeconds() / 60;
    const minutesRatio = (secondsRatio + now.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + now.getHours()) / 12;

    updateHand('hour-hand', hoursRatio);
    updateHand('minute-hand', minutesRatio);
    updateHand('second-hand', secondsRatio);
}

function updateHand(handClass, rotation) {
    const hand = document.querySelector(`.${handClass}`);
    hand.style.setProperty('--rotation', rotation * 360);
}

// Update clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock();