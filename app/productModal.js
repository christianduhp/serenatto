// Import fetchProducts function from showProducts.js
import fetchProducts from "./showProducts.js";

// Get the products section element
const productsSection = document.querySelector(".products__section");

// Add click event listener to the products section
productsSection.addEventListener('click', event => {
  // Find the closest ancestor element with the class 'modal-button'
  const button = event.target.closest('.modal-button');
  if (button) {
    // Extract the productId from the button's id attribute
    const productId = button.id.slice(6);
    // Call the updateModalContent function with the productId
    updateModalContent(productId);
  }
});

// Function to update the content of the modal
function updateModalContent(productId) {
  const modal = document.getElementById("modal");
  const titleElement = modal.querySelector('.modal-title');
  const imageElement = modal.querySelector('img');
  const descriptionElement = modal.querySelector('.modal-body > p');

  // Fetch the products using fetchProducts function
  fetchProducts()
    .then(products => {
      const product = products[productId - 1];
      const { title, img, alt, description } = product;

      // Update the modal content with the product data
      titleElement.textContent = title;
      imageElement.src = img;
      imageElement.alt = alt;
      descriptionElement.textContent = description;
    });
}
