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
    bio.skills.forEach(function(skill) {
        $("#header-skills").append(HTMLskills.replace("%data%", skill));
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
    "contacts": {
        "mobile": " +52 1 55 3278 9283",
        "email": " ahernandezsouza@gmail.com",
        "github": " https://github.com/ahernandezsouza",
        "location": " Miguel Hidalgo, Mexico City, Mexico"
    },
    "welcomeMessage": "Acquia Certified Drupal Site-Builder",
    "skills": ["HTML/CSS", "Javascript", "Responsive Design", "Drupal CMS"],
    "biopic": "images/biopic.jpg",
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
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription);
        });
    }
};

/***********
 * Projects *
 ***********/

var projects = {
    "projects": [{
        "title": "Real Simple Energy",
        "code": "realsimpleenergy",
        "dates": "2015",
        "description": "Wordpress-based solution, using Gravity Forms to power the first phase of Real Simple Energy, helping contact an measure prospective clients for one-on-one energy plan analysis and recommendation.",
        "images": ["images/realsimpleenergy_small.png", "images/realsimpleenergy_small.png"]
    }, {
        "title": "Superate y Triunfa",
        "code": "superateytriunfa",
        "dates": "2012",
        "description": "We partnered with Techstudios and the Tec of Monterrey to develop a online teaching site focused in combining a wealth of resources aimed at the recently arrived Latino population in the U.S. This Drupal-based site uses a multi domain presence to partner with Univision in a similar effort, delivering its capabilities to a much wider audience.",
        "images": ["images/syt_small.png"]
    }],
    "display": function() {
        projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
            var formattedProjectButton = HTMLprojectButton.replace("%data%", project.code);
            var formattedProjectModal = HTMLprojectModal.replace("%data%", project.code);
            $(".project-entry:last").attr("heading", project.title+" - "+ project.dates);
            $(".project-entry:last").append(formattedProjectDescription+formattedProjectButton);
            $("#projects").append(formattedProjectModal);
            project.images.forEach(function(val) {
                $("paper-dialog#"+ project.code +" div.images").append(HTMLprojectImage.replace("%data%", val));
            });
        });
    }
};


/*****************
 * Education JSON *
 ******************/

var education = {
    "schools": [{
        "name": "Universidad Iberoamericana",
        "location": "Mexico City",
        "degree": "BS Industrial Engineering",
        "majors": ["Engineering"],
        "dates": "1990 - 1995",
        "url": "http://ibero.mx"
    }],
    "onlineCourses": [{
        "title": "Front-End Nanodegree Developer",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }],
    "display": function() {
        education.schools.forEach(function(school){
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor);
        }),
        $("#education").append(HTMLonlineClasses).append(HTMLschoolStart);
        education.onlineCourses.forEach(function(onlineCourse){
            var formattedOnlineCoursesTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
            var formattedOnlineCoursesSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
            var formattedOnlineCoursesDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
            var formattedOnlineCoursesURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
            $(".education-entry:last").append(formattedOnlineCoursesTitle + formattedOnlineCoursesSchool + formattedOnlineCoursesDates + formattedOnlineCoursesURL);
        });
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