console.log("Hello from JavaScript CDN");

async function fetchDataFromCdnList(webUrl, listName) {
  console.log(webUrl ,"weburl" )
  console.log(listName ,"listName" )
  try {
    const response = await fetch(
      `${webUrl}/_api/web/lists/getbytitle('${listName}')/items`,
      {
        method: "GET",
        headers: {
          Accept: "application/json;odata=verbose",
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log("Data fetched from CdnList:", data.d.results);

    // Check if the callback function exists on the global window object
    if (typeof window.spfxRenderCallback === "function") {
      // Pass fetched data to the SPFx WebPart for rendering
      window.spfxRenderCallback(data.d.results);
    }
  } catch (error) {
    console.error("Error fetching data from CdnList:", error);
  }
}

// Make the function globally accessible
window.fetchDataFromCdnList = fetchDataFromCdnList;