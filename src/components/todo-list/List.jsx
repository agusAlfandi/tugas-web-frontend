import Task from "./Task";

const List = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center w-2/4 mb-5">
      <div className="flex mt-10">
        <p className="font-bold text-lg">Chores ToDo List</p>
      </div>
      <div className="flex flex-col items-center h-96 w-full ">
        <Task title="Create Guest Exoirince mobile check-in" />
        <Task title="Document Curent CI/CD process" />
        <Task title="Perform Code Review for final Pillow-Talk release" />
        <Task title="Implement new Color Palette from Design Team" />
        <Task title="Fix Image uploading process for gues check-in" />
        <Task title="Provide on-boarding documentation" />
      </div>
    </div>
  );
};

export default List;
