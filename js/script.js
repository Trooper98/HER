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
    var decDateEl = document.getElementById("decDate");
    decDateEl.innerHTML = "<b>" + decDate.getDate() + "-"
                            + monthtext[decDate.getMonth()]
                            + "-" + 
                            decDate.getUTCFullYear()
                            + "</b>";
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