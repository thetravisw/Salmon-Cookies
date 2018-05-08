'use strict';

var totalSales = 0, storeSalesArray = [[0, 0, 0]];
// key to SSA:   [hour, total customers this hour, sales this hour.]

var firstAndPikeData = {
    name: 'firstAndPikeLocation',
    minimumHourlyCustomers: 23,
    maximumHourlyCustomers: 65,
    averageCustomerSales: 6.3,
    renderSales: function () 
    {
        for (var i = 0; i < 15; i++) 
        {   //generate number of customers
            var customers = Math.floor(Math.random() * (42) + 23);
            //what time is it?
            var time = i + 6;

            //update the storeSalesArray
            storeSalesArray[i] = ["" + time + ":00", customers, Math.floor(customers * 6.3)];

            //increment total sales
            totalSales = totalSales + storeSalesArray[i][2];
            console.log(i + " Total Sales:  " + totalSales)

            //Create New Li, assign it data, and append it.
            var list = document.getElementById('firstAndPike');
            var newLi = document.createElement('li');
            list.appendChild(newLi);
            newLi.textContent = storeSalesArray[i];
        }
        
        //Create New Li, assign it total-sales data, and append it.
        var list = document.getElementById('firstAndPike');
        var newLi = document.createElement('li');
        list.appendChild(newLi);
        newLi.textContent = "Total Sales: " + totalSales;
    }
}

firstAndPikeData.renderSales.call();
