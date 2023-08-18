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
  var emailAddress = "shirvil@umich.edu";
  var subject = "";

  var mailtoLink =
    "mailto:" + emailAddress + "?subject=" + encodeURIComponent(subject);
  window.location.href = mailtoLink;
}


function scrollToSection(scrollDistance) {
    window.scrollTo({
        top: scrollDistance,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const fadeContent = document.getElementById('content');
    fadeContent.classList.add('fade-in');
});

