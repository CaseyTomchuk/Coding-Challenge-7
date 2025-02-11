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

// Task 3: Arrow Function

const calculateLoyaltyDiscount = (amount, years) => {
    let discount = 0 // Initializing the discount variable

    // Creating an if statement to determine what the discount should be based on the number of years 

    if (years >= 5) { 
        discount = 0.15;
    }
    else if (years >= 3) {
        discount = 0.10;
    }   
    else {
        discount = 0.05;
    }

    const newPrice = amount * (1 - discount); // Creating a new variable that applies the relevant discount to the entered amount
    return (newPrice) // That output that is returned when the function is called 
};

console.log(`Discounted Price: $${calculateLoyaltyDiscount(100, 6).toFixed(2)}`) //  Expected output: "Discounted Price: $85.00"
console.log(`Discounted Price: $${calculateLoyaltyDiscount(200, 2).toFixed(2)}`); // Expected output: "Discounted Price: $190.00"