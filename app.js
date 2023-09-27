function is5GEnabled() {
  if (navigator.connection) {
    const connectionType = navigator.connection.effectiveType;
    return connectionType === "5g" || connectionType === "5g+";
  }
  return false;
}

document.addEventListener("DOMContentLoaded", function () {
  const is5G = is5GEnabled();
  const outputElement = document.getElementById("output");

  if (outputElement) {
    if (is5G) {
      outputElement.innerHTML = "Your device has a 5G connection.";
    } else {
      outputElement.innerHTML = "Your device does not have a 5G connection.";
    }
  }
});
