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
    var foodMonth = localStorage.getItem("surgeryMonth");
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
}

function calculateShower() {
    console.log("year:" + localStorage.getItem("surgeryYear"));

    var showerYear = localStorage.getItem("surgeryYear");
    var showerMonth = localStorage.getItem("surgeryMonth");
    var showerDay = localStorage.getItem("surgeryDay") - 3

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
}

function calculateDeclaration() {
    console.log("year:" + localStorage.getItem("surgeryYear"));

    var decYear = localStorage.getItem("surgeryYear");
    var decMonth = localStorage.getItem("surgeryMonth");
    var decDay = localStorage.getItem("surgeryDay") - 3
    
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
    var teethMonth = localStorage.getItem("surgeryMonth");
    var teethDay = localStorage.getItem("surgeryDay") - 3
    
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
}
