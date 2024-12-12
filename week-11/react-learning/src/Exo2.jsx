import { useEffect, useState } from "react";
import "./index.css";
import { closestCorners, DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newtodo, setNewTodo] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`http://localhost:3000/todos`);
      const data = await result.json();

      setTodos(data);
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("test");

    const result = await fetch(`http://localhost:3000/todos`, {
      method: "POST",
      body: JSON.stringify({ task: newtodo }),
    });

    const data = await result.json();

    setTodos((prev) => [...prev, data]);
    setNewTodo("");
  };

  const handleChange = (e) => {
    console.log(newtodo);

    setNewTodo(e.target.value);
  };

  const deleteTodo = (todo) => {
    setTodos((prevTodos) => prevTodos.filter((el) => el.id !== todo));
  };

  const updateTodos = (newtodo) => {
    setTodos((prevTodos) =>
      prevTodos.map(
        (todo) =>
          todo.id === newtodo.id
            ? { ...todo, task: newtodo.task } // Update the specific todo
            : todo // Keep others unchanged
      )
    );
  };

  const getTodoPos = (id) => todos.findIndex((todo) => todo.id === id);
  const handleDragEnd = (e) => {
    const { active, over } = e;

    if (active.id === over.id) {
      return;
    }
    setTodos((prev) => {
      const originalPos = getTodoPos(active.id);
      const newPos = getTodoPos(over.id);

      return arrayMove(prev, originalPos, newPos);
    });
  };

  return (
    <>
      <div className="max-w-96 m-auto">
        <h1 className="text-3xl font-bold underline text-center mb-3">
          Todo list
        </h1>
        <form onSubmit={handleSubmit} className="">
          <input
            className="mb-3"
            onChange={handleChange}
            value={newtodo}
            type="text"
          />
          <button>Add</button>
        </form>
        <DndContext
          collisionDetection={closestCorners}
          onDragEnd={handleDragEnd}
        >
          <div>
            <ul>
              <SortableContext
                items={todos}
                strategy={verticalListSortingStrategy}
              >
                {todos.map((el) => (
                  <li key={el.id}>
                    {
                      <Todo
                        data={el}
                        updateEdit={updateTodos}
                        deleteTodo={deleteTodo}
                      ></Todo>
                    }
                  </li>
                ))}
              </SortableContext>
            </ul>
          </div>
        </DndContext>
      </div>
    </>
  );
}

function Todo({ data, updateEdit, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(data.task);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: data.id });

  const handleEdit = () => {
    fetch(`http://localhost:3000/todos/${data.id}`, {
      method: "PUT",
      body: JSON.stringify({ task: task }),
    });

    updateEdit({ id: data.id, task: task });
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    fetch(`http://localhost:3000/todos/${data.id}`, {
      method: "DELETE",
    });

    deleteTodo(data.id);
  };

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      style={style}
      ref={setNodeRef} // Entire item is draggable
      {...attributes} // Accessibility attributes
      className="flex items-center justify-between"
    >
      <div className="flex items-center gap-2">
        {/* Drag handle */}
        <div
          {...listeners} // Attach listeners for drag interactions
          style={{ cursor: "grab" }}
          className="bg-slate-700 w-4 h-4"
        ></div>

        {/* Todo content */}
        {isEditing ? (
          <input
            value={task || ""}
            onChange={(e) => setTask(e.target.value)}
            type="text"
          />
        ) : (
          <p>{data.task}</p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex items-center">
        <button
          className="m-2"
          onClick={(e) => {
            e.preventDefault();
            if (isEditing) {
              handleEdit();
            }
            setIsEditing(!isEditing);
          }}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
