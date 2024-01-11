export default function themeSwitcher() {
  const main = document.querySelector("main");
  const rootCss = document.querySelector(":root");

  if (main.dataset.theme === "dark") {
    //atributo data-theme for dark muda pra light
    rootCss.style.setProperty("--bg-color", "#f1f5f9");
    rootCss.style.setProperty("--border-color", "#aaa");
    rootCss.style.setProperty("--font-color", "#212529");
    rootCss.style.setProperty("--primary-color", "#26834a");
    main.dataset.theme = "light";
  } else {
    //atributo data-theme for light muda pra dark
    rootCss.style.setProperty("--bg-color", "#212529");
    rootCss.style.setProperty("--border-color", "#666");
    rootCss.style.setProperty("--font-color", "#f1f5f9");
    rootCss.style.setProperty("--primary-color", "#4dff91");
    main.dataset.theme = "dark";
  }
}
