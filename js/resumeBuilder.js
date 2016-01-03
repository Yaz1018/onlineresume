//Run projects display method for every project in array
for (var a in projects) {
    projects[a].display();
}

//Run work display method
work.display();

//run bio display method
bio.display();

education.display();

//internationlize name on resume for viewers who format name differently
$("#main").append(internationalizeButton);

function inName(name) {
    name = bio.name;

    name = name.trim().split(' ');

    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    var intName = name[0] + ' ' + name[1];

    return intName;
}

//display map div to show google map
$("#mapDiv").append(googleMap);

$("#lets-connect").click(function () {
    window.location = "https://www.linkedin.com/in/garondavis";
});
