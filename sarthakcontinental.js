const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});
function calculateTotalCost(event) {
  event.preventDefault();

  const checkIn = new Date(document.getElementById('check-in').value);
  const checkOut = new Date(document.getElementById('check-out').value);
  const roomType = document.getElementById('room-type').value;
  const totalPersons = parseInt(document.getElementById('total-persons').value);
  const advance = parseFloat(document.getElementById('advance').value);
  const acChecked = document.getElementById('ac').checked;
  const lockerChecked = document.getElementById('locker').checked;

  const roomRates = {
    delux: 100,
    suite: 150,
    executive: 450
  };

  const amenitiesRates = {
    ac: 20,
    locker: 10
  };

  const extraPersonRate = 1000;
  const includedPersons = 1; // assuming the room rate includes one person

  // Calculate total days
  const totalDays = (checkOut - checkIn) / (1000 * 60 * 60 * 24);
  document.getElementById('total-days').value = totalDays;

  // Calculate room cost
  const roomCost = roomRates[roomType] * totalDays;

  // Calculate amenities cost
  let amenitiesCost = 0;
  if (acChecked) amenitiesCost += amenitiesRates.ac * totalDays;
  if (lockerChecked) amenitiesCost += amenitiesRates.locker * totalDays;

  // Calculate extra person cost
  const extraPersons = totalPersons > includedPersons ? totalPersons - includedPersons : 0;
  const extraPersonsCost = extraPersons * extraPersonRate * totalDays;

  // Calculate total cost
  const totalCost = roomCost + amenitiesCost + extraPersonsCost;
  document.getElementById('total-cost').value = totalCost;

  // Calculate balance
  const balance = totalCost - advance;
  document.getElementById('balance').value = balance;
}


const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// service container
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});