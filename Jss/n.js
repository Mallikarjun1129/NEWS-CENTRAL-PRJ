document.addEventListener("DOMContentLoaded", function () {

    const navItems = document.querySelectorAll(".nav-list li");

    navItems.forEach(item => {
        item.addEventListener("click", function () {

            const target = this.getAttribute("data-target");

            if (target === "top") {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            } else {
                const section = document.getElementById(target);

                if (section) {
                    section.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }

        });
    });

});

document.addEventListener("DOMContentLoaded", function () {

    // Select all news cards
    const cards = document.querySelectorAll(".news-card");

    cards.forEach(card => {
        card.addEventListener("click", function () {
            const url = this.getAttribute("data-url");

            if (url) {
                window.open(url, "_blank"); // Opens in new tab
            }
        });
    });

});