function makeGlow(element) {
  const content = element.textContent;
  let html = "";

  for (let char of content) {
    if (char === " ") {
      html += " ";
    } else {
      html += `<span>${char}</span>`;
    }
  }

  element.innerHTML = html;
}

document.querySelectorAll("[data-glow]").forEach(makeGlow);
