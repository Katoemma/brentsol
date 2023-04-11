var totalEnergy = 0;

function addList(){
    var appliance = document.getElementById("appliance").value;
    var quantity = document.getElementById("quantity").value;
    var rating = document.getElementById("rating").value;
    var hours = document.getElementById("hours").value;


    let table = document.getElementById("table");
    let newRow = table.insertRow();

    let applianceCell = newRow.insertCell(0);
    applianceCell.innerHTML = appliance;

    let quantityCell = newRow.insertCell(1);
    quantityCell.innerHTML = quantity;

    let ratingCell = newRow.insertCell(2);
    ratingCell.innerHTML = rating;

    let hoursCell = newRow.insertCell(3);
    hoursCell.innerHTML = hours;

    let totalPower = rating * quantity;

    let energy = totalPower * hours;

    totalEnergy += energy;
    //including the performance
}