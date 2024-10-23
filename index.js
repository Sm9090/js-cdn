console.log("Hello from  javascript cdn ");

async function one() {
  const fetching = await fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .catch((error) => console.log(error));
  console.log(fetching, "fetching");
}
one()