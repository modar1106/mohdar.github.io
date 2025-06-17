// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll to Projects section
document.querySelector('.btn').addEventListener('click', () => {
  const projectSection = document.getElementById('projects');
  if (projectSection) {
    projectSection.scrollIntoView({ behavior: 'smooth' });
  }
});

// Alert form
document.querySelector('.contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
  this.reset();
});

// Typing effect on name
const nameSpan = document.querySelector('.highlight');
const nameText = "Mohamad Haidar";
let index = 0;

function typeEffect() {
  if (index < nameText.length) {
    nameSpan.textContent += nameText.charAt(index);
    index++;
    setTimeout(typeEffect, 150);
  }
}
nameSpan.textContent = "";
typeEffect();

// Scroll reveal animation
const revealElements = document.querySelectorAll('section');

function revealOnScroll() {
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', () => {
  revealElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease-out";
  });
  revealOnScroll();
});

function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}
