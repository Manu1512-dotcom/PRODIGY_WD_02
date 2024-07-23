const minuteDisplay=document.querySelector("#minute");
const secondDisplay=document.querySelector("#second");
const centisecDisplay=document.querySelector("#centisec");
const playBtn=document.querySelector("#play");
const resetBtn=document.querySelector("#reset");
const lapBtn=document.querySelector("#lap");
const lapList=document.querySelector("#list");
const lapContainer=document.querySelector("#lap-times");
const clearAllBtn=document.querySelector("#clearAllLaps");

let play=false;
let lapNumber=0;

function updateCentiSec()
{
    if(play===true)
    {
        let value=centisecDisplay.innerText;
        value++;
        if(value==100)
        {
            centisecDisplay.innerText="00";
        }
        else if(value>0 && value<10)
        {
            centisecDisplay.innerText="0"+value.toString();
        }
        else
        {
            centisecDisplay.innerText=value.toString();
        }
    }
}

function updateSecond()
{
    if(play===true)
    {
        let value=secondDisplay.innerText;
        value++;
        if(value==60)
        {
            secondDisplay.innerText="00";
        }
        else if(value>0 && value<10)
        {
            secondDisplay.innerText="0"+value.toString();
        }
        else
        {
            secondDisplay.innerText=value.toString();
        }
    }
}

function updateMin()
{
    if(play===true)
    {
        let value=minuteDisplay.innerText;
        value++;
        if(value==60)
        {
            minuteDisplay.innerText="00";
        }
        else if(value>0 && value<10)
        {
            minuteDisplay.innerText="0"+value.toString();
        }
        else
        {
            minuteDisplay.innerText=value.toString();
        }
    }
}

setInterval(updateMin , 60000);
setInterval(updateSecond,1000);
setInterval(updateCentiSec,10);

playBtn.addEventListener("click",(evt)=>{
    if(play===true)
    {
        play=false;
        playBtn.innerText="Start"
    }
    else
    {
        play=true;
        playBtn.innerText="Stop";
        resetBtn.style.visibility="visible";
        lapBtn.style.visibility="visible";
    }
});

function removeAllLaps()
{
    while(lapList.hasChildNodes())
    {
        lapList.removeChild(lapList.firstChild);
    }
    lapNumber=0;
    lapContainer.style.visibility="hidden";
    clearAllBtn.style.visibility="hidden";
}

resetBtn.addEventListener("click",(evt)=>{
    centisecDisplay.innerText="00";
    secondDisplay.innerText="00";
    minuteDisplay.innerText="00";
    play=false;
    playBtn.innerText="Start";
    resetBtn.style.visibility="hidden";
    lapBtn.style.visibility="hidden";
    removeAllLaps();
});

function addLap(minValue,secValue,centiValue)
{
    let newLap=document.createElement("li");
    newLap.classList.add("laps");
    let content=`Lap ${lapNumber}   ${minValue}:${secValue}:${centiValue}`;
    newLap.innerText=content;
    lapList.append(newLap);
    lapContainer.style.visibility="visible";
    clearAllBtn.style.visibility="visible";
}


lapBtn.addEventListener("click",(evt)=>{
    let minValue=minuteDisplay.innerText;
    let secValue=secondDisplay.innerText;
    let centiValue=centisecDisplay.innerText;
    lapNumber++;
    addLap(minValue,secValue,centiValue);
});

clearAllBtn.addEventListener("click",removeAllLaps);