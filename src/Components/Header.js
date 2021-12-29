import React, {useState} from "react";
import Modal from "./Modal.js";

function Header({modal,data}) {

  return (
    <div className="upper-part">
      <div className="title">
        <h2>Series Tracker</h2>
        <p>Current Series: {data.length}</p>
      </div>
      <button className="btn-add" onClick={()=>{modal(true)}}>Add New Series</button>

    </div>

    
  );
}

export default Header;
