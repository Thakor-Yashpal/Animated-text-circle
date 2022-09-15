"use strict";

var text = document.querySelector(".text");
text.innerHTML = text.innerText.split("").map(function (_char, i) {
  return "<span style=\"transform:rotate(".concat(i * 10.3, "deg)\">").concat(_char, "</span>");
}).join("");
//# sourceMappingURL=outline.dev.js.map
