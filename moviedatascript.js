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

createTableStats()
createTablePlot()

function sortTableStr(n, tablename) { 
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById(tablename);
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  /* Make a loop that will continue until
  no switching has been done: */
  while(switching){
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function sortTableNum(n, tablename) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById(tablename);
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      //check if the two rows should switch place based on the direction, asc or desc: */
      if (dir == "asc") {
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (Number(x.innerHTML) < Number(y.innerHTML)) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function createTableStats() {
    // Define the table headers
    var headers = ["name", "runtime", "rating", "year"];

    // headers["name"].addEventListener("click",sortTableStr(0,"tableStats"));
    // headers["runtime"].addEventListener("click",sortTableNum(1,"tableStats"));
    // headers["rating"].addEventListener("click",sortTableNum(2,"tableStats"));
    // headers["year"].addEventListener("click",sortTableNum(3,"tableStats"));
    // <th onclick="sortTableStr(0,`tableStats`)">Movie Name</th>
    // <th onclick="sortTableNum(1,`tableStats`)">Rating</th>
    // <th onclick="sortTableNum(2,`tableStats`)">Runtime</th>
    // <th onclick="sortTableNum(3,`tableStats`)">Year</th>
    
    // Create the table element
    var table1 = document.createElement("table");
  
    // Create the table header row
    var headerRow = table1.insertRow();
    // var x=0;
    headers.forEach(headerText => {
        var header = document.createElement("th");
      header.textContent = headerText;
      // if (headerText == "name"){
      //   header.addEventListener("click",sortTableStr(x,table1));
      // } else {
      //   header.addEventListener("click",sortTableNum(x,table1));
      // }
      headerRow.appendChild(header)
      // x=x+1;
    });
  
    // Create the table body rows
    Object.keys(movieData).forEach(movieName => {
        var row = table1.insertRow();
      row.insertCell().textContent = movieName;
      var movie = movieData[movieName];
      row.insertCell().textContent = movie.runtime;
      row.insertCell().textContent = movie.rating;
      row.insertCell().textContent = movie.year;
    });
  
    // Append the table to the DOM
    document.getElementById("tableStats").append(table1);
    //document.getElementById("movieNameHeader").addEventListener("click",sortTableNum(0,"tableStats"))
  }
  
function createTablePlot() {
    // Define the table headers
    var headers = ["name", "plot"];
  
    // Create the table element
    var table2 = document.createElement('table');
  
    // Create the table header row
    var headerRow = table2.insertRow();
    headers.forEach(headerText => {
        var header = document.createElement("th");
      header.textContent = headerText;
      headerRow.appendChild(header);
    });
  
    // Create the table body rows
    Object.keys(movieData).forEach(movieName => {
        var row = table2.insertRow();
      row.insertCell().textContent = movieName;
      var movie = movieData[movieName];
      row.insertCell().textContent = movie.plot;

    });
  
    // Append the table to the DOM
    document.getElementById("tablePlot").append(table2);
  }





