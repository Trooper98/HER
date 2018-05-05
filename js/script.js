        var monthtext = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        var dayField;
        var monthField;
        var yearField;
        var surgeryDate;

        function getDateSurgery() {
            dayField = document.getElementById("day").value;
            monthField = document.getElementById("month").value;
            yearField = document.getElementById("year").value;

            console.log(dayField);
            console.log(monthField);
            console.log(yearField);

            surgeryDate = new Date(yearField, monthField, dayField);
        }

        function calculateFood(){
            var foodDate = surgeryDate.getDate();
            
            foodDate.setDate(surgeryDate - 1);
            // fetches paragraph element for foodDate
            var foodDateEl = document.getElementById(row3).firstChild();
            foodDateEl.innerHTML = foodDate.toString();
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
