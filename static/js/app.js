//Set tableData as data.js
var tableData = data;

//Set tbody as vairable for <tbody></tbody> section in HTML
var tbody = d3.select("tbody");

//FUNCTION TO CREATE INITAL TABLE
function createTable(data) {
    // Use d3 to update each cell's text with data
    data.forEach(function(ufoReport) {
        //Append row for each entry in ufoReport
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(function([key, value]) {

        //Append a cell to the row for each value in the data
        var cell = tbody.append("td");

        //Insert data into a table
        cell.text(value);
        });
    });
}

//Selects the submit button id by selecting id="filter-btn" from the HTML
var submit = d3.select("#filter-btn");

//FUNCTION TO FILTER DATA
submit.on("click", function() {
        var row = d3.select("tbody").selectAll("td");
        row.remove();

        //Prevent the HTML page from refreshing
        d3.event.preventDefault();

        //Select the input element via id="datetime" from the HTML
        var inputElement = d3.select("#datetime");
        console.log(inputElement);

        //Get the value property of the input element
        var inputValue = inputElement.property("value");
        console.log(inputValue);

        let filteredData = tableData;

        //Filter the tbody for input value and console.log the filtered data
        var filtered = filteredData.filter(tbody => tbody.datetime === inputValue);
        console.log(filtered);

        //Creates filtered table 
        createTable(filtered);
});

//Creates initial table 
createTable(tableData);


