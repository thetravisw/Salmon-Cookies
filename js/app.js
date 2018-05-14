'use strict';

//   ====================         Declare Global Variables     ===============================
var timeArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var storeSalesTable = document.getElementById('salesTable');
var employeesNeededTable = document.getElementById('EmployeesNeeded');
var arrayOfStores = [];

//   ====================      Store Constructor Function       ==============================
function Store(location, minimumHourlyCustomers, maximumHourlyCustomers, averageCustomerSales) {
    this.location = location;
    this.minimumHourlyCustomers = minimumHourlyCustomers;
    this.maximumHourlyCustomers = maximumHourlyCustomers;
    this.averageCustomerSales = averageCustomerSales;
    this.visitors = [];
    this.purchases = [];
    this.employeesNeeded = [];
    this.totalStoreSales = 0;
}

//   ===============       Method for calculating total store visitors.        ================
Store.prototype.calculatevisitors = function () {
    for (var i in timeArray) {
        this.visitors[i] = Math.floor(Math.random() * (this.maximumHourlyCustomers - this.minimumHourlyCustomers) + 1 + this.minimumHourlyCustomers);
    }
}

//   ==============         Method for calculating store sales.         ======================
Store.prototype.calculatesales = function () {
    this.calculatevisitors();
    for (var i in timeArray) {
        this.purchases[i] = Math.floor(this.visitors[i] * this.averageCustomerSales);
    }
}

//   =================      Method for calculating employees needed.        ======================
//  Can only be run after this.calculate visitors (or this.calculatesales -- which runs cal visitors)

Store.prototype.calculateemployees = function () {
    var empNeeded = 0;
    for (var i in timeArray) {
        empNeeded = Math.ceil(this.visitors[i] / 20)
        if (empNeeded < 2) {
            empNeeded = 2;
        }
        this.employeesNeeded[i] = empNeeded;
    }
}

//   ===============        Render this.purchases into salesTable        ====================
Store.prototype.renderPurchases = function () {
    this.calculatesales();
    this.calculateemployees();

    //Do the header
    var newTr = document.createElement('tr');
    var newTd = document.createElement('th');
    newTd.textContent = '' + this.location;
    newTr.appendChild(newTd);

    var totalStoreSales = 0;

    //Do the Data  (Calc Total Store Sales as you go)
    for (var i in timeArray) {
        newTd = document.createElement('td');
        newTd.textContent = this.purchases[i];
        this.totalStoreSales += this.purchases[i];
        newTr.appendChild(newTd);
    }


    newTd = document.createElement('td');
    newTd.textContent = '' + this.totalStoreSales;
    newTr.appendChild(newTd);
    storeSalesTable.appendChild(newTr);
}


//   ===============  Render this.employeesNeeded into salesTable     ====================

Store.prototype.renderEmployees = function () {

    this.calculateemployees()
    //Do the header
    var newTr = document.createElement('tr');
    var newTd = document.createElement('th');
    newTd.textContent = '' + this.location;
    newTr.appendChild(newTd);

    //Do the Data
    for (var i in timeArray) {
        newTd = document.createElement('td');
        newTd.textContent = this.employeesNeeded[i];
        newTr.appendChild(newTd);
    }
    employeesNeededTable.appendChild(newTr);
}

//=======  Creates Table Headers and Renders all Stores   =======================
function renderAll() {
    //  Clear Previous Table
    storeSalesTable.innerHTML = '';
    employeesNeededTable.innerHTML = '';

    //  Render All Stores
    for (var j in arrayOfStores) {
        arrayOfStores[j].renderPurchases();
        arrayOfStores[j].renderEmployees();

    }

    //   =====   Hourly Sales  ======
    //   Left Header
    var newTd = document.createElement('th');
    var newTr = document.createElement('tr');
    newTd.textContent = 'Total';
    newTr.appendChild(newTd);


    //  Nested for loops, to compute hourly sales and append them to a new row.

    for (var i in timeArray) {
        var hourlySales = 0;
        newTd = document.createElement('td');
        for (var j in arrayOfStores) {
            hourlySales = hourlySales + arrayOfStores[j].purchases[i];
        }
        newTd.textContent = '' + hourlySales;
        newTr.appendChild(newTd);
    }
    //Total Sales
    var totalStoreSales = 0
    newTd = document.createElement('td');
    for (var i in arrayOfStores) {
        totalStoreSales += arrayOfStores[i].totalStoreSales
    }
    var newTd = document.createElement('td');
    newTd.textContent = '' + totalStoreSales;
    newTr.appendChild(newTd);

    storeSalesTable.appendChild(newTr);
}

//   ==================   Build out the Header row of Tables   ===================================
//Sales Information
var newTh = document.createElement('th');
var newTr = document.createElement('tr');
newTh.textContent = 'Store Name';
newTr.appendChild(newTh);

for (var i in timeArray) {
    newTh = document.createElement('th');
    newTh.textContent = timeArray[i];
    newTr.appendChild(newTh);
}

newTh = document.createElement('th');
newTh.textContent = 'Total Sales';
newTr.appendChild(newTh);

storeSalesTable.appendChild(newTr);

//Employees Needed
var newTh = document.createElement('th');
var newTr = document.createElement('tr');
newTh.textContent = 'Store Name';
newTr.appendChild(newTh);

for (var i in timeArray) {
    newTh = document.createElement('th');
    newTh.textContent = timeArray[i];
    newTr.appendChild(newTh);
}

employeesNeededTable.appendChild(newTr)

//   ========================    Construct and Render   ===============================
arrayOfStores.push(new Store('First And Pike', 23, 65, 6.3));
arrayOfStores.push(new Store('Sea Tac', 3, 24, 1.2));
arrayOfStores.push(new Store('Seattle Center', 11, 38, 3.7));
arrayOfStores.push(new Store('Capitol Hill', 20, 38, 2.3));
arrayOfStores.push(new Store('Alki', 2, 16, 4.6));

renderAll();

//  ==============    Event Listener on #NewStoreForm   ================
var NewStoreForm = document.getElementById('NewStoreForm');
NewStoreForm.addEventListener('submit', NewStoreSubmitted);

//  New Store Submitted Function  =================================

function NewStoreSubmitted(event) {
    event.preventDefault();
    var newStoreName = event.target.newStoreLocation.value;
    var maxCustomers = 1 * event.target.maxCustomers.value;
    var minCustomers = 1 * event.target.minCustomers.value;
    var avgSales = 1 * event.target.customerSales.value;
    arrayOfStores.push(new Store(newStoreName, minCustomers, maxCustomers, avgSales));

    renderAll();

    //Reset the New Store Form
    document.getElementById("NewStoreForm").reset();
}

//  ===========================================================================