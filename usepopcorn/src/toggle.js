import { useState } from "react";
import "./toggle.css";

export default function ToggleBar() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <div className="container">
      <div className="toggle-container">
        <span className="toggle-text">Toggle status</span>
        <div
          className={`toggle-bar ${toggle ? "active" : "inactive"}`}
          onClick={handleToggle}
        >
          <div className={`slider ${toggle ? "active" : "inactive"}`}></div>
        </div>
      </div>
    </div>
  );
}
