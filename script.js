// Dynamic role text (simple fade rotation instead of typewriter)
const roles = [
  "Full-Stack Developer",
  "Backend Learner",
  "UI/UX Enthusiast",
  "Problem Solver",
];

let roleIndex = 0;
const roleElement = document.getElementById("roleText");

function changeRole() {
  if (!roleElement) return;
  roleElement.style.opacity = 0;
  setTimeout(() => {
    roleElement.textContent = roles[roleIndex];
    roleElement.style.opacity = 1;
    roleIndex = (roleIndex + 1) % roles.length;
  }, 200);
}

changeRole();
setInterval(changeRole, 2200);

// Scroll in animation for sections
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".appear").forEach((el) => observer.observe(el));
