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
const form = document.getElementById("addMovie-htm")

let castFieldCount = 1;
const castBoxes = {
  1: document.getElementById("cast-box-1")
};

const addFieldButton = document.getElementById("add-field-button");
addFieldButton.addEventListener("click", () => {
  const movieWrap = document.getElementById("addMovie-wrap")
  castFieldCount++;
  const newCastBox = document.createElement("input");
  newCastBox.type = "text";
  newCastBox.title="Cast member"
  newCastBox.id = `cast-box-${castFieldCount}`;
  newCastBox.name = `cast-${castFieldCount}`;
  newCastBox.className = `input`;
  castBoxes[castFieldCount] = newCastBox;
  const label = document.createElement("label");
  const container = document.createElement("div");
  container.appendChild(label);
  container.appendChild(newCastBox);
  addFieldButton.parentNode.insertBefore(container, addFieldButton);
});

form.addEventListener('submit',(e)=> {
  e.preventDefault();
  const fd = new FormData(form);
  const obj = Object.fromEntries(fd);
  newMovieName = obj["Movie Name"];
  newPlot = obj["Plot"];
  newRuntime = obj["Runtime"];
  newRating = obj["Rating"];
  newYear = obj["Year"];
  newCast = [];
  for (let key in obj) {
    if (key !== 'Movie Name' && key !== 'Plot' && key !== 'Runtime'&& key !== 'Rating'&& key !== 'Year') {
      newCast.push(obj[key]);
    }
  }
  movieData[newMovieName] = {
    rating: newRating,
    runtime: newRuntime,
    year: newYear,
    plot: newPlot,
    cast: newCast
  }

  createTableStats("tableStats");
})



function createTableStats(tablename){
  var table = document.getElementById(tablename)
	table.innerHTML = ''
  table = $("<table></table>");
  var header = $("<thead><tr><th>Movie Title</th><th>Runtime</th><th>Rating</th><th>Year</th><th>Plot</th><th>Cast</th></tr></thead>");
  table.append(header);
  var tbody = $("<tbody></tbody>");

  $.each(movieData, function(title, data) {
    var row = $("<tr></tr>");
    row.append($("<td>" + title + "</td>"));
    row.append($("<td>" + data.runtime + " mins</td>"));
    row.append($("<td>" + data.rating + "</td>"));
    row.append($("<td>" + data.year + "</td>"));
    row.append($("<td>" + data.plot + "</td>"));
    row.append($("<td>" + data.cast.join(", ") + "</td>"));
    tbody.append(row);
  });
  table.append(tbody);

  $(`#${tablename}`).append(table);
  $(document).ready(function () {
        table.DataTable()

  })
};
