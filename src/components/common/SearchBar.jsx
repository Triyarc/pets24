import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import "../../style/home.css";

function Dropdown() {

  return (
    <div>
      <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" id="selectMenu">
        <option class="placeholder" selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  )
}

function SearchBar() {
  const items = [
    {
      id: 0,
      name: 'Cobol'
    },
    {
      id: 1,
      name: 'JavaScript'
    },
    {
      id: 2,
      name: 'Basic'
    },
    {
      id: 3,
      name: 'PHP'
    },
    {
      id: 4,
      name: 'Java'
    },
    {
      id: 5,
      name: 'JavaScri'
    },
    {
      id: 6,
      name: 'JavaSc'
    },
  ]
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }
  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }
  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }
  const handleOnFocus = () => {
    console.log('Focused')
  }
  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
      </>
    )
  }

  return (
    <>
      <div className='row'>
        <div className="col-lg-10">
          <div className="App " >
            <header className="App-header">
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
                  placeholder="Search for an item..."
                />
              </div>
            </header>
          </div>
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
        <div className="col-lg-2 d-flex justify-content-end">

          {/* <!-- Button trigger modal --> */}

          <button type="button" class="btn btn_theme btn_md " data-bs-toggle="modal" data-bs-target="#exampleModal1">
            request Pets
          </button>
          <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ zIndex: "9999999" }}>
            <div class="modal-dialog modal-lg">
              <div class="modal-content p-2">
                <div class="modal-header border-0">
                  <h3 class="modal-title" id="exampleModalLabel">Request Your Pet</h3>
                  <button type="button" class="btn-close Modal-Close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3">
                      <h3 class="mb-3">Pet Details</h3>
                      <div class="row">
                        <div class="col-md-6 col-12">
                          {/* <label for="pet-name" class="form-label">Pet Name:</label> */}
                          <input type="text" class="form-control" id="pet-name" placeholder="Enter pet name" />
                        </div>
                        <div class="col-md-6 col-12">
                          {/* <label for="pet-categories" class="form-label">Pet Categories:</label> */}
                          <input type="text" class="form-control" id="pet-categories" placeholder="Enter pet categories" />
                        </div>
                      </div>
                    </div>
                    <div class="mb-3">
                      <h3 class="mb-3">Personal Details</h3>
                      <div class="mb-3">
                        {/* <label for="name" class="form-label">Name:</label> */}
                        <input type="text" class="form-control" id="name" placeholder="Enter your name" />
                      </div>
                      <div class="mb-3">
                        {/* <label for="mobile" class="form-label">Mobile Number:</label> */}
                        <input type="text" class="form-control" id="mobile" placeholder="Enter your mobile number" />
                      </div>
                      <div class="mb-3">
                        {/* <label for="pincode" class="form-label">Pincode:</label> */}
                        <input type="text" class="form-control" id="pincode" placeholder="Enter your pincode" />
                      </div>
                      <p><strong>Selvapuram Coimbatore India </strong></p>
                      {/* <div class="mb-3">
                        <label for="address" class="form-label">Address:</label>
                        <input type="text" class="form-control" id="address" placeholder="Enter your address" />
                      </div> */}
                    </div>
                  </form>
                </div>
                <div class="modal-footer border-0">
                  <button type="button" class="btn btn_theme_white btn_md " data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn_theme btn_md ">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        <Dropdown />
      </div> */}
    </>

  )
}

export default SearchBar