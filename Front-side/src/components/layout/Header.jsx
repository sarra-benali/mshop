import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { BsList } from "react-icons/bs";
import "../App.css";
import Modal from "../Modal/Modal.jsx";

const Header = (props) => {
  const [toggleModal, setToggelModal] = useState(false);

  return (
    <div>
      <Navbar id="nav">
        <Container>
          <Navbar.Brand href="" id="title">
            M-SHOP
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#/">Home</Nav.Link>
              <Nav.Link href="#/">categorie</Nav.Link>
              <BsList
                size={"2rem"}
                id="list"
                onClick={() => {
                  setToggelModal(true);
                }}
              />
              {toggleModal && (
                <Modal
                  user={props.user}
                  setUser={props.setUser}
                  setToggelModal={setToggelModal}
                />
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
