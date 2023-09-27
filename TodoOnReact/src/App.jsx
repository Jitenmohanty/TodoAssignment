import { useState, useEffect } from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import ClearAll from "./components/ClearAll";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    // Update the Todo Using The InputField...Or You can Use edit using the same Input field....

    setTodos((prev) =>
      prev.map((editTodo) => (editTodo.id === id ? todo : editTodo))
    );
  };

  const deleteTodo = (id) => {
      //Filter Out deleted Item
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prev) => {
      const updatedTodos = prev.map((checkedTodo) =>
        checkedTodo.id === id
          ? { ...checkedTodo, completed: !checkedTodo.completed }
          : checkedTodo
      );

      // Separate completed and incomplete todos
      const completedTodos = updatedTodos.filter((todo) => todo.completed);
      const incompleteTodos = updatedTodos.filter((todo) => !todo.completed);

      // Combine incomplete and completed todos with completed ones at the end
      return [...incompleteTodos, ...completedTodos];
    });
  };

  const clearAllTodo = () => {
    localStorage.clear();
    setTodos([]); // Clear todos from state
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleTodo,
        clearAllTodo,
      }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <ClearAll clearAllTodo={clearAllTodo} />
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
