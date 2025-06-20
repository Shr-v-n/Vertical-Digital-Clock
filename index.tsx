const HFirst = document.getElementById("H-First");
const HSecond = document.getElementById("H-Second");
const MFirst = document.getElementById("M-First");
const MSecond = document.getElementById("M-Second");
const SFirst = document.getElementById("S-First");
const SSecond = document.getElementById("S-Second");

const translateLength = 50;

function CreateDigits(id:string ,digits : Number[]):HTMLDivElement{

    const Element = document.getElementById(id);

    const HighlightCircle = document.createElement("div");
    HighlightCircle.className="Highlight-Circle";
    Element?.appendChild(HighlightCircle);

    const Track = document.createElement("div");
    Track.className="Track";

    digits.forEach(n => {
        const Digit = document.createElement("div");
        Digit.textContent = n.toString();
        Digit.id = `${id}${n}`;
        Digit.className = "Digit";
        Track.appendChild(Digit);
    })

    Element?.appendChild(Track);
    return Track;

}

const ArrThree = [0,1,2];
const ArrSix = [0,1,2,3,4,5];
const ArrTen = [0,1,2,3,4,5,6,7,8,9];

const HFirstTrack = CreateDigits("H-First",ArrThree);
const HSecondTrack = CreateDigits("H-Second",ArrTen);
const MFirstTrack = CreateDigits("M-First",ArrSix);
const MSecondTrack = CreateDigits("M-Second",ArrTen);
const SFirstTrack = CreateDigits("S-First",ArrSix);
const SSecondTrack = CreateDigits("S-Second",ArrTen);

function UpdateClock(){

    const currentDate = new Date();
    console.log(currentDate)
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentSeconds = currentDate.getSeconds();


    let tempCurrentHours:number;
    let meridian:string;
    if(currentHours>12){
        tempCurrentHours = currentHours - 12;
        meridian= "PM";
    }
    else{
        tempCurrentHours = currentHours;
        meridian= "AM";
    }

    const Meridian = document.getElementById("Meridian");
    if(Meridian !== null)
    Meridian.textContent = meridian;

    const HF = Math.floor(tempCurrentHours/10) ;
    const HS = tempCurrentHours%10;
    const MF = Math.floor(currentMinutes/10);
    const MS = currentMinutes%10;
    const SF = Math.floor(currentSeconds/10);
    const SS = currentSeconds%10;

    HFirstTrack.style.transform = `translateY(-${HF * translateLength}px)`;
    HSecondTrack.style.transform = `translateY(-${HS * translateLength}px)`;
    MFirstTrack.style.transform = `translateY(-${MF * translateLength}px)`;
    MSecondTrack.style.transform = `translateY(-${MS * translateLength}px)`;
    SFirstTrack.style.transform = `translateY(-${SF * translateLength}px)`;
    SSecondTrack.style.transform = `translateY(-${SS * translateLength}px)`;



}

UpdateClock();
setInterval(UpdateClock,1000);