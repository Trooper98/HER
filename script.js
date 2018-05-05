//this function will find today's date
function calendar(){
    var day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var date = new Date();
    setText('day', day[date.getDay()]);
    setText('date', date.getDate());
    setText('month-year', month[date.getMonth()]+' '+(1900 + date.getYear()));
};

//this function will set the text value of
 tags
function setText(id, val){
    if(val < 10){
        val = '0' + val;    //add leading 0 if val < 10
    }
    document.getElementById(id).innerHTML = val;
};

//call calendar() when page load
window.onload = calendar;
