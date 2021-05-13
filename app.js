var myName = "harrison bender";
var res = myName.toUpperCase();
console.log(res);

var companyName = "Reverb.com";
var jobTitle = "Web Developer";
var jobDescription = "Web Development";

function displayPosition(companyName, jobTitle, jobDescription) {
  console.log(companyName);
  console.log(jobTitle);
  console.log(jobDescription);
}

displayPosition(companyName, jobTitle, jobDescription);

let myDescription = "Description: Fake Resume for Reverb.com Web Developer";
console.log(myDescription);

var myInterests = "My Interests:";
var res = myInterests.toUpperCase();
console.log(res);

var myInterests1 = "Music";
var myInterests2 = "Television";
var myInterests3 = "Disc Golf";
var myInterests4 = "The Outdoors";


displayPosition(myInterests1, myInterests2, myInterests3, myInterests4);

var myPreviousExperience = "My Previous Experience:";
var res = myPreviousExperience.toUpperCase();
console.log(res);

var myPreviousExperience1 = "OTI - CAHOC Certified Occupataion Health and Safety Specialist";
var myPreviousExperience2 = "Allsouth Appliance - Ordering and Customer Service";
var myPreviousExperience3 = "The Woolworth - Front of House Manager";
var myPreviousExperience4 = "PW PCA - Pricing and Sales Coordinator";

displayPosition(myPreviousExperience1, myPreviousExperience2, myPreviousExperience3, myPreviousExperience4);

var skills = "My Skills:";
var res = skills.toUpperCase();
console.log(res);

let skill = ["Drums", "CAHOC Certified", "Bass", "Live Sound", "Wood Working"];

function displaySkill(skill, isCool) {
  if (isCool) {
    console.log("BAM: " + skill);
  } else {
    console.log(skill);
  }
}

displaySkill(skill[0], true);
displaySkill(skill[1], false);
displaySkill(skill[2], true);
displaySkill(skill[3], true);
displaySkill(skill[4], true);
