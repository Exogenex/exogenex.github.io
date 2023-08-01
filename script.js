// Scroll to anchors smoothly
document.querySelectorAll('a[href^="#"]').forEach((e) => {
    e.addEventListener("click", function (event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      const headerHeight = document.querySelector("header").offsetHeight;
      const offset = target.offsetTop - headerHeight;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    });
  });
  
  // Get the current theme from localStorage
  const currentTheme = localStorage.getItem("theme");
  
  // Update colors based on the selected theme
  function updateColors(theme) {
    const root = document.querySelector(":root");
    if (theme === "dark") {
      root.style.setProperty("--primary-color", "#33ddff");
      root.style.setProperty("--secondary-color", "#66e5ff");
      root.style.setProperty("--tertiary-color", "#00aacc");
      root.style.setProperty("--background-primary", "#121f21");
      root.style.setProperty("--background-secondary", "#061313");
      root.style.setProperty("--accent-color", "#f4a261");
    } else {
      root.style.setProperty("--primary-color", "#00aacc");
      root.style.setProperty("--secondary-color", "#00bfe6");
      root.style.setProperty("--tertiary-color", "#0095b3");
      root.style.setProperty("--background-primary", "#faffff");
      root.style.setProperty("--background-secondary", "#cde2e4");
      root.style.setProperty("--accent-color", "#f4a261");
    }
  }
  
  // Set the initial theme based on local storage or user's preference
  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === "light") {
      document.getElementById("dark-mode-toggle").checked = false;
    } else if (currentTheme === "dark") {
      document.getElementById("dark-mode-toggle").checked = true;
    }
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.getElementById("dark-mode-toggle").checked = true;
  }
  
  // Listen for changes in the theme toggle and update the theme accordingly
  document.getElementById("dark-mode-toggle").addEventListener("change", function () {
    if (this.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      updateColors("dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      updateColors("light");
    }
  });
  
  // Set the selected theme if available in local storage
  const selectedTheme = localStorage.getItem("theme");
  if (selectedTheme) {
    document.documentElement.setAttribute("data-theme", selectedTheme);
    updateColors(selectedTheme);
  }
  