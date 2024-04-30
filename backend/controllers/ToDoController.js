const ToDoModel = require("../models/ToDoModel");

// Controller function to get all To-Do items
module.exports.getToDo = async (req, res) => {
	try {
		const toDo = await ToDoModel.find(); // Retrieve all To-Do items from the database

		res.send(toDo); // Send retrieved To-Do items as response
	} catch (error) {
		console.error("Error fetching To-Do items:", error); // Handle any errors that occur during the process

		res.status(500).send("Internal Server Error"); // Send an error response
	}
};

// Controller function to save a new To-Do item
module.exports.saveToDo = async (req, res) => {
	try {
		const { text } = req.body; // Extract 'text' from the request body
		const newToDo = await ToDoModel.create({ text }); // Create a new To-Do item in the database with the provided text

		console.log("To-Do item added successfully:", newToDo); // Log success message and the created To-Do item

		res.send(newToDo); // Send the newly created To-Do item as response
	} catch (error) {
		console.error("Error saving To-Do item:", error); // Handle any errors that occur during the process
		res.status(500).send("Internal Server Error"); // Send an error response
	}
};

// Controller function to update a To-Do item
module.exports.updateToDo = async (req, res) => {
	try {
		const { _id, text } = req.body; // Extract '_id' and 'text' from the request body

		await ToDoModel.findByIdAndUpdate(_id, { text }); // Find the To-Do item by its ID and update its 'text' field=

		res.send("To-Do item updated successfully"); // Send success message as response
	} catch (error) {
		console.error("Error updating To-Do item:", error); // Handle any errors that occur during the process
		res.status(500).send("Internal Server Error"); // Send an error response
	}
};

// Controller function to delete a To-Do item
module.exports.deleteToDo = async (req, res) => {
	try {
		const { _id } = req.body; // Extract '_id' from the request body

		await ToDoModel.findByIdAndDelete(_id); // Find the To-Do item by its ID and delete it

		res.send("To-Do item deleted successfully"); // Send success message as response
	} catch (error) {
		console.error("Error deleting To-Do item:", error); // Handle any errors that occur during the process
		res.status(500).send("Internal Server Error"); // Send an error response
	}
};
