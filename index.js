var HFirst = document.getElementById("H-First");
var HSecond = document.getElementById("H-Second");
var MFirst = document.getElementById("M-First");
var MSecond = document.getElementById("M-Second");
var SFirst = document.getElementById("S-First");
var SSecond = document.getElementById("S-Second");
var translateLength = 50;
function CreateDigits(id, digits) {
    var Element = document.getElementById(id);
    var HighlightCircle = document.createElement("div");
    HighlightCircle.className = "Highlight-Circle";
    Element === null || Element === void 0 ? void 0 : Element.appendChild(HighlightCircle);
    var Track = document.createElement("div");
    Track.className = "Track";
    digits.forEach(function (n) {
        var Digit = document.createElement("div");
        Digit.textContent = n.toString();
        Digit.id = "".concat(id).concat(n);
        Digit.className = "Digit";
        Track.appendChild(Digit);
    });
    Element === null || Element === void 0 ? void 0 : Element.appendChild(Track);
    return Track;
}
var ArrThree = [0, 1, 2];
var ArrSix = [0, 1, 2, 3, 4, 5];
var ArrTen = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var HFirstTrack = CreateDigits("H-First", ArrThree);
var HSecondTrack = CreateDigits("H-Second", ArrTen);
var MFirstTrack = CreateDigits("M-First", ArrSix);
var MSecondTrack = CreateDigits("M-Second", ArrTen);
var SFirstTrack = CreateDigits("S-First", ArrSix);
var SSecondTrack = CreateDigits("S-Second", ArrTen);
function UpdateClock() {
    var currentDate = new Date();
    console.log(currentDate);
    var currentHours = currentDate.getHours();
    var currentMinutes = currentDate.getMinutes();
    var currentSeconds = currentDate.getSeconds();
    var tempCurrentHours;
    var meridian;
    if (currentHours > 12) {
        tempCurrentHours = currentHours - 12;
        meridian = "PM";
    }
    else {
        tempCurrentHours = currentHours;
        meridian = "AM";
    }
    var Meridian = document.getElementById("Meridian");
    if (Meridian !== null)
        Meridian.textContent = meridian;
    var HF = Math.floor(tempCurrentHours / 10);
    var HS = tempCurrentHours % 10;
    var MF = Math.floor(currentMinutes / 10);
    var MS = currentMinutes % 10;
    var SF = Math.floor(currentSeconds / 10);
    var SS = currentSeconds % 10;
    HFirstTrack.style.transform = "translateY(-".concat(HF * translateLength, "px)");
    HSecondTrack.style.transform = "translateY(-".concat(HS * translateLength, "px)");
    MFirstTrack.style.transform = "translateY(-".concat(MF * translateLength, "px)");
    MSecondTrack.style.transform = "translateY(-".concat(MS * translateLength, "px)");
    SFirstTrack.style.transform = "translateY(-".concat(SF * translateLength, "px)");
    SSecondTrack.style.transform = "translateY(-".concat(SS * translateLength, "px)");
}
UpdateClock();
setInterval(UpdateClock, 1000);
