let movieData = {
    "The Darjeeling Limited": {
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      year: 2007,
    },
    "The Royal Tenenbaums": {
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      rating: 7.6,
      year: 2001,
      cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
      runtime: 170,
    },
    "Fantastic Mr. Fox": {
      year: 2009,
      plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      cast: [
        "George Clooney",
        "Meryl Streep",
        "Bill Murray",
        "Jason Schwartzman",
      ],
      runtime: 147,
      rating: 7.9,
    },
    "The Grand Budapest Hotel": {
      rating: 8.1,
      runtime: 159,
      year: 2014,
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    },
};

// let movieNameList = document.getElementById("myMovieNameList")
// movieData.forEach((item)=>{
//   let li = document.createElement("li");
//   li.innerText = item;
//   movieNameList.appendChild(li);
// })

createTableMain()

function createTableMain() {

  var headers = ["Movie Name", "Rating", "Runtime", "Year"];
  var myTable = document.createElement("TABLEMAIN");  //makes a table element for the page
  
  var header = myTable.createTHead();
  var headerRow = header.insertRow(0);
  for(var i = 0; i < headers.length; i++) {
      headerRow.insertCell(i).innerHTML = headers[i];
  }
  
  for(var i = 0; i < movieData.length; i++) {
      var row = myTable.insertRow(i);
      row.insertCell(0).innerHTML = movieData[i]; // was books[i].title but our list nested so will be dif
      // for(var j = 0; j = 5; j++) { // do we need a nested loop here? 
      row.insertCell(1).innerHTML = movieData[i].rating;
      row.insertCell(2).innerHTML = movieData[i].runtime;
      row.insertCell(3).innerHTML = movieData[i].year;
  }


  console.log(myTable)
  document.body.append(myTable); //or appendchild?
}



// function createTablePlot() {

//   var headers = ["Movie Name", "Plot"];
//   var table = document.createElement("TABLEPLOT");  //makes a table element for the page
      
//   for(var i = 0; i < movieData.length; i++) {
//       var row = table.insertRow(i);
//       row.insertCell(0).innerHTML = movieData[i]; // was books[i].title but our list nested so will be dif
//       // for(var j = 0; j = 5; j++) { // do we need a nested loop here? 
//       row.insertCell(1).innerHTML = movieData[i].plot;
//   }

//   var header = table.createTHead();
//   var headerRow = header.insertRow(0);
//   for(var i = 0; i < headers.length; i++) {
//       headerRow.insertCell(i).innerHTML = headers[i];
//   }

//   document.body.append(table);
// }

// function sortTableStr(n, tablename) { 
//   var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
//   table = document.getElementById(tablename);
//   switching = true;
//   // Set the sorting direction to ascending:
//   dir = "asc";
//   /* Make a loop that will continue until
//   no switching has been done: */
//   while(switching){
//     // Start by saying: no switching is done:
//     switching = false;
//     rows = table.rows;
//     /* Loop through all table rows (except the
//     first, which contains table headers): */
//     for (i = 1; i < (rows.length - 1); i++) {
//       // Start by saying there should be no switching:
//       shouldSwitch = false;
//       /* Get the two elements you want to compare,
//       one from current row and one from the next: */
//       x = rows[i].getElementsByTagName("TD")[n];
//       y = rows[i + 1].getElementsByTagName("TD")[n];
//       /* Check if the two rows should switch place,
//       based on the direction, asc or desc: */
//       if (dir == "asc") {
//         if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
//           // If so, mark as a switch and break the loop:
//           shouldSwitch = true;
//           break;
//         }
//       } else if (dir == "desc") {
//         if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
//           // If so, mark as a switch and break the loop:
//           shouldSwitch = true;
//           break;
//         }
//       }
//     }
//     if (shouldSwitch) {
//       /* If a switch has been marked, make the switch
//       and mark that a switch has been done: */
//       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//       switching = true;
//       // Each time a switch is done, increase this count by 1:
//       switchcount ++;
//     } else {
//       /* If no switching has been done AND the direction is "asc",
//       set the direction to "desc" and run the while loop again. */
//       if (switchcount == 0 && dir == "asc") {
//         dir = "desc";
//         switching = true;
//       }
//     }
//   }
// }

// function sortTableNum(n, tablename) {
//   var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
//   table = document.getElementById(tablename);
//   switching = true;
//   // Set the sorting direction to ascending:
//   dir = "asc";
//   /*Make a loop that will continue until
//   no switching has been done:*/
//   while (switching) {
//     //start by saying: no switching is done:
//     switching = false;
//     rows = table.rows;
//     /*Loop through all table rows (except the
//     first, which contains table headers):*/
//     for (i = 1; i < (rows.length - 1); i++) {
//       //start by saying there should be no switching:
//       shouldSwitch = false;
//       /*Get the two elements you want to compare,
//       one from current row and one from the next:*/
//       x = rows[i].getElementsByTagName("TD")[n];
//       y = rows[i + 1].getElementsByTagName("TD")[n];
//       //check if the two rows should switch place based on the direction, asc or desc: */
//       if (dir == "asc") {
//         if (Number(x.innerHTML) > Number(y.innerHTML)) {
//           //if so, mark as a switch and break the loop:
//           shouldSwitch = true;
//           break;
//         }
//       } else if (dir == "desc") {
//         if (Number(x.innerHTML) < Number(y.innerHTML)) {
//           //if so, mark as a switch and break the loop:
//           shouldSwitch = true;
//           break;
//     }
//     if (shouldSwitch) {
//       /*If a switch has been marked, make the switch
//       and mark that a switch has been done:*/
//       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//       switching = true;
//       // Each time a switch is done, increase this count by 1:
//       switchcount ++;
//     } else {
//       /* If no switching has been done AND the direction is "asc",
//       set the direction to "desc" and run the while loop again. */
//       if (switchcount == 0 && dir == "asc") {
//         dir = "desc";
//         switching = true;
//       }
//     }
//   }
// }
// let tests = "one";
// document.getElementById("test").innerHTML = tests;