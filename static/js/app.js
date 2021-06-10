// from data.js

const tableData = data;
// get table references where table will be inserted
var tbody = d3.select("tbody");

//set variables
var button = d3.select("#filter-btn");
var form = d3.select("#filters");


// creating a function to build a table with the objects from the array data.js
function buildTable(tableData){
    // When the page loads, it needs to display the table
    tbody.html("");
    tableData.forEach((ufo) => {
      var row = tbody.append("tr");
      Object.entries(ufo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  };
 
 
// Build the table when the page loads
buildTable(tableData);

// Create event handlers 
button.on("click", handleClick);
form.on("change",handleClick);



function handleClick() {


  // Grab the datetime value from the filter
  var inputElement = d3.select("#datetime");

  var inputValue = inputElement.property("value");


// grab all the table data and set to filteredData
  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);


  // take your filtered data and put it into the buildTable to rebuild the table with the filtered data
  buildTable(filteredData);
}
