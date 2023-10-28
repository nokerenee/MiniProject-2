import React, { useState } from "react";
import { useData } from "./Hooks/useData";
import Select from "react-select";

function Users({ usersUrl }) {
  // Fetches user data
  const data = useData(usersUrl);
  const [searchValue, setSearchValue] = useState("");

  // Transform user data to options format expected by react-select
  const userOptions = data.map((dataObj) => ({
    value: dataObj.id,
    name: dataObj.name,
    username: dataObj.username,
    email: dataObj.email,
    address: dataObj.address,
    phone: dataObj.phone,
    website: dataObj.website,
    company: dataObj.company,
  }));

  const customFilterOption = (option, rawInput) => {
    const searchString = rawInput.toLowerCase();

    return true;
    return (
      (option.name && option.name.toLowerCase().includes(searchString)) ||
      (option.phone && option.phone.toLowerCase().includes(searchString)) ||
      (option.website && option.website.toLowerCase().includes(searchString))
    );
  };

  const handleInputChange = (value) => {
    setSearchValue(value);
  };

  return (
    <div className="Users">
      <h1 style={{ color: "green", textAlign: "center" }}>User Directory</h1>
      <center>
        <Select
          options={userOptions}
          isSearchable={true}
          placeholder="Search for a user..."
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.value}
          filterOption={customFilterOption}
          inputValue={searchValue}
          onInputChange={handleInputChange}
          formatOptionLabel={({ name, email }) => (
            <div>
              <div>{name}</div>
              <div style={{ fontSize: 14, color: "gray" }}>{email}</div>
            </div>
          )}
        />
      </center>
    </div>
  );
}

export default Users;
