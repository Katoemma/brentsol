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

    //system performance the performance
    let OverallEfficiency = document.getElementById("overAllEfficiency").value;
    let DOA = document.getElementById("DOA").value;
    let DOD = document.getElementById("DOD").value;
    let PSH = document.getElementById("PSH").value;
    let systemVoltage = document.getElementById("systemVoltage").value;

    //solar and battery specifications
    let batteryCapacity = document.getElementById("batteryCapacity").value;
    let batteryVoltage = document.getElementById("batteryVoltage").value;

    let ISC = document.getElementById("ISC").value;
    let VOC = document.getElementById("VOC").value;
    let Imax = document.getElementById("Imax").value;
    let Vmax = document.getElementById("Vmax").value;
    let Pmax = document.getElementById("Pmax").value;

    //sizing output
    var BBParallel =document.getElementById("BBParallel");
    var BBSeries =document.getElementById("BBSeries");
    var TotalBB =document.getElementById("TotalBB");

    var SPParallel =document.getElementById("SPParallel");
    var SPSeries =document.getElementById("SPSeries");
    var TotalSP =document.getElementById("TotalSP");

    var CCrating =document.getElementById("CCrating");

    // calculations
    let dailyEnergyRequired = totalEnergy / (OverallEfficiency / 100); 
    let peakPower = dailyEnergyRequired / PSH;
    let totalCurrent = peakPower / systemVoltage;
    
    SPParallel.innerHTML = totalCurrent / Imax; //pv modules in parallel
    SPSeries.innerhtml = systemVoltage / Vmax; //pv modules in series
    TotalSP.innerHTML = Math.floor((totalCurrent / Imax) * (systemVoltage / Vmax)); //total modules required;

    let BBcapacity = (dailyEnergyRequired * DOA) / (systemVoltage * (DOD / 100)); //battery bank capacity

    BBParallel.innerHTML = BBcapacity / batteryCapacity; //batteries in parallel connection
    BBSeries.innerHTML = systemVoltage / batteryVoltage; //batteries in series
    TotalBB.innerHTML = Math.floor((BBcapacity / batteryCapacity) * (systemVoltage / batteryVoltage)); //total batteries required

    let efficiencyFactor = 1 / (OverallEfficiency / 100);
    CCrating.innerHTML = (totalCurrent / Imax) * efficiencyFactor * ISC;
}