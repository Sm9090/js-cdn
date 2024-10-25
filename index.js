console.log("Hello from JavaScript CDN");

function fetchDataAndRender(items) {
  console.log(items)
  const container = document.querySelector(".todo-container"); 

  if (container) {
    container.innerHTML = "";

    items.forEach(item => {
      const itemElement = document.createElement("div");
      itemElement.className = "todo-item";
      itemElement.textContent = item.Title; 
      container.appendChild(itemElement);
    });
  } else {
    console.error("Container not found for rendering items.");
  }
}

// Expose the function to the global scope
window.fetchDataAndRender = fetchDataAndRender;
