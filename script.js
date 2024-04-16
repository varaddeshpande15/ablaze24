document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-part2 h4 a");
  
    navLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  });
  let currentIndex = 0;
  const slides = document.querySelector('.events-pics');
  
  function showSlide(index) {
    slides.style.transform = `translateX(-${index * 30}%)`;
    // slides.style.transform = `translateX(-${index * slideWidth}px)`;
  }
  
  function goNext() {
    currentIndex++;
    if (currentIndex >= slides.children.length) {
      currentIndex = 0; // Reset index to loop back to the first image
    }
    showSlide(currentIndex);
  }
  
  function goPrev() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = slides.children.length - 1; // Loop to the last image
    }
    showSlide(currentIndex);
  }

  let teamcurrentIndex = 0;
  const teamslides = document.querySelector('.team-pics');
  
  function teamshowSlide(index) {
    teamslides.style.transform = `translateX(-${index * 30}%)`;
    // slides.style.transform = `translateX(-${index * slideWidth}px)`;
  }
  
  function teamgoNext() {
    teamcurrentIndex++;
    if (teamcurrentIndex >= teamslides.children.length) {
        teamcurrentIndex = 0; // Reset index to loop back to the first image
    }
    teamshowSlide(teamcurrentIndex);
  }
  
  function teamgoPrev() {
    teamcurrentIndex--;
    if (teamcurrentIndex < 0) {
        teamcurrentIndex = teamslides.children.length - 1; // Loop to the last image
    }
    teamshowSlide(teamcurrentIndex);
  }