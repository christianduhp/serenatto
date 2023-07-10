## Serenatto Café & Bistro

This is the README file for the Serenatto Café & Bistro website. It provides an overview of the website structure and functionality.

[Introduction](#introduction) |  [Features](#features) |  [File Structure](#file-structure)  |  [Usage](#usage) | [Dependencies](#dependencies)

### Introduction
Serenatto Café & Bistro is a website that showcases a café and bistro establishment. It provides information about their services, products, and contact details. The website is designed to be visually appealing and user-friendly, allowing visitors to explore the café's offerings and get in touch with them easily.

### Features
- **Navigation**: The website has a responsive navigation menu that allows users to navigate between different sections of the website.
- **Services Section**: The services section highlights the café's offerings, including café and bistro, buffet, and delivery services.
- **Product Showcase**: The website dynamically generates product cards using JavaScript, showcasing the café's various coffee products.
- **Contact Form**: The contact form allows users to submit their contact information and preferences.
- **Dark Mode**: The website includes a dark mode toggle switch, allowing users to switch between light and dark themes.

### File Structure
The project's file structure is organized as follows:

```
├── assets/              # Directory for storing images and logos
├── json/                # Directory for storing JSON data
├── app/                 # Directory for JavaScript modules
│   ├── showProducts.js  # JavaScript module for displaying products
│   ├── productModal.js  # JavaScript module for modal functionality
│   └── mode.js          # JavaScript module for dark mode functionality
├── index.html           # Main HTML file
├── styles.css           # Main CSS file
└── README.md            # README file
```

### Usage
To use this project, follow these steps:

1. Clone the repository or download the source code.
2. Open the `index.html` file in a web browser.

### Dependencies
The project has the following dependencies:

- [Bootstrap](https://getbootstrap.com/) (v5.3.0-alpha2) - CSS and JavaScript framework for responsive design and UI components.

The Bootstrap library is loaded from the following external source:

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N"
  crossorigin="anonymous"></script>
```

Make sure you have an internet connection to load this dependency.

![serenattoDarkMode](https://github.com/christianduhp/serenatto/assets/85292359/c72c7fd2-25ad-4175-95c6-977e9ae9c6d3#vitrinedev)
![serenattoLightMode](https://github.com/christianduhp/serenatto/assets/85292359/c5988281-8a24-4c35-8c08-f473b8bb2671)
![serenattoTabletMobile](https://github.com/christianduhp/serenatto/assets/85292359/11e9150a-cc61-4207-bbe2-2c4757bc7b19)


