var monthtext = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
var dayField;
var monthField;
var yearField;
var surgeryDate;


function getDateSurgery() {
    dayField = document.getElementById("day").value;
    monthField = document.getElementById("month").value;
    yearField = document.getElementById("year").value;

    console.log("day:" + dayField);
    console.log("month:" + monthField);
    console.log("year:" + yearField);

    surgeryDate = new Date(yearField, monthField, dayField);
    if(typeof(Storage) != "undefined"){
        localStorage.setItem("surgeryDay", dayField);
        localStorage.setItem("surgeryMonth", monthField);
        localStorage.setItem("surgeryYear", yearField);
        console.log("Success");
    } else {
        console.log("No storage");
    }
}

function calculateFood(){
    console.log("year:" + localStorage.getItem("surgeryYear"));

    var foodYear = localStorage.getItem("surgeryYear");
    var foodMonth = localStorage.getItem("surgeryMonth") - 1;
    var foodDay = localStorage.getItem("surgeryDay") - 1;

    var foodDate = new Date(foodYear, foodMonth, foodDay);
    
    console.log("foodDate day: " + foodDate.getDate());
    // fetches paragraph element for foodDate
    var foodDateEl = document.getElementById("foodDate");
    foodDateEl.innerHTML = "<b>" + foodDate.getDate() + "-"
                            + monthtext[foodDate.getMonth()]
                            + "-" + 
                            foodDate.getUTCFullYear()
                            + "</b>";

    var daysLeft = Math.round((foodDate - Date.now()) / (1000*60*60*24));
    console.log("daysLeftFood: " + daysLeft);

    var daysLeftFoodEl = document.getElementById("foodDaysLeft");
    daysLeftFoodEl.innerHTML = daysLeft;
}

function calculateShower() {
    console.log("year:" + localStorage.getItem("surgeryYear"));

    var showerYear = localStorage.getItem("surgeryYear");
    var showerMonth = localStorage.getItem("surgeryMonth") - 1;
    var showerDay = localStorage.getItem("surgeryDay") - 3;

    var showerDate = new Date(showerYear, showerMonth, 
                            showerDay);
    
    console.log("showerDate day: " + showerDate.getDate());
    // fetches paragraph element for foodDate
    var showerDateEl = document.getElementById("showerDate");
    showerDateEl.innerHTML = "<b>" + showerDate.getDate() + "-"
                            + monthtext[showerDate.getMonth()]
                            + "-" + 
                            showerDate.getUTCFullYear()
                            + "</b>";
    var daysLeft = Math.round((showerDate - Date.now()) / (1000*60*60*24));
    console.log("daysLeftShower: " + daysLeft);

    var daysLeftShowerEl = document.getElementById("daysLeftShower");
    daysLeftShowerEl.innerHTML = daysLeft;
}

function calculateDeclaration() {
    console.log("year:" + localStorage.getItem("surgeryYear"));

    var decYear = localStorage.getItem("surgeryYear");
    var decMonth = localStorage.getItem("surgeryMonth") - 1;
    var decDay = localStorage.getItem("surgeryDay") - 1;
    
    var decDate = new Date(decYear, decMonth, 
                            decDay);
    
    console.log("decDate day: " + decDate.getDate());
    // fetches paragraph element for foodDate
    var decDateEl = document.getElementById("declarationDate");
    decDateEl.innerHTML = "<b>" + decDate.getDate() + "-"
                            + monthtext[decDate.getMonth()]
                            + "-" + 
                            decDate.getUTCFullYear()
                            + "</b>";
    var daysLeftDecEl = document.getElementById("daysLeftDec");
    daysLeftDecEl.innerHTML = daysLeft;
}

function calculateTeeth() {
    console.log("year:" + localStorage.getItem("surgeryYear"));

    var teethYear = localStorage.getItem("surgeryYear");
    var teethMonth = localStorage.getItem("surgeryMonth") - 1;
    var teethDay = localStorage.getItem("surgeryDay") - 2;
    
    var teethDate = new Date(teethYear, teethMonth, 
                            teethDay);
    
    console.log("teethDate day: " + teethDate.getDate());
    // fetches paragraph element for foodDate
    var teethDateEl = document.getElementById("teethDate");
    teethDateEl.innerHTML = "<b>" + teethDate.getDate() + "-"
                            + monthtext[teethDate.getMonth()]
                            + "-" + 
                            teethDate.getUTCFullYear()
                            + "</b>";

    var daysLeft = Math.round((teethDate - Date.now()) / (1000*60*60*24));
    console.log("daysLeftTeeth: " + daysLeft);

    var daysLeftTeethEl = document.getElementById("daysLeftTeeth");
    daysLeftTeethEl.innerHTML = daysLeft;
}

function calculateMedicine() {
    console.log("year:" + localStorage.getItem("surgeryYear"));

    var medYear = localStorage.getItem("surgeryYear");
    var medMonth = localStorage.getItem("surgeryMonth") - 1;
    var medDay = localStorage.getItem("surgeryDay") - 5;
    
    var medDate = new Date(medYear, medMonth, 
                            medDay);
    
    console.log("medDate day: " + medDate.getDate());
    // fetches paragraph element for foodDate
    var medDateEl = document.getElementById("medDate");
    medDateEl.innerHTML = "<b>" + medDate.getDate() + "-"
                            + monthtext[medDate.getMonth()]
                            + "-" + 
                            medDate.getUTCFullYear()
                            + "</b>";

    var daysLeft = Math.round((medDate - Date.now()) / (1000*60*60*24));
    console.log("daysLeftTeeth: " + daysLeft);

    var daysLeftMedEl = document.getElementById("daysLeftMed");
    daysLeftMedEl.innerHTML = daysLeft;
}

function progressBarShower() {
    var progressShowerEl = document.getElementById("progressShower");
    var currentWidth = parseInt(progressShowerEl.style.width);

    var newWidth = currentWidth + 100/3;

    if(newWidth > 100) {
        newWidth = 100;
    }

    progressShowerEl.style.width = newWidth + "%";

    console.log("cureentWidth: " + newWidth);
}

function progressBarFood() {
    var progressFoodEl = document.getElementById("progressFood");
    var currentWidth = parseInt(progressFoodEl.style.width);

    var newWidth = currentWidth + 100;

    if(newWidth > 100) {
        newWidth = 100;
    }

    progressFoodEl.style.width = newWidth + "%";

    console.log("cureentWidth: " + newWidth);
}

function progressBarTeeth() {
    var progressTeethEl = document.getElementById("progressTeeth");
    var currentWidth = parseInt(progressTeethEl.style.width);

    var newWidth = currentWidth + 100/4;

    if(newWidth > 100) {
        newWidth = 100;
    }

    progressTeethEl.style.width = newWidth + "%";

    console.log("cureentWidth: " + newWidth);
}

function progressBarDec() {
    var progressDecEl = document.getElementById("progressDec");
    var currentWidth = parseInt(progressDecEl.style.width);

    var newWidth = currentWidth + 100;

    if(newWidth > 100) {
        newWidth = 100;
    }

    progressDecEl.style.width = newWidth + "%";

    console.log("cureentWidth: " + newWidth);
}

function progressBarMed() {
    var progressMedEl = document.getElementById("progressMed");
    var currentWidth = parseInt(progressMedEl.style.width);

    var newWidth = currentWidth + 100/5;

    if(newWidth > 100) {
        newWidth = 100;
    }

    progressMedEl.style.width = newWidth + "%";

    console.log("cureentWidth: " + newWidth);
}

function saveDecFormVariables() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var age = document.getElementById("age").value;
    var psn = document.getElementById("psn").value;
    var allergies = document.getElementById("allergies").value;
    var prevsick = document.getElementById("prevsick").value;
    /*var birthYear = age[0];
    var birthMonth = age[1];
    var birthDay = age[2];*/

    localStorage.setItem("fname", fname);
    localStorage.setItem("lname", lname);
    localStorage.setItem("age", age);
    localStorage.setItem("psn", psn);
    localStorage.setItem("allergies", allergies);
    localStorage.setItem("prevsick", prevsick);
}

function printDecFormVariables() {
    var fname = localStorage.getItem("fname");
    var lname = localStorage.getItem("lname");
    var age = localStorage.getItem("age");
    var psn = localStorage.getItem("psn");
    var allergies = localStorage.getItem("allergies");
    var prevsick = localStorage.getItem("prevsick");

    console.log("fname: " + fname);

    var fnameEl = document.getElementById("fnameVar");
    fnameEl.innerHTML = fname;
    var lnameEl = document.getElementById("lnameVar");
    lnameEl.innerHTML = lname;
    var ageEl = document.getElementById("ageVar");
    ageEl.innerHTML = age;
    var psnEl = document.getElementById("psnVar");
    psnEl.innerHTML = psn;
    var allergiesEl = document.getElementById("allergiesVar");
    allergiesEl.innerHTML = allergies;
    var prevsickEl = document.getElementById("prevsickVar");
    prevsickEl.innerHTML = prevsick;

}

function countdown(){

    var surgeryYear = localStorage.getItem("surgeryYear");
    var surgeryMonth = localStorage.getItem("surgeryMonth") - 1;
    var surgeryDay = localStorage.getItem("surgeryDay") - 1;
    
    var surgeryDate = new Date(surgeryYear, surgeryMonth, 
                            surgeryDay);
        // Set the date we're counting down to
        var countDownDate = surgeryDate;

        // Update the count down every 1 second
        var x = setInterval(function () {

            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now an the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="gameday"
            document.getElementById("gameDay").innerHTML = days + " days and " + hours + " hours";

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("gameDay").innerHTML = "EXPIRED";
            }
        }, 1000);
}
