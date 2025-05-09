const counter = document.getElementById("countdown");
const btn = document.getElementById("startButton");

let starttime = 10;
let flag = false;
let timerId;

btn.addEventListener("click", () => {
    // repeat with the interval of 1 seconds
    if (flag === false){
        starttime = 10;
        timerId = setInterval(() => {
            
            counter.textContent = starttime;
            starttime = starttime - 1;
            if (starttime < 0){
                clearTimeout(timerId);
                flag = false; 
            }
        }, 1000);
        flag = true;
    }
    else{
        clearTimeout(timerId);
        flag = false;
    }
    

});

    



