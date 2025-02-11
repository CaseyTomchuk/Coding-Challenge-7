// Task 1: Function Declaration

const calculateInvoice = (subtotal, taxRate, discount) => subtotal + (subtotal * taxRate) - discount; // Written in an arrow function for simplicity
console.log(`Total Invoice: $${calculateInvoice(100, 0.08, 5).toFixed(2)}`); // Expected output: "Total Invoice: $103.00"
console.log(`Total Invoice: $${calculateInvoice(500, 0.1, 20).toFixed(2)}`); // Expected output: "Total Invoice: $530.00"

// Task 2: Function Expression

const calculateHourlyWage = (salary, hoursPerWeek) => salary / (hoursPerWeek * 52); // This can once again be written with a simple arrow function
console.log(`Hourly Wage: $${calculateHourlyWage(52000, 40).toFixed(2)}`); // Expected output: "Hourly Wage: $25.00"
console.log(`Hourly Wage: $${calculateHourlyWage(75000, 35).toFixed(2)}`); // Expected output: "Hourly Wage: $41.21"

// Added .toFixed(2) to both Task 1 and Task 2 to prevent match the expected output better and to prevent 41.41 from looking like 41.207892395
// This just limits (or extends) the output to 2 decimal points