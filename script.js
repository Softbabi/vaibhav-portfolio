// ================= TYPING EFFECT =================
const text = "Network Engineer | CCNA | CCNP | Network Security | Python Automation";
let index = 0;

function typingEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typingEffect, 80);
    }
}
typingEffect();


// ================= SCROLL ANIMATION =================
window.addEventListener("scroll", () => {
    document.querySelectorAll("section").forEach(sec => {
        let scrollTop = window.scrollY;
        let sectionTop = sec.offsetTop - 300;

        if (scrollTop > sectionTop) {
            sec.classList.add("show");
        }
    });
});


// ================= SKILL PROGRESS BAR =================
window.onload = function () {
    document.getElementById("ccna").style.width = "90%";
    document.getElementById("ccnp").style.width = "75%";
    document.getElementById("security").style.width = "70%";
    document.getElementById("python").style.width = "60%";
};


// ================= MOBILE NAVBAR MENU =================
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
}


// ================= RESUME DOWNLOAD BUTTON =================
function downloadResume() {
    window.open("resume.pdf", "_blank");
}


// ================= DARK / LIGHT MODE =================
function toggleMode() {
    document.body.classList.toggle("light-mode");
    alert("Theme Changed!");
}
