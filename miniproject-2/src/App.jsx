// defines the root App component of a React application

import "./App.css";
import React from "react";
import Users from "./components/Users";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // functional component that represents the root of the application
  const usersUrl = "https://jsonplaceholder.typicode.com/users";
  // defines constant variable with URL value, used to fetch user data from an external source

  return (
    <div className="App componentBox">
      <Users usersUrl={usersUrl} />
    </div>
    // Users component rendered, usersUrl variable passed as a prop
  );
}

export default App;
