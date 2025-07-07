
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});
function changeImage(index) {
    const heroImg = document.querySelector('#hero img');
    if (!heroImg) {
        console.log("Image not found.");
        return;
    }
    if (index === 1) {
        heroImg.src = "Images/HeroSection_1.jpg";
        title.textContent = "Model 3";
        subtitle.textContent = "0% APR Ending June 30";
    } else if (index === 2) {
        heroImg.src = "Images/HeroSection_2.jpg";
        title.textContent = "Model Y";
        subtitle.textContent = "Eligible for Tax Credit";
    }
}
