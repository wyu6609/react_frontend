import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

function NavBar({ user, toggleUser }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  console.log(user);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar>
        <NavbarBrand href="/About">ReactSpring</NavbarBrand>

        <NavLink href="/Home">HOME</NavLink>
        {user ? (
          <NavLink onClick={toggleUser}>log out</NavLink>
        ) : (
          <NavLink onClick={toggleUser}>sign in</NavLink>
        )}
        <>
          {user ? (
            <p>YOU'RE LOGGED IN</p>
          ) : (
            <p>
              YOU'RE <str>NOT</str> LOGGED IN
            </p>
          )}
          <NavbarToggler onClick={toggle} />

          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto small" navbar>
              <NavItem>
                <NavLink href="/route1">fetch_all</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/route1">fetch_by_id</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/route2">post</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/route3">update</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/route3">delete</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/About">About</NavLink>
              </NavItem>
              {user ? (
                <NavItem
                  onClick={() => {
                    navigate("/memberRoute");
                  }}
                >
                  <NavLink>MEMBERS ONLY</NavLink>
                </NavItem>
              ) : (
                <></>
              )}
            </Nav>
          </Collapse>
        </>
      </Navbar>
    </div>
  );
}

export default NavBar;
