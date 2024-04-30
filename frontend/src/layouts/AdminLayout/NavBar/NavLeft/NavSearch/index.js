import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavSearch = (props) => {
  const { windowWidth } = props;
  const [isOpen, setIsOpen] = useState(windowWidth < 600);
  const [searchString, setSearchString] = useState(windowWidth < 600 ? "30px" : "");

  const searchOnHandler = () => {
    if (windowWidth < 600) {
      document.querySelector("#navbar-right").classList.add("d-none");
      setSearchString("100px");
    }
    setIsOpen(true);
    setSearchString("130px");
  };

  const searchOffHandler = () => {
    setIsOpen(false);
    setSearchString(0);
    setTimeout(() => {
      if (windowWidth < 600) {
        document.querySelector("#navbar-right").classList.remove("d-none");
      }
    }, 500);
  };

  let searchClass = ["main-search"];
  if (isOpen) {
    searchClass = [...searchClass, "open"];
  }

  return (
    <React.Fragment>
      <div id="main-search" className={searchClass.join(" ")}>
        <div className="input-group">
          <input type="text" id="m-search" className="form-control" placeholder="Search . . ." style={{ width: searchString }} />
          <Link to="#" className="input-group-append search-close" onClick={searchOffHandler}>
            <i className="feather icon-x input-group-text tw-text-[17px] dark:tw-text-white" />
          </Link>
          <span
            onKeyDown={searchOnHandler}
            role="button"
            tabIndex="0"
            className="input-group-append search-btn btn btn-primary"
            onClick={searchOnHandler}
            style={{ borderRadius: "50%", marginLeft: 5 }}
          >
            <i className="feather icon-search input-group-text tw-text-[20px] dark:tw-text-white tw-text-[#3f4d67]" />
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

NavSearch.propTypes = {
  windowWidth: PropTypes.number
};

export default NavSearch;
