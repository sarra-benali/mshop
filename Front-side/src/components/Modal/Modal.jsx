import React, { useState } from "react";
import "../Modal/Modal.css";
import Signup from "../Authentication/Signup";
import Signin from "../Authentication/Signin";
import { BsX } from "react-icons/bs";

const Modal = (props) => {
  const [toggle, setToggel] = useState(0);

  const disconnect = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <>
      <div className="main">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div className="modal-header">
              <h5 class="modal-title">My account</h5>
              <span type='button' fontSize={"20px"} onClick={() => props.setToggelModal(false)}>
                <BsX />
              </span>
              {/* {props.user&&<p>{props.user.name_client} {props.user.familyName_client}</p>} */}
            </div>
            <div class="modal-body">
              {props.user && toggle != 4 && (
                <div>
                  <button className="btn btn-primary" onClick={disconnect}>
                    Disconnect
                  </button>
                </div>
              )}
              {props.user == null && (
                <div>
                  {toggle == 0 && (
                    <div>
                      <button
                        className="bta signin"
                        onClick={() => setToggel(1)}
                      >
                        sign in
                      </button>
                      <button
                        className="bta signup"
                        onClick={() => setToggel(2)}
                      >
                        create account
                      </button>
                    </div>
                  )}
                  {toggle == 1 && (
                    <Signin setToggel={setToggel} setUser={props.setUser} />
                  )}
                  {toggle == 2 && (
                    <Signup setToggel={setToggel} setUser={props.setUser} />
                  )}
                </div>
              )}
            </div>
            {/* {toggle == 4 && (
            <Hello setToggelModel={props.setToggelModal} user={props.user} />
          )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
