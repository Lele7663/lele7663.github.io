// Funktion zum Umschalten des Modus und Speichern des Status
function toggleTheme() {
    document.body.classList.toggle("light-mode");

    // Speichert den aktuellen Modus in localStorage
    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        themeToggleBtn.innerHTML = `<span class="icon">🌞</span> Toggle Dark Mode`;
    } else {
        localStorage.setItem("theme", "dark");
        themeToggleBtn.innerHTML = `<span class="icon">🌙</span> Toggle Light Mode`;
    }
}

// Dark-Mode beim Laden der Seite wiederherstellen
const themeToggleBtn = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeToggleBtn.innerHTML = `<span class="icon">🌞</span> Toggle Dark Mode`;
} else {
    themeToggleBtn.innerHTML = `<span class="icon">🌙</span> Toggle Light Mode`;
}

// Event Listener für den Button
themeToggleBtn.addEventListener("click", toggleTheme);
