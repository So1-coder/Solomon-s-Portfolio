const backToTopButton = document.createElement("button");

backToTopButton.innerHTML = "↑";
backToTopButton.className = "back-to-top";

document.body.appendChild(backToTopButton);

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});

backToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});