//Run project display method
project.display();

//Run work display method
work.display();

//run bio display method
bio.display();

//run education display method
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

//Populate footer with contact infomation
function footBuilder(helper, info) {
    var formatted = helper.replace("%data%", info);
    $("#footerContacts").append(formatted);
}
footBuilder(HTMLmobile, bio.contacts.mobile);
footBuilder(HTMLemail, bio.contacts.email);
footBuilder(HTMLtwitter, bio.contacts.twitter);
footBuilder(HTMLgithub, bio.contacts.github);
footBuilder(HTMLlocation, bio.contacts.location);
