// Export the fetchProducts function
export default function fetchProducts() {
  return fetch("./json/products.json")
    .then(response => response.json());
}

// Get the products section element
const productsSection = document.querySelector(".products__section");

// Fetch the products data and create cards dynamically
fetchProducts()
  .then(products => {
    // Iterate over each product
    products.forEach(product => {
      const { id, img, alt, title } = product;

      // Create a card element
      const cardElement = document.createElement("div");
      cardElement.classList.add("col-12", "col-md-6", "col-lg-4");

      // Set the innerHTML of the card element
      cardElement.innerHTML = `
        <div class="card border-0 mx-auto btn modal-button" style="width: 18rem;" data-bs-toggle="modal" data-bs-target="#modal" id="modal-${id}">
          <img src="${img}" class="card-img-top" alt="${alt}">
          <div class="card-body text-center">
            <h3 class="card-text fs-3">${title}</h3>
          </div>
        </div>
      `;

      // Append the card element to the products section container
      productsSection.appendChild(cardElement);
    });
  });
