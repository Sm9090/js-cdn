console.log("Hello from JavaScript CDN");

async function one() {
  try {
    const fetching = await fetch("https://dummyjson.com/products");
    const data = await fetching.json();
    console.log(data, "fetching");
    
    // Call the render function to pass the fetched data
    if (window.renderData) {
      window.renderData(data.products);  // Assuming 'products' is the array you want to render
    } else {
      console.error("Render function not found");
    }
    console.log(window)
  } catch (error) {
    console.log(error);
  }
}
one()
window.fetchDataAndRender = one;
