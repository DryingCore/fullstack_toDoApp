import axios from "axios";

const baseUrl = "https://fullstack-todoapp-8xv5.onrender.com";

const getAllToDo = setToDo => {
	axios.get(baseUrl).then(({ data }) => {
		console.log("Data --->", data);
		setToDo(data);
	});
};

const addToDo = (text, setText, setToDo) => {
	axios
		.post(`${baseUrl}/save`, { text })
		.then(data => {
			console.log(data);
			setText("");
			getAllToDo(setToDo);
		})
		.catch(err => {
			console.log(err);
		});
};

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
	axios
		.post(`${baseUrl}/update`, { _id: toDoId, text })
		.then(() => {
			setText("");
			setIsUpdating(false);
			getAllToDo(setToDo);
		})
		.catch(err => console.log(err));
};

const deleteToDo = (_id, setToDo) => {
	axios
		.post(`${baseUrl}/delete`, { _id })
		.then(() => {
			getAllToDo(setToDo);
		})
		.catch(err => console.log(err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
