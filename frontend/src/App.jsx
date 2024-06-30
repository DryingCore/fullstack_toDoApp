import { useEffect, useState } from "react";
import ToDoComponent from "./components/ToDoComponent";
import { addToDo, deleteToDo, getAllToDo, updateToDo } from "./utils/HandlerApi";
import { Box, Container } from "@mui/material";

function App() {
	const [toDo, setToDo] = useState([]);
	const [text, setText] = useState("");
	const [isUpdating, setIsUpdating] = useState(false);
	const [toDoId, seToDoId] = useState("");

	useEffect(() => {
		getAllToDo(setToDo);
	}, []);

	const updateMode = (_id, text) => {
		setIsUpdating(true);
		setText(text);
		seToDoId(_id);
	};

	return (
		<Box>
			<Container className="container">
				<h1>To Do App</h1>

				<div className="top">
					<input type="text" name="" id="" placeholder="Add Task..." value={text} onChange={ev => setText(ev.target.value)} />
					<div className="add" onClick={isUpdating ? () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating) : () => addToDo(text, setText, setToDo)}>
						{isUpdating ? "Update" : "Add"}
					</div>
				</div>

				<div className="list">
					{toDo.map(item => (
						<ToDoComponent key={item._id} text={item.text} updateMode={() => updateMode(item._id, item.text)} deleteToDo={() => deleteToDo(item._id, setToDo)} />
					))}
				</div>
			</Container>
		</Box>
	);
}

export default App;
