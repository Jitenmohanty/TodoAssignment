const ClearAll = ({ clearAllTodo }) => {
  return (
    <div className="float-right bg-red-500 text-white p-2 mt-4 mr-4 md:mr-96  rounded-md">
      <button onClick={clearAllTodo}>Clear All</button>
    </div>
  );
};

export default ClearAll;
