import React from "react";

import "./Search.css";

const Search = ({ submitSearch, handleSearch, searchValue }) => {
  return (
    <React.Fragment>
      <form onSubmit={submitSearch}>
        <div className="search-box">
          <div className="search-box-input">
            <input
              type="text"
              className="form-control input-search"
              placeholder="Cari kontak"
              onClick={handleSearch}
              onChange={handleSearch}
              value={searchValue}
            />
            <a className="input-search-icon">
              <i className="fa fa-search icons"></i>
            </a>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Search;
