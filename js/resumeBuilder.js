var bio = {
	"name" : "Nelson Benavides",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "(559) 492-0210",
		"email" : "nelsonbenavides22@gmail.com",
		"github" : "NelsonBenavides",
		"twitter" : "N/A",
		"location" : "Fresno CA"
	},
	"welcomeMessage" : "Hello there",
	"skills" : [
		"HTML", "CSS", "JS", "jQuery", "C++", "SQL", "PHP", "Linux", "SEO"
	],
	"bioPic" : "images/fry.jpg",
};

var education = {
	"schools" : [
		{
			"name" : "University of Phoenix",
			"location" : "Fresno CA",
			"degree" : "B.S. Software Engineering",
			"majors" : ["Computer Science"],
			"dates" : "2008-2012"
		}
	],

	"onlineCourses" : [
		{
			"title" : "Intro to HTML and CSS",
			"school" : "Udacity",
			"dates" : 2014,
			"url" : "http://www.udacity.com/course/ud"
		},
		{
			"title" : "Version Control - Github",
			"school" : "Udacity",
			"dates" : 2014,
			"url" : "http://www.udacity.com/course/ud"
		},
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"dates" : 2014,
			"url" : "http://www.udacity.com/course/ud804"
		}
	]
}

var work = {
	"jobs" : [
		{
			"employer" : "unWired Broadband",
			"title" : "Web Developer",
			"location" : "Fresno CA",
			"dates" : "2010-present",
			"description" : "Design and develop fully-functional websites for current and new company’s customers including a local website that offers scholarships to college students."
		},
		{
			"employer" : "Brand X Networks",
			"title" : "Tech Support Specialist",
			"location" : "Fresno CA",
			"dates" : "2007-2010",
			"description" : "Bilingual English/Spanish technical support - customer service. Receive nationwide calls troubleshooting dial-up, DSL, and Wireless internet issues including connectivity, e-mail, filters, anti-spam, anti-virus, firewall, dial-up accelerators, using all operating systems including Apple computers."
		},
		{
			"employer" : "Fake Place to show a better map :)",
			"title" : "Web Developer",
			"location" : "Seattle, WA",
			"dates" : "2003-2007",
			"description" : "Troubleshooting more than 20 different software used to request credit reports, checking results on actual credit reports – Social Security and account numbers."
		}
	]
}

var projects = {
	"projects" : [
		{
			"title" : "HTML/CSS web page mockup",
			"dates" : 2014,
			"description" : "Projects, Projects, Projects, Projects, Projects, Projects, Projects, Projects, Projects",
			"images" : ["images/197x148.gif", "images/197x148.gif"]
		}
	]
}

//Encapsulating function
bio.display = function() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var contacts = bio["contacts"];
	var formattedMobile = HTMLmobile.replace("%data%",contacts["mobile"]);
	var formattedEmail = HTMLemail.replace("%data%",contacts["email"]);
	var formattedGithub = HTMLgithub.replace("%data%", contacts["github"]);
	var formattedTwitter = HTMLtwitter.replace("%data%", contacts["twitter"]);
	var formattedLocation = HTMLlocation.replace("%data%",contacts["location"]);
	var all = formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation;
	$(all).appendTo("#topContacts, #footerContacts");

	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);


    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for(mySkills in bio.skills) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[mySkills]);
            $("#skills").append(formattedSkills);
        }
    }
}

bio.display();

//Encapsulating function
work.display = function() {
	for(allJobs in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[allJobs].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[allJobs].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[allJobs].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[allJobs].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[allJobs].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

work.display();

//Encapsulating function
projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length > 0) {
			for(image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

//Encapsulating function
education.display = function() {
	for(allSchools in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[allSchools].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[allSchools].degree);
		var formattedSchoolNameDegree = formattedSchoolName + formattedDegree;
		$(".education-entry:last").append(formattedSchoolNameDegree);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[allSchools].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[allSchools].dates);
		$(".education-entry:last").append(formattedDates);

		if(education.schools[allSchools].majors.length > 0) {
			for(everyMajor in education.schools[allSchools].majors) {
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[allSchools].majors[everyMajor]);
				$(".education-entry:last").append(formattedMajor);
			}
		}
	}

	if (education.onlineCourses.length > 0) {
		$("#education").append(HTMLonlineClasses);
		for(allOnline in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[allOnline].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[allOnline].school);
			var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
			$(".education-entry:last").append(formattedOnlineTitleSchool);

			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[allOnline].dates);
			$(".education-entry:last").append(formattedOnlineDates);

			var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[allOnline].url);
			$(".education-entry:last").append(formattedUrl);
		}
	}
}

education.display();

$("#mapDiv").append(googleMap);
