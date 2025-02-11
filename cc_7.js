// Task 1: Function Declaration
const calculateInvoice = (subtotal, taxRate, discount) => subtotal + (subtotal * taxRate) - discount; // Written in an arrow function for simplicity
console.log(`Total Invoice: $${calculateInvoice(100, 0.08, 5)}`); // Expected output: "Total Invoice: $103.00"
console.log(`Total Invoice: $${calculateInvoice(500, 0.1, 20)}`); // Expected output: "Total Invoice: $530.00"