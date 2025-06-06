document.addEventListener("DOMContentLoaded", function () {
    const textOptions = ["flynn", "picklerascal", "pixelamp", "qu1ks5vr", "flynn1e", "hazal"];
  
    const titleElement = document.querySelector("h1.cycle");
  
    if (titleElement) {
      titleElement.addEventListener("click", () => {
        const newText = textOptions[Math.floor(Math.random() * textOptions.length)];
        titleElement.textContent = newText;
      });
    }
  });
  