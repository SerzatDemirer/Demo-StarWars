const searchButton = document.getElementById("search-btn");

searchButton.addEventListener("click", fetchHandler);

function fetchHandler() {
  displayLoading();
  fetch("https://swapi.dev/api/planets/1/")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

console.log(fetchHandler);
var loading = document.getElementById("loading");

function displayLoading() {
  loading.classList.add("display");
  setTimeout(() => {
    loading.classList.remove("display");
  }, 4000);
}
