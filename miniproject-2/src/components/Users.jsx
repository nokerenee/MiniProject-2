// Users component that manages data fetching, user state, and rendering a user directory.

import React, { useState } from "react";                   // react hook managing state within functional components
import { useData } from "./Hooks/useData";                 // custom hook for handling data fetching
import UserInterface from "./UserInterface";               // component for rendering the user interface

function Users({ usersUrl }) {
  // functional component accepts a single prop (usersUrl) from which user data will be fetched

  const { data } = useData(usersUrl);
  // custom hook used to fetch user data; 'data' variable stores the fetched user data

  // Two pieces of state are initialized using the useState hook:
  const [searchValue, setSearchValue] = useState("");          // used for managing the user's search input
  const [selectedUser, setSelectedUser] = useState(null);      // used to keep track of the user selected from the user directory

  const allUsersOption = {
    // defines an allUsersOption object representing an option to show all users
    value: "all",
    label: "All Users",
    name: "All Users",
    username: "all",
    email: "all",
    address: "all",
    phone: "all",
    website: "all",
    company: "all",
  };

  const userOptions = [
    // array combines "all users" option and user option data fetched from the server
    allUsersOption,
    ...data.map((dataObj) => ({
      value: dataObj.id,
      label: dataObj.name,
      username: dataObj.username,
      email: dataObj.email,
      address: dataObj.address.street,
      phone: dataObj.phone,
      website: dataObj.website,
      company: dataObj.company.name,
    })),
  ];

  // function used to filter user options based on the user's search input. Returns true if options match search criteria and false for those that don't
  const customFilterOption = (option, rawInput) => {
    const searchString = rawInput.toLowerCase();

    if (option.data.value === "all") {
      return true;          // Always include "All Users" option
    }

    return (
      (option.data.label &&
        option.data.label.toLowerCase().includes(searchString)) ||
      (option.data.username &&
        option.data.username.toLowerCase().includes(searchString)) ||
      (option.data.email &&
        option.data.email.toLowerCase().includes(searchString)) ||
      (option.data.address &&
        option.data.address.toLowerCase().includes(searchString)) ||
      (option.data.phone &&
        option.data.phone.toLowerCase().includes(searchString)) ||
      (option.data.website &&
        option.data.website.toLowerCase().includes(searchString)) ||
      (option.data.company &&
        option.data.company.toLowerCase().includes(searchString))
    );
  };

  // Event handlers:
  const handleInputChange = (value) => {
    setSearchValue(value);
    // updates searchValue state when the search input changes
  };

  const handleInputFocus = () => {
    setSearchValue("");
    // clears search input when it receives focus
  };

  const handleUserChange = (selectedOption) => {
    setSelectedUser(selectedOption);
    setSearchValue("");
    // sets selected user in the state while also clearing the search input
  };

  return (
    <div className="Users">
      <h1
        className="bold-label"
        style={{ color: "indigo", textAlign: "center" }}
      >
        User Directory
      </h1>
      <center>
        {/* Used for rendering, receives various props */}
        <UserInterface
          userOptions={userOptions}
          searchValue={searchValue}
          customFilterOption={customFilterOption}
          handleInputChange={handleInputChange}
          handleInputFocus={handleInputFocus}
          handleUserChange={handleUserChange}
          selectedUser={selectedUser}
        />
      </center>
    </div>
  );
}

export default Users;
