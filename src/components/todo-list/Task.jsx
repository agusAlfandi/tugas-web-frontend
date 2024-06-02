import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const Task = (props) => {
  return (
    <div className="flex-1 flex flex-row justify-between items-center w-11/12">
      <div>
        <FontAwesomeIcon icon={faSquare} size="1x" color="green" />
      </div>
      <div className="flex justify-start w-10/12">
        <p>{props.title}</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faDeleteLeft} size="1x" color="red" />
      </div>
    </div>
  );
};

Task.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Task;
