const loading = document.getElementById("loading");

function displayLoading() {
  document.getElementById("loading").style.display = "block";
}

function hideLoading() {
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
  }, 3000);
}

displayLoading();
