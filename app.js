function is5GEnabled() {
  if (navigator.connection && navigator.connection.effectiveType) {
    return navigator.connection.effectiveType === "5g";
  } else {
    return "unsupported";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const is5G = is5GEnabled();
  const outputElement = document.getElementById("output");

  if (is5G === "unsupported") {
    outputElement.innerHTML =
      "Your browser does not support the required property.";
  } else if (is5G) {
    outputElement.innerHTML = "Your device has a 5G connection.";
  } else {
    outputElement.innerHTML = "Your device does not have a 5G connection.";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const is5G = is5GEnabled();
  const outputElement = document.getElementById("output");

  if (is5G) {
    outputElement.innerHTML = "Your device has a 5G connection.";
  } else {
    outputElement.innerHTML = "Your device does not have a 5G connection.";
  }
});
