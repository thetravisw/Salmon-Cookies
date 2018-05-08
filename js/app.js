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
            if (i<7)
            {
            var time = i + 6 + ' am';
            }
            else
            {
                var time = i-6 +' pm';
            }

            //update the storeSalesArray
            storeSalesArray[i] = ["" + time, customers, Math.floor(customers * 630)/100];
           
            //increment total sales
            totalSales = totalSales + storeSalesArray[i][2];

            //Create New Li, assign it data, and append it.
            var list = document.getElementById('firstAndPike');
            var newLi = document.createElement('li');
            list.appendChild(newLi);
            newLi.textContent = storeSalesArray[i][0] + ":  " + storeSalesArray[i][1] + " customers,  $" + Math.floor(storeSalesArray[i][2]) + " in sales";
        }
        
        //Create New Li, assign it total-sales data, and append it.
        var list = document.getElementById('firstAndPike');
        var newLi = document.createElement('li');
        list.appendChild(newLi);
        newLi.textContent = "Total Sales:  $" + Math.floor(totalSales*100)/100;
    }
}

var seaTacData = {
    name: 'Sea Tac',
    minimumHourlyCustomers: 3,
    maximumHourlyCustomers: 24,
    averageCustomerSales: 1.2,
    renderSales: function () 
    {
        for (var i = 0; i < 15; i++) 
        {   //generate number of customers
            var customers = Math.floor(Math.random() * (42) + 23);
            //what time is it?
            if (i<7)
            {
            var time = i + 6 + ' am';
            }
            else
            {
                var time = i-6 +' pm';
            }

            //update the storeSalesArray
            storeSalesArray[i] = ["" + time, customers, Math.floor(customers * 630)/100];
           
            //increment total sales
            totalSales = totalSales + storeSalesArray[i][2];

            //Create New Li, assign it data, and append it.
            var list = document.getElementById('seaTac');
            var newLi = document.createElement('li');
            list.appendChild(newLi);
            newLi.textContent = storeSalesArray[i][0] + ":  " + storeSalesArray[i][1] + " customers,  $" + storeSalesArray[i][2] + " in sales";
        }
        
        //Create New Li for total sales, assign it total-sales data, and append it.
        var list = document.getElementById('seaTac');
        var newLi = document.createElement('li');
        list.appendChild(newLi);
        newLi.textContent = "Total Sales:  $" + Math.floor(totalSales*100)/100;
    }
}

var seattleCenterData = {
    name: 'Seattle Center',
    minimumHourlyCustomers: 11,
    maximumHourlyCustomers: 38,
    averageCustomerSales: 3.7,
    renderSales: function () 
    {
        for (var i = 0; i < 15; i++) 
        {   //generate number of customers
            var customers = Math.floor(Math.random() * (42) + 23);
            //what time is it?
            if (i<7)
            {
            var time = i + 6 + ' am';
            }
            else
            {
                var time = i-6 +' pm';
            }

            //update the storeSalesArray
            storeSalesArray[i] = ["" + time, customers, Math.floor(customers * 630)/100];
           
            //increment total sales
            totalSales = totalSales + storeSalesArray[i][2];

            //Create New Li, assign it data, and append it.
            var list = document.getElementById('seattleCenter');
            var newLi = document.createElement('li');
            list.appendChild(newLi);
            newLi.textContent = storeSalesArray[i][0] + ":  " + storeSalesArray[i][1] + " customers,  $" + storeSalesArray[i][2] + " in sales";
        }
        
        //Create New Li for total sales, assign it total-sales data, and append it.
        var list = document.getElementById('seattleCenter');
        var newLi = document.createElement('li');
        list.appendChild(newLi);
        newLi.textContent = "Total Sales:  $" + Math.floor(totalSales*100)/100;
    }
}

var capHillData = {
    name: 'Cap Hill',
    minimumHourlyCustomers: 20,
    maximumHourlyCustomers: 38,
    averageCustomerSales: 2.3,
    renderSales: function () 
    {
        for (var i = 0; i < 15; i++) 
        {   //generate number of customers
            var customers = Math.floor(Math.random() * (42) + 23);
            //what time is it?
            if (i<7)
            {
            var time = i + 6 + ' am';
            }
            else
            {
                var time = i-6 +' pm';
            }

            //update the storeSalesArray
            storeSalesArray[i] = ["" + time, customers, Math.floor(customers * 630)/100];
           
            //increment total sales
            totalSales = totalSales + storeSalesArray[i][2];


            //Create New Li, assign it data, and append it.
            var list = document.getElementById('capHil');
            var newLi = document.createElement('li');
            list.appendChild(newLi);
            newLi.textContent = storeSalesArray[i][0] + ":  " + storeSalesArray[i][1] + " customers,  $" + storeSalesArray[i][2] + " in sales";
        }
        
        //Create New Li, assign it total-sales data, and append it.
        var list = document.getElementById('capHil');
        var newLi = document.createElement('li');
        list.appendChild(newLi);
        newLi.textContent = "Total Sales:  $" + Math.floor(totalSales*100)/100;
    }
}

var alkiData = {
    name: 'Alki',
    minimumHourlyCustomers: 2,
    maximumHourlyCustomers: 16,
    averageCustomerSales: 4.6,
    renderSales: function () 
    {
        for (var i = 0; i < 15; i++) 
        {   //generate number of customers
            var customers = Math.floor(Math.random() * (42) + 23);
            //what time is it?
            if (i<7)
            {
            var time = i + 6 + ' am';
            }
            else
            {
                var time = i-6 +' pm';
            }

            //update the storeSalesArray
            storeSalesArray[i] = ["" + time, customers, Math.floor(customers * 630)/100];

            //increment total sales
            totalSales = totalSales + storeSalesArray[i][2];

            //Create New Li, assign it data, and append it.
            var list = document.getElementById('alki');
            var newLi = document.createElement('li');
            list.appendChild(newLi);
            newLi.textContent = storeSalesArray[i][0] + ":  " + storeSalesArray[i][1] + " customers,  $" + storeSalesArray[i][2] + " in sales";
        }
        
        //Create New Li, assign it total-sales data, and append it.
        var list = document.getElementById('alki');
        var newLi = document.createElement('li');
        list.appendChild(newLi);
        newLi.textContent = "Total Sales:  $" + Math.floor(totalSales*100)/100;
    }
}

firstAndPikeData.renderSales.call();
seaTacData.renderSales.call();
seattleCenterData.renderSales.call();
capHillData.renderSales.call();
alkiData.renderSales.call();