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
      document.getElementById(tabs[i]).style.backgroundColor =
        "rgb(234, 61, 79)";
    } else {
      document.getElementById(tabs[i]).style.backgroundColor =
        "rgb(35, 35, 35)";
    }
  }
}

function openEmailClient() {
  // Define the email address and subject
  var emailAddress = "shirvil@umich.edu";
  var subject = "";

  // Construct the mailto link
  var mailtoLink =
    "mailto:" + emailAddress + "?subject=" + encodeURIComponent(subject);

  // Open the user's default email client
  window.location.href = mailtoLink;
}


function scrollToSection(scrollDistance) {
    // Calculate the distance you want to scroll to (in pixels)
    // Use smooth scrolling to the specified distance
    window.scrollTo({
        top: scrollDistance,
        behavior: 'smooth'
    });
}

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const fadeContent = document.getElementById('content');
    fadeContent.classList.add('fade-in');
});

