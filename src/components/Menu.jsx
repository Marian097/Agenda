import React from "react";
import { useNavigate } from "react-router-dom";
import addList from "../assets/icons8-list-50.png";
import contact from "../assets/icons8-phone-48.png";
import "./Menu.css";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div id="myMenu">
      <ul>
        <li>
          <button type="button" onClick={() => navigate("/")}>
            <img src={addList} alt="Add list" />
          </button>
        </li>
        <li>
          <button type="button" onClick={() => navigate("/contacts")}>
            <img src={contact} alt="Contacts" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
