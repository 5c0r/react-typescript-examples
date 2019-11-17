import React from "react";
import "./App.css";
import Todo from "./Todo";
import CSS from "csstype";

const appStyle: CSS.Properties = {
  backgroundColor: "#f5f5f5"
};

const App: React.FC = () => {
  return (
    <div style={appStyle}>
      <Todo />
    </div>
  );
};

export default App;
