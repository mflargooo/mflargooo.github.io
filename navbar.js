function toPage(page) {
    window.location.href = page + ".html";
}

aboutme = null

if (window.location.href.includes("index"))
    aboutme = document.getElementById("aboutme");

document.getElementById("home").addEventListener("click", function () { toPage("index") });
document.getElementById("projects").addEventListener("click", function () { toPage("projects") });
document.getElementById("photos").addEventListener("click", function () { toPage("photos") });
document.getElementById("resume").addEventListener("click", function () { window.open("documents/resume.pdf", "_blank") });
document.getElementById("about").addEventListener("click", function () {
    if (aboutme)
        aboutme.scrollIntoView({ behavior: "smooth" });
    else {
        window.location.href = "index.html#aboutme"
    }
});
