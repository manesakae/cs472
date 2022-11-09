"use strict";

const productForm = document.getElementById("product");
productForm.addEventListener("submit", productSubmit, false);

function productSubmit(event) {
    alert(`
    Product Number: ${document.getElementById("productNumber").value}
    Quantity in stock: ${document.getElementById("quantity").value}
    Name: ${document.getElementById("name").value}
    Supplier: ${document.getElementById("supplier").value}
    Unit Price: ${document.getElementById("unitPrice").value}
    Date supplied: ${document.getElementById("date").value}
    `);
    event.preventDefault();
}
