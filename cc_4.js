//Step 2: Create an array of objects reprresenting 5 products
const products = [
    { name: "Laptop:", category: "electronics", price: 999.99, inventory: 5},
    { name: "Sweatshirt:", category: "apparel", price: 39.99, inventory: 10},
    { name: "Eggs:", category: "groceries", price: 9.99, inventory: 12},
    { name: "Soap:", category: "household", price: 4.99, inventory: 8},
    { name: "Blender:", category: "Home Appliances", price: 49.99, inventory: 15}
];
//Step 3: Write the code to apply the dynamic discount based on the category
for (const product of products) {
    switch (product.category) {
        case "electronics":
            product.price *= 0.80; // 20% discount
            break;
        case "apparel":
            product.price *= 0.85; // 15% discount
            break;
        case "groceries":
        case "household":
            product.price *= 0.90; // 10% discount
            break;
        default: // No discount for other categories
            break;
    }
product.price = +product.price.toFixed(2); // Format price to 2 decimal places 
}
//Step 4: Create a variable customerType and write an if...else if chain to apply an additional discount
function applyCustomerDiscount(total, customerType) {
    if (customerType === "student") {
        return +(total * 0.95).toFixed(2); // 5% discount for students
    }
    else if (customerType === "senior") {
        return +(total * 0.93).toFixed(2); // 7% discount for seniors
    }
    else 
    {
        return +total.toFixed(2); // No discount for other customer types
    }
    }
    //Step 5: Simulate a checkout process for 3 customers
    const customerTypes = ["regular", "student", "senior"];
    for (let i = 0; i < 3; i++) {
        let subtotal = 0;
        for (const product of products) {
          if (product.inventory > 0) {
            subtotal += product.price;
            product.inventory--; 
        }
    }
    const finalTotal = applyCustomerDiscount(subtotal, customerTypes[i]);
console.log(`Customer ${i + 1} (${customerTypes[i]}) - Total: $${finalTotal.toFixed(2)}`);
    }
    //Step 6: Log each key/value pair for a single product after the discounts are applied 
   console.log("\nDetails of one product after discounts:");
   const firstProduct = products[0];
   for (const key in firstProduct) {
       console.log(`${key}: ${firstProduct[key]}`);
   }
   //Step 7: Log all the product info using the Object.entries() and destructuring
    console.log("\nUpdated product inventory and information:");
    for (const product of products) {
        for (const [key, value] of Object.entries(product)) {
            console.log(`${key}: ${value}`);
        }
        console.log("--------------------");
    }   