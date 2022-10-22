import React, { useState } from "react";
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

function NavBar({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(user);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar>
        <NavbarBrand href="/">ReactSpring</NavbarBrand>
        {user ? (
          <>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink href="/route1">Route1</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/route2">Route2</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/route3">Route3</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </>
        ) : (
          <></>
        )}
      </Navbar>
    </div>
  );
}

export default NavBar;
