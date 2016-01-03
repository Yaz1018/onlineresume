var bio = {
    name: 'Garon Davis',
    role: 'Web Developer',
    contacts: {
        mobile: '508-463-7825',
        email: 'garoncdavis@gmail.com',
        github: 'Yaz1018',
        twitter: '@GaronD',
        location: 'Boston, MA'
    },
    welcomeMessage: 'Customer focused front end web developer',
    skills: ['Web development', 'User Experience', 'Customer focused', 'Project Management', 'Team building'],
    biopic: 'images/Yaz.png',
    display: {
        bioBuild: function () {
            function bioBuilder(helper, info) {
                var formatted = helper.replace("%data%", info);
                $('#header').append(formatted);
            }
            bioBuilder(HTMLheaderName, bio.name);
            bioBuilder(HTMLheaderRole, bio.role);
            bioBuilder(HTMLmobile, bio.contacts.mobile);
            bioBuilder(HTMLemail, bio.contacts.email);
            bioBuilder(HTMLtwitter, bio.contacts.twitter);
            bioBuilder(HTMLgithub, bio.contacts.github);
            bioBuilder(HTMLlocation, bio.contacts.location);
            bioBuilder(HTMLbioPic, bio.biopic);
            bioBuilder(HTMLwelcomeMsg, bio.welcomeMessage);
            $('#header').append(HTMLskillsStart);

            function skillBuilder(helper, info) {
                var formatted = helper.replace("%data%", info);
                $('#skills').append(formatted);
            }
            var len = bio.skills.length;
            for (var a = 0; a < len; a++) {
                skillBuilder(HTMLskills, bio.skills[a]);
            }

        },
        footerBuild: function () {
            function footBuilder(helper, info) {
                var formatted = helper.replace("%data%", info);
                $('#footerContacts').append(formatted);
            }
            footBuilder(HTMLmobile, bio.contacts.mobile);
            footBuilder(HTMLemail, bio.contacts.email);
            footBuilder(HTMLtwitter, bio.contacts.twitter);
            footBuilder(HTMLgithub, bio.contacts.github);
            footBuilder(HTMLlocation, bio.contacts.location);

        }
    }
};

var work = {
    jobs: [{
            employer: 'Runkeeper',
            title: 'Director of Customer Success',
            location: 'Boston, MA',
            date: 'November 2013 - Present',
            description: 'In charge of maintaining customer relations and building new products for the partner team on the web'
        },
        {
            employer: 'Verivo Software',
            title: 'Manager of Support Services',
            location: 'Waltham, MA',
            date: 'December 2007 - Novemeber 2013',
            description: 'In charge of maintaining customer relations and building new products for the partner team on the web'
        }],
    display: function () {
        var len = work.jobs.length
        for (var a = 0; a < len; a++) {
            function workBuilder(helper, info) {
                var formatted = helper.replace("%data%", info);
                $('.work-entry:last').append(formatted);
            }

            $('#workExperience').append(HTMLworkStart);
            workBuilder(HTMLworkEmployer, work.jobs[a].employer + ' - ' + work.jobs[a].title);
            workBuilder(HTMLworkDates, work.jobs[a].date);
            workBuilder(HTMLworkLocation, work.jobs[a].location);
            workBuilder(HTMLworkDescription, work.jobs[a].description);
        }
    }
};

var project = {
    projects: [{
            title: 'Space Project',
            dates: 'September - Novemeber 2014',
            description: 'Go where no human has gone',
            images: ['images/image3.jpg'],
    }
              ,
        {
            title: 'Nature Project',
            dates: 'July - August 2015',
            description: 'Explore the great outdoors',
            images: ['images/image2.jpg'],

    }],
    display: function () {
        var len = project.projects.length;
        for (var a = 0; a < len; a++) {
            function projectBuilder(helper, info) {
                var formatted = helper.replace("%data%", info);
                $('.project-entry:last').append(formatted);
            }
            $('#projects').append(HTMLprojectStart);
            projectBuilder(HTMLprojectTitle, project.projects[a].title);
            projectBuilder(HTMLprojectDates, project.projects[a].dates);
            projectBuilder(HTMLprojectDescription, project.projects[a].description);
            projectBuilder(HTMLprojectImage, project.projects[a].images);
        }

    }
};

var education = {
    'schools': [{
        'name': "Saint joesph's College of Maine ",
        'location': 'Standish, ME',
        'degree': 'Elementry Education',
        'majors': ['BA'],
        'dates': '2001-2005',
        'url': 'https://www.sjcme.edu/'
        }],

    'onlineCourses': [{
        'title': 'Javascripts Basics',
        'school': 'Udacity',
        'date': 'December 2015',
        'url': 'https://www.udacity.com',
        }],
    'display': function () {
        var len = education.schools.length;
        for (var a = 0; a < len; a++) {
            function eduBuilder(helper, info) {
                var formatted = helper.replace("%data%", info);
                $('.education-entry:last').append(formatted);
            }

            $('#education').append(HTMLschoolStart);
            eduBuilder(HTMLschoolName, education.schools[a].name + ' - ' + education.schools[a].degree);
            eduBuilder(HTMLschoolLocation, education.schools[a].location);
            eduBuilder(HTMLschoolDates, education.schools[a].dates);
            eduBuilder(HTMLschoolMajor, education.schools[a].majors);

        }
        $('.education-entry:last').append(HTMLonlineClasses);
        var len = education.onlineCourses.length;
        for (var a = 0; a < len; a++) {
            function onlBuilder(helper, info) {
                var formatted = helper.replace("%data%", info);
                $('.education-entry:last').append(formatted);
            }
            onlBuilder(HTMLonlineTitle, education.onlineCourses[a].title + ' - ' + education.onlineCourses[a].school);
            onlBuilder(HTMLonlineDates, education.onlineCourses[a].date);
            onlBuilder(HTMLonlineURL, education.onlineCourses[a].url);
        }
    }
};
