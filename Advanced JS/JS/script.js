async function fetchData() {
  try {
    const response = await fetch(
      "https://fake-json-api.mock.beeceptor.com/users "
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

fetchData()
  .then((result) => console.log("Data fetched successfully:", result))
  .catch((error) => console.error("Failed to fetch data:", error));

window.addEventListener("keydown", function (e) {
  console.log(e); // Yeh wahi object hai jo browser ne banaya
});
