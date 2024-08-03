import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthModal from "./modal/AuthModal";
import { FaPlus } from "react-icons/fa";

const Tooltip = ({ children, content }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div
      className='tooltip-container'
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && <div className='tooltip-content'>{content}</div>}
    </div>
  );
};

function AddPostBtn({tooltipContent, navigationPath }) {
  const loginAuth = useSelector((state) => state.login.login);
  const navigate = useNavigate();

  const handleModal = () => {
    if (loginAuth) {
      navigate(`/${navigationPath}`);
    } else if (loginAuth == false) {
      let divElement = document.getElementById("add_btn");
      divElement.setAttribute("data-bs-toggle", "modal");
      divElement.setAttribute("data-bs-target", "#exampleModal");
      divElement.click();
    }
  };
  return (
    <>
      <AuthModal redirectionPath={navigationPath} />
      <a id='add_btn' onClick={handleModal} className='fabButton'>
        <Tooltip content={tooltipContent}>
          <FaPlus />
        </Tooltip>
      </a>
    </>
  );
}

export default AddPostBtn;
