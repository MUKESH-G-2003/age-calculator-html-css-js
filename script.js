
function getMonth() {
    const month = document.getElementById("month");
    const date = document.getElementById("date");
    const year = document.getElementById("year").value;

    if (year.length < 4) {
        alert('year should be 4-digits "XXXX"');
        return;
    }
    let selected_Month = parseInt(month.value);
    const day = new Date(year, selected_Month+1 , 0);
    let total_days = day.getDate();
    let i = 0;

    for (i = 0; i < date.options.length; i++){
        if (i < total_days) {
            date.options[i].style = "display: block";
        }
        else {
            date.options[i].style = "display: none";
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    
    const currentMonth = document.getElementById("currentmonth");
    const currentDate = document.getElementById("currentdate");
    const currentYear = document.getElementById("currentyear");

    currentMonth.selectedIndex = new Date().getMonth();
    currentDate.selectedIndex = new Date().getDate() - 1;
    currentYear.value = new Date().getFullYear();
});

function CalculateAge() {
    const bmonth = document.getElementById("month").value;
    const bdate = document.getElementById("date").value;
    const byear = document.getElementById("year").value;

    const cmonth = document.getElementById("currentmonth").value;
    const cdate = document.getElementById("currentdate").value;
    const cyear = document.getElementById("currentyear").value;

    const output = document.getElementById("output");

    if (byear == "") {
        alert("fill year field");
    }
    if (byear > cyear || (byear == cyear && bmonth > cmonth) || (byear == cyear && bmonth == cmonth && bdate>cdate)) {
        alert("DOB should be less than current Year");
        return;
    }

    let yage = cyear - byear;
    let mage = cmonth - bmonth;
    if (mage < 0) {
        yage--;
    }
    else if (mage == 0) {
        if (bdate > cdate) {
            yage--;
        }
    }
    
    output.innerText = "Age in year "+yage;
}