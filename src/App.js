import React from "react";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

const App = () => (
  <div style={{ maxWidth: 500, margin: "40px auto" }}>
    <h1>ToDo App</h1>
    <AddTask />
    <ListTask />
  </div>
);

export default App;