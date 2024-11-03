document.addEventListener("DOMContentLoaded", function () {
    var toggleSkillsButton = document.getElementById("toggle-skills");
    var skillsSection = document.getElementById("skills");
    // Initially hide the skills section
    skillsSection.classList.add("hidden");
    toggleSkillsButton.addEventListener("click", function () {
        skillsSection.classList.toggle("hidden");
        // Change button text based on the visibility of the skills section
        if (skillsSection.classList.contains("hidden")) {
            toggleSkillsButton.innerText = "Show Skills";
        }
        else {
            toggleSkillsButton.innerText = "Hide Skills";
        }
    });
});
