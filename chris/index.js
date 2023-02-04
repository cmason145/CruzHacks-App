const input = document.getElementById("file-input");

input.addEventListener("change", function(event) {
  const file = event.target.files[0];
  // store the file in a global variable for later use
  window.uploadedFile = file;
});

