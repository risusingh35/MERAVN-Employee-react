import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faSearch,
  faBell,
  faEnvelope,
  faUser,
  faCogs,
  faList,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search functionality here with the searchQuery state
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
        <FontAwesomeIcon icon={faBars} />
      </button>

      <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <input
            type="text"
            className="form-control bg-light border-0 small"
            placeholder="Search for..."
            aria-label="Search"
            aria-describedby="basic-addon2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button" onClick={handleSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </form>

      <ul className="navbar-nav ml-auto">
        {/* Your existing HTML code goes here, but remember to convert HTML attributes to JSX */}
        {/* For example: change 'class' to 'className', and 'for' to 'htmlFor', and so on */}
        {/* Also, replace 'href="#"' with 'href="/"' or the appropriate URL */}
        {/* Ensure you close self-closing tags like <img> and <input> with '/>' */}
        {/* Replace HTML event attributes like 'onClick', 'onChange', etc., with their JSX equivalents */}
      </ul>
    </nav>
  );
};

export default Nav;
