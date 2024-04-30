import React from "react";
import { ListGroup } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import logo from "../../../../assets/images/commune.gif";

import useWindowSize from "../../../../hooks/useWindowSize";
import NavSearch from "./NavSearch";

const NavLeft = () => {
  const windowSize = useWindowSize();

  // let dropdownAlign = "start";

  // let navItemClass = ["nav-item"];
  // if (windowSize.width <= 575) {
  //   navItemClass = [...navItemClass, "d-none"];
  // }

  return (
    <React.Fragment>
      <ListGroup as="ul" bsPrefix=" " className="navbar-nav mr-auto ">
        {/* <ListGroup.Item as="li" bsPrefix=" " className={navItemClass.join(" ")}>
          <Dropdown align={dropdownAlign}>
            <Dropdown.Toggle variant={"link"} id="dropdown-basic">
              Dropdown
            </Dropdown.Toggle>
            <ul>
              <Dropdown.Menu>
                <li>
                  <Link to="#" className="dropdown-item">
                    Action
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item">
                    Something else here
                  </Link>
                </li>
              </Dropdown.Menu>
            </ul>
          </Dropdown>
        </ListGroup.Item> */}
        {/* <div className=" tw-flex tw-gap-5">
          <img className=" tw-w-[70px]" src={logo} alt=""></img>
          <span className="b-title">Commune</span>
        </div> */}
        <ListGroup.Item as="li" bsPrefix=" " className="nav-item">
          <NavSearch windowWidth={windowSize.width} />
        </ListGroup.Item>
      </ListGroup>
    </React.Fragment>
  );
};

export default NavLeft;
