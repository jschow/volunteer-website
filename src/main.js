console.log(document.querySelector('main'));

// ===== Testimonials wiring =====
const volunteerBtn = document.getElementById("volunteerBtn");
const organizationBtn = document.getElementById("organizationBtn");
const testimonialImage = document.getElementById("testimonialImage");
const testimonialTitle = document.getElementById("testimonialTitle");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

if (volunteerBtn && organizationBtn && testimonialImage && testimonialTitle && leftArrow && rightArrow) {
  let isShifted = false;

  function updateSliderPosition() {
    testimonialImage.classList.remove("translate-x-[12.5%]", "-translate-x-[12.5%]");
    testimonialImage.classList.add(isShifted ? "-translate-x-[12.5%]" : "translate-x-[12.5%]");
  }

  function setActiveButton(active) {
    if (active === "volunteer") {
      testimonialImage.src = "/images/volunteer_slider.png";
      testimonialTitle.textContent = "Volunteer Testimonials";
      volunteerBtn.style.backgroundColor = "#C3560C"; // active
      organizationBtn.style.backgroundColor = "#A0ABB7"; // inactive
    } else {
      testimonialImage.src = "/images/organization_slider.png";
      testimonialTitle.textContent = "Organization Testimonials";
      volunteerBtn.style.backgroundColor = "#A0ABB7"; // inactive
      organizationBtn.style.backgroundColor = "#062951"; // active
    }
    isShifted = false; // reset to default (right-pushed)
    updateSliderPosition();
  }

  // Initial state
  setActiveButton("volunteer");

  // Toggle
  volunteerBtn.addEventListener("click", () => setActiveButton("volunteer"));
  organizationBtn.addEventListener("click", () => setActiveButton("organization"));

  // Simple two-position slide
  leftArrow.addEventListener("click", () => { isShifted = false; updateSliderPosition(); });
  rightArrow.addEventListener("click", () => { isShifted = true;  updateSliderPosition(); });
}
