import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../redux/todoSlice";
import Task from "./Task";

const ListTask = () => {
  const dispatch = useDispatch();
  const { tasks, filter } = useSelector((state) => state.todo);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "done") return task.isDone;
    if (filter === "notDone") return !task.isDone;
    return true;
  });

  return (
    <div>
      <div>
        <button disabled={filter === "all"} onClick={() => dispatch(setFilter("all"))}>
          All
        </button>
        <button disabled={filter === "done"} onClick={() => dispatch(setFilter("done"))}>
          Done
        </button>
        <button disabled={filter === "notDone"} onClick={() => dispatch(setFilter("notDone"))}>
          Not done
        </button>
      </div>

      <ul>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default ListTask;