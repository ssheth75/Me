function showContent(contentType) {
  const tabs = ["skillsContent", "experienceContent", "educationContent"];

  for (var i = 0; i < tabs.length; i++) {
    if (tabs[i] === contentType) {
      document.getElementById(tabs[i]).style.display = "block";
    } else {
      document.getElementById(tabs[i]).style.display = "none";
    }
  }
}

function updateBorder(section) {
  const tabs = ["skillsTab", "experienceTab", "educationTab"];
  for (var i = 0; i < tabs.length; i++) {
    if (tabs[i] === section) {
      document.getElementById(tabs[i]).style.background =
        "rgb(249, 255, 127)";
      document.getElementById(tabs[i]).style.color = "black";
    } else {
      document.getElementById(tabs[i]).style.background = "rgb(35, 35, 35)";
      document.getElementById(tabs[i]).style.color = "white";
    }
  }
}

function openEmailClient() {
  var emailAddress = "shirvil@umich.edu";
  var subject = "";

  var mailtoLink =
    "mailto:" + emailAddress + "?subject=" + encodeURIComponent(subject);
  window.location.href = mailtoLink;
}

function scrollToSection(scrollDistance) {
  window.scrollTo({
    top: scrollDistance,
    behavior: "smooth",
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const fadeContent = document.getElementById("content");
  fadeContent.classList.add("fade-in");
});


window.addEventListener('scroll', function() {
  const landingContainer = document.querySelector('.landingContainer');
  const aboutMeContainer = document.getElementById('fadeInContainer');
  const landingHeight = landingContainer.offsetHeight;

  const fadeInThreshold = landingHeight * 0.2; 
  
  // Only trigger the fade-in if the container is not already visible
  if (window.scrollY > fadeInThreshold && !aboutMeContainer.classList.contains('visible')) {
    aboutMeContainer.classList.add('visible');
  }
});

