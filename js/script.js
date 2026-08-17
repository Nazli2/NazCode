javascript
// =========================
// MOBILE MENU
// =========================

const menuButton = document.getElementById("menuButton");

const navLinks = document.querySelector(".nav-links");


menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("mobile-active");

});


// =========================
// NAVIGATION
// =========================

const links = document.querySelectorAll(".nav-links a");


links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("mobile-active");

    });

});


// =========================
// SCROLL EFFECT
// =========================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(7, 9, 15, 0.95)";

    } else {

        header.style.background =
            "rgba(7, 9, 15, 0.80)";

    }

});


// =========================
// SIMPLE REVEAL ANIMATION
// =========================

const cards =
    document.querySelectorAll(
        ".service-card, .stat-card"
    );


const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(25px)";

    card.style.transition =
        "all 0.6s ease";

    observer.observe(card);

});

