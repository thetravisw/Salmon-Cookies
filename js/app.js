'use strict';


//   Declare Global Variables =======================================
var timeArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'], visitors = [], purchases = [];
var salesTable = document.getElementById('salesTable');

//   Build the Constructor Function  ===============================
function Store(location, minimumHourlyCustomers, maximumHourlyCustomers, averageCustomerSales) {
    this.location = location;
    this.minimumHourlyCustomers = minimumHourlyCustomers;
    this.maximumHourlyCustomers = maximumHourlyCustomers;
    this.averageCustomerSales = averageCustomerSales;
}

//  Build the Method for the constructor function =================

Store.prototype.populateSalesAndRender = function () {
    var totalSales = 0

    //seed the table
    var newTr = document.createElement('tr');
    var newTd = document.createElement('td');
    newTd.textContent = '' + this.location;
    newTr.appendChild(newTd);

    for (var i in timeArray) {
        //  Calculate Visitors and Sales, and Populate Arrays
        visitors[i] = Math.floor(Math.random() * (this.maximumHourlyCustomers - this.minimumHourlyCustomers) + 1 + this.minimumHourlyCustomers);

        purchases[i] = Math.floor(100 * visitors[i] * this.averageCustomerSales) / 100;

        totalSales = purchases[i] + totalSales;

        //  Render in the Table

        newTd = document.createElement('td');
        newTd.textContent = '$' + purchases[i];
        newTr.appendChild(newTd);  
    }
    salesTable.appendChild(newTr)
}

//  Build Table header  ================================================

var newTr = document.createElement('tr');
var newTh = document.createElement('th');
newTh.textContent = '';
newTr.appendChild(newTh);

for (var i in timeArray) {
    newTh = document.createElement('th');
    newTh.textContent = '' + timeArray[i];
    newTr.appendChild(newTh);
}

// append the tr to the table
salesTable.appendChild(newTr);

//  Call the constructor function   ===============================
var firstAndPike = new Store('First And Pike', 23, 65, 6.3);
var seaTac = new Store('Sea Tac', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capHill = new Store('Cap Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);


//   Party cause it's done... or Cry in beer cause it's Broken  ====

firstAndPike.populateSalesAndRender();
seaTac.populateSalesAndRender();
seattleCenter.populateSalesAndRender();
capHill.populateSalesAndRender();
alki.populateSalesAndRender();