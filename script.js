// Get all elements with class "tile"
const tiles = document.querySelectorAll(".tile");

// Iterate over each tile
tiles.forEach((tile) => {
  // Add click event listener
  tile.addEventListener("click", () => {
    // Get the URL from the "data-url" attribute
    const url = tile.getAttribute("data-url");
    // Redirect to the URL
    window.location.href = url;
  });
});
