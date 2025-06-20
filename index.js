function createDigits(id,digitArray){
    const element = document.getElementById(id);

    const circle = document.createElement("div");
    circle.className = "highlightCircle";
    element.appendChild(circle);

    const track = document.createElement("div");
    track.className = "digitTrack";

    digitArray.forEach(currentDigit => {
        const div = document.createElement("div");
        div.textContent = currentDigit;
        div.className = `digit`;
        div.id=`${id}${currentDigit}`;
        track.appendChild(div);
    });

    element.appendChild(track);

    return track;

}

const arrThree = [0,1,2];
const arrTen = [0,1,2,3,4,5,6,7,8,9];
const arrSix = [0,1,2,3,4,5];

const hoursFirst = createDigits("hoursFirst",arrThree);
const hoursSecond = createDigits("hoursSecond",arrTen);
const minutesFirst = createDigits("minutesFirst",arrSix);
const minutesSecond = createDigits("minutesSecond",arrTen);
const secondsFirst = createDigits("secondsFirst",arrSix);
const secondsSecond = createDigits("secondsSecond",arrTen);

function updateClock(){

    const currentDate = new Date();
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentSeconds = currentDate.getSeconds();

    const hF = Math.floor(currentHours/10);
    const hS = currentHours%10;
    const mF = Math.floor(currentMinutes/10);
    const mS = currentMinutes%10;
    const sF = Math.floor(currentSeconds/10);
    const sS = currentSeconds%10;

    const translateHeight = 54;

    hoursFirst.style.transform = `translateY(-${hF * translateHeight + 9}px)`;
    hoursSecond.style.transform = `translateY(-${hS * translateHeight + 9}px)`;
    minutesFirst.style.transform = `translateY(-${mF * translateHeight + 9}px)`;
    minutesSecond.style.transform = `translateY(-${mS * translateHeight + 9}px)`;
    secondsFirst.style.transform = `translateY(-${sF * translateHeight + 9}px)`;
    secondsSecond.style.transform = `translateY(-${sS * translateHeight + 9}px)`;

    document.querySelectorAll('.digit').forEach(d => d.classList.remove('active'));

    console.log(hF.toString());
    
    document.getElementById(`hoursFirst${hF.toString()}`).classList.add('active');
    document.getElementById(`hoursSecond${hS.toString()}`).classList.add('active');
    document.getElementById(`minutesFirst${mF.toString()}`).classList.add('active');
    document.getElementById(`minutesSecond${mS.toString()}`).classList.add('active');
    document.getElementById(`secondsFirst${sF.toString()}`).classList.add('active');
    document.getElementById(`secondsSecond${sS.toString()}`).classList.add('active');
    // document.getElementById(hS.toString()).classList.add('active');
    // document.getElementById(mF.toString()).classList.add('active');
    // document.getElementById(mS.toString()).classList.add('active');
    // document.getElementById(sF.toString()).classList.add('active');
    // document.getElementById(sS.toString()).classList.add('active');
}

updateClock();
setInterval(updateClock,1000);