const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Save user preference for dark mode in local storage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
    } else {
        localStorage.setItem("dark-mode", "disabled");
    }
});

// Check if dark mode preference is saved in local storage
const darkModePreference = localStorage.getItem("dark-mode");
if (darkModePreference === "enabled") {
    body.classList.add("dark-mode");
}
