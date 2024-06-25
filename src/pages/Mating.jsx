import React, { useState } from "react";
import Banner from "../components/common/Banner";
import MatingPetsArea from "../components/mating/MatingPetsArea";
import SubscribeArea from "../components/common/SubscribeArea";
import "../style/fabStyle.css";
import { IconName } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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

function Mating() {
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
      <AuthModal redirectionPath={"mating-post"}/>
      <a id='add_btn' onClick={handleModal} className='fabButton'>
        <Tooltip content='Mating Post'>
          <FaPlus />
        </Tooltip>
      </a>
      <MatingPetsArea />
      <SubscribeArea />
    </div>
  );
}

export default Mating;
