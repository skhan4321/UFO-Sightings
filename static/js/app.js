// from data.js
const tableData = data;

// YOUR CODE HERE!
tbody = d3.select("tbody")


function displayData(data){ 
    tbody.text("")
    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData)


var dateInputText = d3.select("#datetime")
var button = d3.select("filter-btn")


function clickSelect(){
    d3.event.preventDefault();
    console.log(dateInputText.property("value"));
    var new_table = tableData.filter(sighting => sighting.datetime===dateInputText.property("value"))
    displayData(new_table);
}

dateInputText.on("keyup", clickSelect)


// Execute a function when the user releases a key on the keyboard
// input.addEventListener("keyup", function(event) {
//     // Number 13 is the "Enter" key on the keyboard
//     if (event.keyCode === 13) {
//       // Cancel the default action, if needed
//       event.preventDefault();
//       // Trigger the button element with a click
//       document.getElementById("filter-btn").click();
//     }
//   });