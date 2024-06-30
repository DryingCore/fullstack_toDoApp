import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Box, Grid } from "@mui/material";

const ToDoComponent = ({ text, updateMode, deleteToDo }) => {
	return (
		<Box className="toDo">
			<Grid container>
				<div className="text">{text}</div>
				<div className="icons">
					<FontAwesomeIcon className="icon" icon={faPen} onClick={updateMode} />
					<FontAwesomeIcon className="icon" icon={faTrash} onClick={deleteToDo} />
				</div>
			</Grid>
		</Box>
	);
};

ToDoComponent.propTypes = {
	text: PropTypes.string.isRequired,
	updateMode: PropTypes.func.isRequired,
	deleteToDo: PropTypes.func.isRequired,
};

export default ToDoComponent;
