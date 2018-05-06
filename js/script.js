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

