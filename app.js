function is5GEnabled() {
  return navigator.connection && navigator.connection.effectiveType === "5g";
}

document.addEventListener("DOMContentLoaded", function () {
  const is5G = is5GEnabled();
  const outputElement = document.getElementById("output");

  if (is5G) {
    outputElement.innerHTML = "Your device has a 5G connection.";
  } else {
    outputElement.innerHTML = "Your device does not have a 5G connection.";
  }
});
