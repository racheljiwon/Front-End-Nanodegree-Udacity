/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
  "name" : "Jiwon Rachel Kim",
  "role" : "student",
  "contacts" : {
    "mobile" : "82-10-2070-4083",
    "email" : "makenakim95@gmail.com",
    "github" : "https://github.com/racheljiwon",
    "location" : "Seoul, South Korea"
  },
  "welcomeMessage" : "Hello world! This is Jiwon. I'm a student and studying History Education and Computer Science at Seoul National University. Also I'm a researcher who studies jobs for solving climate change and TEDxSNU(Seoul National University) Organizer who curates the speakers for the best TEDx speech. Therefore, I can be named as an educator, an web developer, and an activist.",
  "skills" : ["Teaching History", "Python", "Java", "Curating", "Act against Climate Change"],
  "biopic" : "images/me.jpg",
  "display" : function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").append(formattedName);
    $("#header").append(formattedRole);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#header").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#header").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#header").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#header").append(formattedLocation);

    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPic);

    var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMsg);

    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      var formattedSkill = "";
      bio.skills.forEach(function (skill) {
        formattedSkill = HTMLskills.replace("%data%", skill);
        $("#header").append(formattedSkill);
      });
    }
  }
};

bio.display();

var work = {
  "jobs" : [
    {
      "title" : "12th TEDxSNU Sponsorship Team Leader",
      "employer" : "Alberto Mondi",
      "dates" : "0.5",
      "location" : "Seoul",
      "description" : "I led a team with 7 organizers. We gathered sponsors including 'Hangyore', one of the major newspaper firms in South Korea, 'Lotte Tour', 'Watcha play', and 'Granology'. With the money we received from those companies, we were able to offer high-quality gift bags and an optimal place."
    },
    {
      "title" : "13th TEDxSNU Curating Team Leader",
      "employer" : "Vladimir Georgy Kavko",
      "dates" : "in progress",
      "location" : "Seoul",
      "description" : "I'm leading curating team comprised of 8 organizers, who search and curate speakers for 13th TEDxSNU. Until now, we have contacted 2 speakers - one is a quantum computer professor at KAIST and the other is a contemporary dancing team."
    },
    {
      "title" : "Researcher",
      "employer" : "UNESCO Korea",
      "dates" : "in progress",
      "location" : "Seoul",
      "description" : "In UNESCO, I'm researching and creating several jobs that are able to facilitate the settlement of renewable energies in South Korea."
    }
  ],
  "display" : function() {
    work.jobs.forEach(function(job) {
      $("#workExperience").append(HTMLworkStart);
      var formattedworkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
      var formattedworkTitle = HTMLworkTitle.replace("%data%", job.title);
      var formattedEmployerTitle = formattedworkEmployer + formattedworkTitle;
      $(".work-entry:last").append(formattedEmployerTitle);
      var formattedworkDates = HTMLworkDates.replace("%data%", job.dates);
      $(".work-entry:last").append(formattedworkDates);
      var formattedworkLocation = HTMLworkLocation.replace("%data%", job.location);
      $(".work-entry:last").append(formattedworkLocation);
      var formattedworkDescription = HTMLworkDescription.replace("%data%", job.description);
      $(".work-entry:last").append(formattedworkDescription);
    });
  }
};

work.display();

var education = {
  "schools" : [
    {
      "name" : "Seoul National University",
      "location" : "Seoul",
      "degree" : "Bachelors",
      "majors" : ["History Education", "Computer Science and Engineering"],
      "dates" : "2019",
      "url" : "http://www.snu.ac.kr"
    },
    {
      "name" : "Harvard University",
      "location" : "Boston",
      "degree" : "Masters",
      "majors" : ["Education", "Computer Science"],
      "dates" : "2022",
      "url" : "http://www.harvard.edu"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Front-End Web Developer Nanodegree",
      "school" : "Udacity",
      "dates" : "2017",
      "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      "title" : "Intro to Programming Nanodegree",
      "school" : "Udacity",
      "dates" : "2016",
      "url" : "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }
  ],
  "display" : function(){
    education.schools.forEach(function(edu) {
      $("#education").append(HTMLschoolStart);
      var formattedschoolName = HTMLschoolName.replace("%data%", edu.name);
      var formattedschoolDegree = HTMLschoolDegree.replace("%data%", edu.degree);
      var formattedNameDegree = formattedschoolName + formattedschoolDegree;
      $(".education-entry:last").append(formattedNameDegree);

      var formattedschoolDates = HTMLschoolDates.replace("%data%", edu.dates);
      $(".education-entry:last").append(formattedschoolDates);

      var formattedschoolLocation = HTMLschoolLocation.replace("%data%", edu.location);
      $(".education-entry:last").append(formattedschoolLocation);

      if (edu.majors.length > 0) {
        var formattedschoolMajor = "";
        edu.majors.forEach(function (major) {
          formattedschoolMajor = HTMLschoolMajor.replace("%data%", major);
          $(".education-entry:last").append(formattedschoolMajor);
        });
      }
    });
    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(online) {
      $("#education").append(HTMLonlineStart);
      var formattedonlineTitle = HTMLonlineTitle.replace("%data%", online.title);
      $(".online-entry:last").append(formattedonlineTitle);
      var formattedonlineSchool = HTMLonlineSchool.replace("%data%", online.school);
      $(".online-entry:last").append(formattedonlineSchool);
      var formattedonlineDates = HTMLonlineDates.replace("%data%", online.dates);
      $(".online-entry:last").append(formattedonlineDates);
      var formattedonlineURL = HTMLonlineURL.replace("%data%", online.url);
      $(".online-entry:last").append(formattedonlineURL);
    });
  }
};

education.display();

var projects = {
  "projects" : [{
    "title" : "Profile homepage",
    "dates" : "2017",
    "description" : "I used html and css to follow a mockup file, but all the contents are stories of mine.",
    "images" : ["images/project1.png", "images/project2.png"]
  }],
    "display" : function () {
      projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);
        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedprojectTitle);

        var formattedprojectDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedprojectDates);

        var formattedprojectDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedprojectDescription);

        project.images.forEach(function(image) {
          var formattedprojectImage = HTMLprojectImage.replace("%data%", image);
          $(".project-entry:last").append(formattedprojectImage);
        });
      });
    }
};

projects.display();

$("#main").append(internationalizeButton);

function inName(){
  var name = bio.name.split(" ");
  var internationalName = name[0] + " " + name[1] + " " + name[2].toUpperCase();

  return internationalName;
}

$("#mapDiv").append(googleMap);
