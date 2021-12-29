import React, { useState } from "react";
import UpdateModal from "./UpdateModal";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function Card(props) {
  const [openModal, setOpenModal] = useState(false);

  async function deleteSeries(id) {
    const seriesDoc = doc(db, "series", id);
    await deleteDoc(seriesDoc);
    window.location.reload();
  }

  return (
    <div className="content">
      {openModal && (
        <UpdateModal setOpenModal={setOpenModal} data={props.data} />
      )}
      <div className="card">
        <h3>{props.data.series_name}</h3>
        <h3> Season: {props.data.series_season} </h3>
        <h3> Episode: {props.data.series_episode}</h3>
        <div className="btn-group">
          <button
            className="btn-update"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Update
          </button>
          <button
            className="btn-delete"
            onClick={() => {
              deleteSeries(props.data.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
