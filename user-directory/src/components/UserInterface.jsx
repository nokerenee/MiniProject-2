// component to handle rendering the user interface of user directory

import React from "react";
import Select from "react-select";     // used to render a dropdown select input

function UserInterface({
  // functional component that accepts several props:
  userOptions,            // array of user options to be displayed in the dropdown
  searchValue,            // the current search input value
  customFilterOption,     // function to filter user options based on search criteria
  handleInputChange,      // function to handle changes in the search input
  handleInputFocus,       // function to handle focus on the search input
  handleUserChange,       // function to handle user selection
  selectedUser,           // the user selected from the dropdown
}) {

    const optionswithoutAll = userOptions.filet
  return (
    <div className="UserInterface">
      <Select // component used to render the dropdown. It receives various props to configure its behavior
        options={userOptions}                      // list of options to display in the dropdown
        isSearchable={true}                        // enables the search functionality
        placeholder="Search for a user..."         // text displayed when no user is selected
        getOptionLabel={(option) => option.label}  // functions used to define how each option is displayed and identified
        getOptionValue={(option) => option.value}
        filterOption={customFilterOption}          // function for custom filtering
        inputValue={searchValue}                   // represents the current search input value
        onInputChange={handleInputChange}          // event handlers for input changes and focus
        onFocus={handleInputFocus}
        onChange={handleUserChange} 
        formatOptionLabel={(option) =>             // customizes the rendering of each option in dropdown (user's name and email)
          option.value === "all" ? (
            <div>{option.label}</div>
          ) : (
            <div>
              <div>{option.label}</div>
              <div style={{ fontSize: 14, color: "gray" }}>{option.email}</div>
            </div>
          )
        }
      /> 
      {selectedUser && selectedUser.value === "all" ? ( // Conditional Rendering:
        // if "All Users" selected, loops through all users and displays their information
        <div className="user-info">
          <h2 style={{ color: "indigo", textAlign: "center" }}>
            Selected User:
          </h2>
          {userOptions
            .filter((option) => option.value !== "all")
            .map((user) => (
              <div key={user.value} className="user-border">
                <p>
                  <span className="bold-label">Name:</span> {user.label}
                </p>
                <p>
                  <span className="bold-label">Username:</span> {user.username}
                </p>
                <p>
                  <span className="bold-label">Email:</span> {user.email}
                </p>
                <p>
                  <span className="bold-label">Address:</span> {user.address}
                </p>
                <p>
                  <span className="bold-label">Phone:</span> {user.phone}
                </p>
                <p>
                  <span className="bold-label">Website:</span> {user.website}
                </p>
                <p>
                  <span className="bold-label">Company:</span> {user.company}
                </p>
              </div>
            ))}
        </div>
      ) : (
        selectedUser && (
            // if specific user slected, displays the information of the user
          <div className="user-info">
            <h2 style={{ color: "indigo", textAlign: "center" }}>
              Selected User:
            </h2>
            <div className="user-border">
              <p>
                <span className="bold-label">Name:</span> {selectedUser.label}
              </p>
              <p>
                <span className="bold-label">Username:</span>{" "}
                {selectedUser.username}
              </p>
              <p>
                <span className="bold-label">Email:</span> {selectedUser.email}
              </p>
              <p>
                <span className="bold-label">Address:</span>{" "}
                {selectedUser.address}
              </p>
              <p>
                <span className="bold-label">Phone:</span> {selectedUser.phone}
              </p>
              <p>
                <span className="bold-label">Website:</span>{" "}
                {selectedUser.website}
              </p>
              <p>
                <span className="bold-label">Company:</span>{" "}
                {selectedUser.company}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default UserInterface;
