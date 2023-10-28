import "./App.css";
import React from "react";
import Users from "./components/Users";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function App() {
  const usersUrl = "https://jsonplaceholder.typicode.com/users";

  return (
    <div className="App">
          <Users usersUrl={usersUrl}/>
    </div>
  );
}

export default App;
