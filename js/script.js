        var monthtext = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        var dayField;
        var monthField;
        var yearField;
        var surgeryDate;

        function getDateSurgery() {
            // Array of inputted string split
            var dayField = document.getElementById(day);
            var monthField = document.getElementById(month);
            var yearField = document.getElementById(year);

            surgeryDate = new Date(yearfield, monthfield, dayfield);
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
