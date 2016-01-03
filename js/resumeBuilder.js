var bio = {
    name: "Garon Davis",
    role: "Web Developer",
    contacts: {
        mobile: "508-463-7825",
        email: "garoncdavis@gmail.com",
        github: "",
        twitter: "@GaronD",
        location: "Boston, MA"
    },
    welcomeMessage: "",
    skills: ["Web development", "User Experience", "Customer focused", "Project Management", "Team building"],
    biopic: "http://",
    display: function () {}
};

var education = {
    "schools": [
        {
            "name": "Saint joesph's College of Maine",
            "location": "Standish, ME",
            "degree": "string",
            "majors": ["", ""],
            "dates": "string",
            "url": "string"
        }
    ],

    "onlineCourses": [
        {
            "title": "string",
            "school": "string",
            "date": "string",
            "url": "string",
}
 ],
    "display": function () {}
};

var work = {
    jobs: [
        {
            employer: "Runkeeper",
            title: "Director of Customer Success",
            location: "Boston, MA",
            date: "November 2013 - Present",
            description: "In charge of maintaining customer relations and building new products for the partner team on the web"
        },
        {
            employer: "Verivo Software",
            title: "Manager of Support Services",
            location: "Waltham, MA",
            date: "December 2007 - Novemeber 2013",
            description: "In charge of maintaining customer relations and building new products for the partner team on the web"
        }
    ],
    display: function () {

    }
};

var projects = [
    {
        title: "Space Project",
        dates: "September - Novemeber 2014",
        description: "Go where no human has gone",
        images: ["images/197x148.gif"],
        display: function () {
            function projectBuilder(helper, info) {
                var formatted = helper.replace("%data%", info);
                $("#projects").append(formatted);
            }
            $("#projects").append(HTMLprojectStart);
            projectBuilder(HTMLprojectTitle, this.title);
            projectBuilder(HTMLprojectDates, this.dates);
            projectBuilder(HTMLprojectDescription, this.description);
            projectBuilder(HTMLprojectImage, this.images);
        }
    },
    {
        title: "Nature Project",
        dates: "July - August 2015",
        description: "Explore the great outdoors",
        images: ["images/197x148.gif"],
        display: function () {
            function projectBuilder(helper, info) {
                var formatted = helper.replace("%data%", info);
                $("#projects").append(formatted);
            }
            $("#projects").append(HTMLprojectStart);
            projectBuilder(HTMLprojectTitle, this.title);
            projectBuilder(HTMLprojectDates, this.dates);
            projectBuilder(HTMLprojectDescription, this.description);
            projectBuilder(HTMLprojectImage, this.images);

        }
    }
];

for (var a in projects) {
    projects[a].display();
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedSkills = HTMLskillsStart.replace("%data%", bio.skills.toString());


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
//$("#workExperience").append(formattedWorkTitle);
$("#education").append(education.schools[0].name);
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
}
var i = 0
while (bio.skills[i]) {
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
    $("#header").append(formattedSkills);
    i++;
}

function displayWork() {
    for (var a in work.jobs) {
        var formattedEmployer = HTMLworkStart + HTMLworkEmployer.replace("%data%", work.jobs[a].employer + ' ' + HTMLworkTitle.replace("%data%", work.jobs[a].title));

        var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[a].date);

        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[a].location);

        var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[a].description);


        $("#workExperience").append(formattedEmployer);
        $("#workExperience").append(formattedWorkDates);
        $("#workExperience").append(formattedWorkLocation);
        $("#workExperience").append(formattedWorkDescription);
    }
}
displayWork();
//$("#intButton").onclick = inName(bio.name);

$("#main").append(internationalizeButton);

function inName(name) {
    name = bio.name

    var name = name.trim().split(' ');

    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    var intName = name[0] + ' ' + name[1];

    return intName;
};

$("#mapDiv").append(googleMap);
