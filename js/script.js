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
    /*var foodDate = new Date(localStorage.getItem("surgeryYear"), 
        localStorage.getItem("surgeryMonth"), 
        localStorage.getItem("surgeryDay")); */
    var foodDate = new Date(foodYear, foodMonth, foodDay);
    
    console.log("foodDate day: " + foodDate.getDate());
    // fetches paragraph element for foodDate
    var foodDateEl = document.getElementById("foodDate");
    foodDateEl.innerHTML = foodDate.getDate() + "-"
                            + monthtext[foodDate.getMonth()]
                            + "-" + foodDate.getUTCFullYear();
}

function calculateShower() {
    var showerDate = surgeryDate.getDate();

    showerDate.setDate(surgeryDate - 3);
    var showerDateEl = document.getElementById(row1);
    showerDateEl.innerHTML = showerDate.toString();
}

function calculateDeclaration() {
    var declarationDate = surgeryDate.getDate();
    
    foodDate.setDate(surgeryDate - 1);
    // fetches paragraph element for foodDate
    var foodDateEl = document.getElementById(row3).firstChild();
    foodDateEl.innerHTML = foodDate.toString();
}
