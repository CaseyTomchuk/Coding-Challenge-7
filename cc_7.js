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

// Task 4: Parameters and Arguments

const calculateShippingCost = (weight, location, expedited = false) => {
   let bonusCost = 0; // Initializing the additional cost per pound
   let total = 0; // Initializing a total variable that I will use to add costs on to
  
   // Created an if function to set different parameters based on the country. It starts by adding the base fees ($5 or $10) to the total,
   // it then multiplies the weight by the cost per pound. At the end of the function I add the total to the bonus cost calculated.

    if (location === "USA") {
        total += 5 // This is the base cost for the shipping fees
        bonusCost = 0.5 * weight;
    }
    else if (location === "Canada") {
        total += 10 // This is the base cost for the shipping fees
        bonusCost = 0.7 * weight;
    }

    if (expedited === true) {
        total += 10;
    }

    total += bonusCost
    return(total);
}
console.log(`Shipping Cost: $${calculateShippingCost(10, "USA", true).toFixed(2)}`); // Expected output: "Shipping Cost: $20.00"
console.log(`Shipping Cost: $${calculateShippingCost(5, "Canada", false).toFixed(2)}`); // Expected output: "Shipping Cost: $13.50"

// Task 5: Returning Values

const calculateLoanInterest = (principal, rate, years) => principal * rate * years; // Simple arrow function
console.log(`Total Interest: $${calculateLoanInterest(1000, 0.05, 3).toFixed(2)}`); // Expected output: "Total Interest: $150.00"
console.log(`Total Interest: $${calculateLoanInterest(5000, 0.07, 5).toFixed(2)}`); // Expected output: "Total Interest: $1750.00"