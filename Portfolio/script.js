function hideAllSections() {
    document.querySelectorAll("section").forEach(sec => {
        sec.style.display = "none";
    });
}

document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", function () {
        document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
        this.classList.add("active");

        let target = this.getAttribute("data-target");

        hideAllSections();
        document.getElementById(target).style.display = "block";

        document.title = "Shivansh Srivastav - " + target.charAt(0).toUpperCase() + target.slice(1);
    });
});

setTimeout(() => {
    console.log("Thanks for visiting my portfolio!");
}, 2000);



