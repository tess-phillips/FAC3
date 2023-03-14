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

createTableStats("tableStats")
createTablePlot("tablePlot")

function createTableStats(tablename){
  // Create a table element
  var table = $("<table></table>");

  // Create table header
  var header = $("<thead><tr><th>Movie Title</th><th>Runtime</th><th>Rating</th><th>Year</th></tr></thead>");
  table.append(header);

  // Create table body
  var tbody = $("<tbody></tbody>");

  // Loop through each movie data and create a table row for each movie
  $.each(movieData, function(title, data) {
    var row = $("<tr></tr>");
    row.append($("<td>" + title + "</td>"));
    row.append($("<td>" + data.runtime + " mins</td>"));
    row.append($("<td>" + data.rating + "</td>"));
    row.append($("<td>" + data.year + "</td>"));
    tbody.append(row);
  });

  table.append(tbody);
  
  // Append table to a container
  $(`#${tablename}`).append(table);

  $(document).ready(function () {
        table.DataTable()
  })
}

function createTablePlot(tablename){
  // Create a table element
  var table = $("<table></table>");

  // Create table header
  var header = $("<thead><tr><th>Movie Title</th><th>Plot</th><th>Cast</th></thead>");
  table.append(header);

  // Create table body
  var tbody = $("<tbody></tbody>");

  // Loop through each movie data and create a table row for each movie
  $.each(movieData, function(title, data) {
    var row = $("<tr></tr>");
    row.append($("<td>" + title + "</td>"));
    row.append($("<td>" + data.plot + "</td>"));
    row.append($("<td>" + data.cast.join(", ") + "</td>"));
    tbody.append(row);
  });

  table.append(tbody);
  
  // Append table to a container
  $(`#${tablename}`).append(table);

  $(document).ready(function () {
        table.DataTable()
  })
}