import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import "../../style/home.css";

function Dropdown() {
  return (
    <div>
      <select
        class='form-select form-select-lg mb-3'
        aria-label='.form-select-lg example'
        id='selectMenu'
      >
        <option class='placeholder' selected>
          Open this select menu
        </option>
        <option value='1'>One</option>
        <option value='2'>Two</option>
        <option value='3'>Three</option>
      </select>
    </div>
  );
}

function SearchBar() {
  const items = [
    {
      id: 0,
      name: "Cobol",
    },
    {
      id: 1,
      name: "JavaScript",
    },
    {
      id: 2,
      name: "Basic",
    },
    {
      id: 3,
      name: "PHP",
    },
    {
      id: 4,
      name: "Java",
    },
    {
      id: 5,
      name: "JavaScri",
    },
    {
      id: 6,
      name: "JavaSc",
    },
  ];
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };
  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };
  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
  };
  const handleOnFocus = () => {
    console.log("Focused");
  };
  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
      </>
    );
  };

  return (
    <>

          <div className='App '>
            <header className='App-header'>
              <div>
                <ReactSearchAutocomplete
                  items={items}
                  style={{ position: "unset" }}
                  onSearch={handleOnSearch}
                  onHover={handleOnHover}
                  onSelect={handleOnSelect}
                  onFocus={handleOnFocus}
                  autoFocus
                  formatResult={formatResult}
                  placeholder='Search for an item...'
                />
              </div>
            </header>
          </div>

        {/* <div className="col-lg-3">
          <div>
            <select
              className="form-select form-select-lg "
              style={{ fontSize: '15px', padding: '9px 25px', borderRadius: "5px" }}
              aria-label=".form-select-lg example"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

          </div>
        </div>
        <div className="col-lg-3">
        </div> */}
      {/* <div>
        <Dropdown />
      </div> */}
    </>
  );
}

export default SearchBar;
