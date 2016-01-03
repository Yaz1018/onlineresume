//Run project display method
project.display();

//Run work display method
work.display();

//run bio display method
bio.display.bioBuild();

bio.display.footerBuild();

//run education display method
education.display();

//display map div to show google map
$("#mapDiv").append(googleMap);


$("#lets-connect").click(function () {
    window.location = "https://www.linkedin.com/in/garondavis";
});

//Populate footer with contact infomation
