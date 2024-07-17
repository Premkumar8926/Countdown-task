let countdownElement = document.getElementById("countdown");

// Display the countdown
document.getElementById("countdown").innerHTML = "10";

setTimeout(function() {
    countdownElement.innerHTML = "9";
    setTimeout(function() {
        countdownElement.innerHTML = "8";
        setTimeout(function() {
            countdownElement.innerHTML = "7";
            setTimeout(function() {
                countdownElement.innerHTML = "6";
                setTimeout(function() {
                    countdownElement.innerHTML = "5";
                    setTimeout(function() {
                        countdownElement.innerHTML = "4";
                        setTimeout(function() {
                            countdownElement.innerHTML = "3";
                            setTimeout(function() {
                                countdownElement.innerHTML = "2";
                                setTimeout(function() {
                                    countdownElement.innerHTML = "1";
                                    setTimeout(function() {
                                        countdownElement.innerHTML = `<span style="color: #FF9933;">Happy</span> <span style="color: #FFFFFF;">Independence</span> <span style="color: #138808;">Day!</span>`;
                                    }, 1000); // Final message delay
                                }, 1000); // Countdown for 1 second
                            }, 1000); // Countdown for 1 second
                        }, 1000); // Countdown for 1 second
                    }, 1000); // Countdown for 1 second
                }, 1000); // Countdown for 1 second
            }, 1000); // Countdown for 1 second
        }, 1000); // Countdown for 1 second
    }, 1000); // Countdown for 1 second
}, 1000); // Countdown for 1 second
