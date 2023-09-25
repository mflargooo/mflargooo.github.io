function toPage(page) {
    window.location.href = page + ".html";
}

document.getElementById("home").addEventListener("click", function () { toPage("index") });
document.getElementById("projects").addEventListener("click", function () { toPage("projects") });
document.getElementById("resume").addEventListener("click", function () {window.location.href = "documents/resume.pdf"})