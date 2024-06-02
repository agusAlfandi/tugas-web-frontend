const AddTodo = () => {
  return (
    <div className="flex-1 flex flex-col items-center w-2/4 h-full">
      <div className="flex pt-5">
        <p className="font-bold text-lg">Done : 0</p>
      </div>
      <form className="flex-1 flex flex-col justify-center w-full px-7 gap-5">
        <label>Add Todo</label>
        <input
          type="text"
          className="flex rounded-md border border-slate-400 p-2 w-full"
        />
        <div>
          <button className="btn btn-info">ADD TASK</button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
