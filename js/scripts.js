function giveAkanName(){
    var year = parseInt(document.getElementById("year").value);
    var month =parseInt(document.getElementById("month").value);
    var day = parseInt(document.getElementById("Day").value);
    var today = new Date(year, month, day);
    var dayBorn = today.getDay();
    var male = document.getElementByName("male");
    var female = document.getElementByName("female");

    var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femalename = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    if(male.checked != x++ || female.checked != x++){
        alert("Choose gender");
    }
    else if(year.length <4 || year.length >4){
        alert("Oops I have never seen a year like that");
    }
    else if(month <= 0 && month >12 || month == 2 && month > 29) {
        alert("No kind of month,kindly enter valid value");
    }
    else if(day <= 0 && day >31) {
        alert("Enter valid email");
    }
    else if("male.checked === x++") {
        alert("You were born on " + day[dayBorn] + " and your Akan name is" + male[dayBorn]);
    }
    else {
        alert("You were born on " + day[dayBorn] + " and your Akan name is" + female[dayBorn]);
    }
}