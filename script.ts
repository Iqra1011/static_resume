document.addEventListener("DOMContentLoaded", () => {
    const toggleSkillsButton = document.getElementById("toggle-skills") as HTMLButtonElement;
    const skillsSection = document.getElementById("skills") as HTMLElement;

    // Initially hide the skills section
    skillsSection.classList.add("hidden");

    toggleSkillsButton.addEventListener("click", () => {
        skillsSection.classList.toggle("hidden");
        
        // Change button text based on the visibility of the skills section
        if (skillsSection.classList.contains("hidden")) {
            toggleSkillsButton.innerText = "Show Skills";
        } else {
            toggleSkillsButton.innerText = "Hide Skills";
        }
    });
});
