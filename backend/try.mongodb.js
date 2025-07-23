// Select the database to use.
use('cloudkitchen');

// Insert a few documents into the sales collection.
const fetched_data= db.getCollection('food_item')
// Print a message to the output window.
console.log(fetched_data.find({}).toArray())
