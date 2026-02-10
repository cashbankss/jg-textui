(function () {
  const textUI = document.querySelector(".text-ui");

  window.addEventListener("message", (evt) => {
    const { data } = evt;

    if (!data || !data.type) return;

    if (data.type === "show" && data.text) {
      const str = data.text.replaceAll(/\[(.*?)\]/g, "<kbd>$1</kbd>");
      textUI.innerHTML = str;

      if (data.color && /^#[0-9A-Fa-f]{6}$/.test(data.color)) {
        textUI.style.setProperty("--border-color", data.color);
        textUI.style.setProperty("--text-color", data.color);
        textUI.style.setProperty("--kbd-border-color", data.color);
      } else {
        textUI.style.setProperty("--border-color", "#ff0000");
        textUI.style.setProperty("--text-color", "#ff0000");
        textUI.style.setProperty("--kbd-border-color", "#ff0000");
      }

      textUI.classList.add("active");
    } else if (data.type === "hide") {
      textUI.classList.remove("active");
      textUI.innerHTML = "";
      textUI.style.setProperty("--border-color", "#ff0000");
      textUI.style.setProperty("--text-color", "#ff0000");
      textUI.style.setProperty("--kbd-border-color", "#ff0000");
    }
  });
})();


