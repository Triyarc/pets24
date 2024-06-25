import React, { useState } from "react";
import AdoptionPetsArea from "../components/adoption/AdoptionPetsArea";
import SubscribeArea from "../components/common/SubscribeArea";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import AuthModal from "../components/common/AuthModal";

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

function Adoption() {
  const loginAuth = useSelector((state) => state.login.login);
  const navigate = useNavigate();

  const handleModal = () => {
    if (loginAuth) {
      navigate("/mating-post");
    } else if (loginAuth == false) {
      let divElement = document.getElementById("add_btn");
      divElement.setAttribute("data-bs-toggle", "modal");
      divElement.setAttribute("data-bs-target", "#exampleModal");
      divElement.click();
    }
  };
  return (
    <div>
      <AuthModal />
      <a id='add_btn' onClick={handleModal} className='fabButton'>
        <Tooltip content='Adoption Post'>
          <FaPlus />
        </Tooltip>
      </a>
      <AdoptionPetsArea />
      <SubscribeArea />
    </div>
  );
}

export default Adoption;
