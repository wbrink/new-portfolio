/* 
Purpose of this javascript is to remove the functionality
of anchor links in the page in order for the back button and 
the refresh to work more intuitiviely since anchor tags affect 
the url and the browser history.

I am using anchor tags in case javascript is disabled in person's browser
*/


var portfolioButtonLink = document.querySelector("#portfolioButtonLink");
var portfolioNavLink = document.querySelector("#portfolio-nav-link");
var portfolioSection = document.querySelector("#portfolio-section");

var aboutNavLink = document.querySelector("#about-nav-link");
var aboutSection = document.querySelector("#about-section");

var contactNavLink = document.querySelector("#contact-nav-link");
var contactSection = document.querySelector("#contact-section");
 

// clicked the portfolio button link
portfolioButtonLink.addEventListener("click", (e) => {
  e.preventDefault();
  portfolioSection.scrollIntoView(true);
})

// clicked the portfolio link in the navbar
portfolioNavLink.addEventListener("click", (e) => {
  e.preventDefault();
  portfolioSection.scrollIntoView(true);
})

// clicked the about link in the navbar
aboutNavLink.addEventListener("click", (e) => {
  e.preventDefault();
  aboutSection.scrollIntoView(true);
})

// clicked the contact link in the navbar
contactNavLink.addEventListener("click", (e) => {
  e.preventDefault();
  contactSection.scrollIntoView(true);
})


