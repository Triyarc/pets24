import React from "react";
import img from "../../assets/img/common/about.png";
import { useNavigate } from "react-router-dom";

function AuthModal({redirectionPath}) {
  const navigate = useNavigate();

  const handleRedirect = () => {
    let buttonClose = document.getElementById("btn_close");
    buttonClose.click();
    document.cookie = `redirection_path=/${redirectionPath};path=/`;
    navigate("/login");
  };
  return (
    <div
      className='modal fade'
      id='exampleModal'
      tabIndex={-1}
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h1
              className='modal-title fs-5 text-center h1'
              id='exampleModalLabel'
            >
              Login to post
            </h1>
            <button
              id='btn_close'
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            />
          </div>
          <div className='modal-body'>
            <div className='text-center'>
              <img src={img} style={{ height: "250px", width: "auto" }}></img>
            </div>
            <div className='text-center justify-content-center pt-5 pb-3    '>
              <p className='w-75 mb-3 '>
                User must login to post your pet, becasue only you know the
                action of post
              </p>
              <button
                className='btn btn_theme btn_md w-75'
                onClick={handleRedirect}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
