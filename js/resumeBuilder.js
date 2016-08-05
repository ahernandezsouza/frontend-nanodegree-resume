/************
 * FUNCTIONS *
 ************/
function displayHeader() {
    var formattedName = HTMLheaderName.replace("%data%", "Antonio Hernández ");
    var formattedRole = HTMLheaderRole.replace("%data%", "Front End Developer");
    $("#header-top").prepend(formattedName + formattedRole);
}

function displayBio() {
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#paper-header").attr("image", bio.biopic);
    $("#paper-header").attr("heading", bio.welcomeMessage);
}

function displaySkills() {
    $("#header-skills").append(HTMLskillsStart);
    bio.skills.forEach(function(val) {
        $("#header-skills").append(HTMLskills.replace("%data%", val));
    });
}

function displayTopContacts(selector) {
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $(selector).append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);
}

function displayMap() {
    $("#mapDiv").append(googleMap);
}

/*****************
 * Biography JSON *
 ******************/

var bio = {
    "name": "Antonio Hernández Souza",
    "role": "Application Developer",
    "welcomeMessage": "Acquia Certified Drupal Site-Builder",
    "skills": ["HTML/CSS", "Javascript", "Responsive Design", "Drupal CMS"],
    "biopic": "images/biopic.jpg",
    "contacts": {
        "mobile": "+52 1 55 3278 9283",
        "email": "ahernandezsouza@gmail.com",
        "github": "https://github.com/ahernandezsouza",
        "location": "Miguel Hidalgo, Mexico City, Mexico"
    },
    "display": function() {
        displayTopContacts("#topContacts");
        displayBio();
        displaySkills();
    }
};

/************
 * Work JSON *
 ************/

var work = {
    "jobs": [{
        "employer": "Techstudios",
        "title": "Application Development (Drupal)",
        "location": "Houston, TX",
        "dates": "2012 - Present",
        "description": "Designing and Developing Web Applications for our customers, both small and large, using Drupal and Wordpress, including back-end and front-functionality."
    }, {
        "employer": "Los Influyentes",
        "title": "Partner",
        "location": "Mexico, D.F.",
        "dates": "2011 - Present",
        "description": "We develop Drupal Web applications, integrating the technologies you need to build solutions tailored for your business processes."
    }],
    "display": function() {
        for (var job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription);
        }
    }
};

/***********
 * Projects *
 ***********/

var projects = {
    "projects": [{
        "title": "Real Simple Energy",
        "dates": "2015",
        "description": "Wordpress-based solution, using Gravity Forms to power the first phase of Real Simple Energy, helping contact an measure prospective clients for one-on-one energy plan analysis and recommendation.",
        "images": ["images/realsimpleenergy_small.png", "images/realsimpleenergy_small.png"]
    }, {
        "title": "Superate y Triunfa",
        "dates": "2012",
        "description": "We partnered with Techstudios and the Tec of Monterrey to develop a online teaching site focused in combining a wealth of resources aimed at the recently arrived Latino population in the U.S. This Drupal-based site uses a multi domain presence to partner with Univision in a similar effort, delivering its capabilities to a much wider audience.",
        "images": ["images/syt_small.png"]
    }],
    "display": function() {
        for (var project in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedProjectTitle + formattedProjectDates + formattedProjectDescription /*+formattedProjectImage*/ );
            projects.projects[project].images.forEach(function(val) {
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", val));
            });
        }
    }
};


/*****************
 * Education JSON *
 ******************/

var education = {
    "schools": [{
        "name": "Universidad Iberoamericana",
        "degree": "BS Industrial Engineering",
        "dates": "1990 - 1995",
        "location": "Mexico City",
        "majors": ["Engineering"]
    }],
    "onlineCourses": [{
        "title": "Front-End Nanodegree Developer",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }],
    "display": function() {
        for (var school in education.schools) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor);
        }
        $("#education").append(HTMLonlineClasses).append(HTMLschoolStart);
        for (var onlineCourse in education.schools) {
            var formattedOnlineCoursesTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
            var formattedOnlineCoursesSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
            var formattedOnlineCoursesDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
            var formattedOnlineCoursesURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
            $(".education-entry:last").append(formattedOnlineCoursesTitle + formattedOnlineCoursesSchool + formattedOnlineCoursesDates + formattedOnlineCoursesURL);
        }
    }
};


// Applying Sections

//Display Header

displayHeader();

//Display Bio

bio.display();

//Display Work

work.display();

//Display Projects();

projects.display();

//Display Education

education.display();

//Map

displayMap();

//Display Footer Contacts

displayTopContacts("#footerContacts");