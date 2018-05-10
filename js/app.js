'use strict';


//   Declare Global Variables =======================================
var timeArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var salesTable = document.getElementById('salesTable');
var yogaTable = document.getElementById('EmployeesNeeded');
//   Build the Constructor Function  ===============================
function Store(location, minimumHourlyCustomers, maximumHourlyCustomers, averageCustomerSales) {
    this.location = location;
    this.minimumHourlyCustomers = minimumHourlyCustomers;
    this.maximumHourlyCustomers = maximumHourlyCustomers;
    this.averageCustomerSales = averageCustomerSales;
    this.visitors = [];
    this.purchases = [];
    this.employeesNeeded = [];
}

//  Build the Method for the constructor function =================

Store.prototype.populateSalesAndRender = function () {
    var totalSales = 0

    //seed the table
    var newTr = document.createElement('tr');
    var newTd = document.createElement('td');
    newTd.textContent = '' + this.location;
    newTr.appendChild(newTd);

    //Yoga Pants Seeding  ===  'Cause they so Streeeetchy
    //Also, I'm hencefort using Yoga to indicate strecth goal work
    //for this project.

    var trYoga = document.createElement('tr');
    var tdYoga = document.createElement('td');
    tdYoga.textContent = '' + this.location;
    trYoga.appendChild(tdYoga);

    //build Table Row in for loop (mostly)
    for (var i in timeArray) {
        //  Calculate visitors and Sales, and Populate Arrays
        this.visitors[i] = Math.floor(Math.random() * (this.maximumHourlyCustomers - this.minimumHourlyCustomers) + 1 + this.minimumHourlyCustomers);

        this.purchases[i] = Math.floor(100 * this.visitors[i] * this.averageCustomerSales) / 100;

        totalSales = this.purchases[i] + totalSales;

        //  Yoga:  Calculate Employees needed  [this.visitors/20, minimum 2]
        this.employeesNeeded[i] = Math.ceil(this.visitors[i] / 20);
        if (this.employeesNeeded[i] < 2) { this.employeesNeeded[i] = 2; }

        //  Render in the Table

        newTd = document.createElement('td');
        newTd.textContent = '$' + this.purchases[i];
        newTr.appendChild(newTd);

        //Yoga:  Render into employees needed table

        tdYoga = document.createElement('td');
        tdYoga.textContent = '' + this.employeesNeeded[i];
        trYoga.appendChild(tdYoga);
    }

    // total sales
    newTd = document.createElement('td');
    newTd.textContent = '$' + Math.floor(totalSales * 100) / 100;
    newTr.appendChild(newTd);

    //append completed Tr to table
    salesTable.appendChild(newTr);
    yogaTable.appendChild(trYoga);
}

//  Build Table header  ================================================

var newTr = document.createElement('tr');
var newTh = document.createElement('th');
newTh.textContent = 'Location';
newTr.appendChild(newTh);

//  Yoga Pants Header
var trYoga = document.createElement('tr');
var thYoga = document.createElement('th');
thYoga.textContent = 'Location';
trYoga.appendChild(thYoga);


for (var i in timeArray) {
    //create Header elements
    newTh = document.createElement('th');
    newTh.textContent = '' + timeArray[i];
    newTr.appendChild(newTh);

    //  Headers for Yoga Pants
    thYoga = document.createElement('th');
    thYoga.textContent = '' + timeArray[i];
    trYoga.appendChild(thYoga);
}

//Daily Sales Header
newTh = document.createElement('th');
newTh.textContent = 'Daily Sales';
newTr.appendChild(newTh);

// append the tr to the table
salesTable.appendChild(newTr);
yogaTable.appendChild(trYoga);


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

///  Wednesday's Code  =============================================

//  Event Listener on #NewStoreForm
var NewStoreForm = document.getElementById('NewStoreForm');

NewStoreForm.addEventListener('submit', NewStoreSubmitted);

//  New Store Submitted Function  =================================

function NewStoreSubmitted(event) {
    event.preventDefault();
    var newStoreName = event.target.newStoreLocation.value;
    var maxCustomers = event.target.maxCustomers.value;
    var minCustomers = event.target.minCustomers.value;
    var avgSales = event.target.customerSales.value;

    var newStore = new Store(newStoreName, minCustomers, maxCustomers, avgSales);

    newStore.populateSalesAndRender();

}