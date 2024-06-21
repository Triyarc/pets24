import React, { useState } from "react";
import Banner from "../components/common/Banner";
import MatingPetsArea from "../components/mating/MatingPetsArea";
import SubscribeArea from "../components/common/SubscribeArea";
import "../style/fabStyle.css"
import { IconName } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

const Tooltip = ({ children, content }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="tooltip-container"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}>
      {children}
      {visible && <div className="tooltip-content">{content}</div>}
    </div>
  );
};

function Mating() {
  return (

    <div>
      <a href="#" className="fabButton" >
        <Tooltip content="This is a tooltip">
          <FaPlus />
        </Tooltip>
      </a>
      <MatingPetsArea />
      <SubscribeArea />
    </div>
  );
}

export default Mating;
