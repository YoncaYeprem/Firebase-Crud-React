import React, { useState } from "react";
import "./Modal.css";

import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function Modal({ setOpenModal }) {
  const [seriesName, setSeriesName] = useState("");
  const [seriesSeason, setSeriesSeason] = useState(0);
  const [seriesEpisode, setSeriesEpisode] = useState(0);

  const seriesCollectionRef = collection(db, "series");

  function closeHandle() {
    setOpenModal(false);
  }

  async function handleSubmit() {
    console.log(seriesName);
    console.log(seriesSeason);
    console.log(seriesEpisode);

    await addDoc(seriesCollectionRef, {
      series_name: seriesName,
      series_season: Number(seriesSeason),
      series_episode: Number(seriesEpisode),
    });
    closeHandle();
    window.location.reload();
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeHandle()}>X</button>
        </div>
        <div className="modalHeader">
          <h2>Add New Series To Track Easily!</h2>
        </div>
        <div className="modalBody">
          <div className="modalInputContainer">
            <label htmlFor="sname">Series Name</label>
            <input
              type="text"
              id="sname"
              name="seriesname"
              placeholder="Series name.."
              onChange={(e) => {
                setSeriesName(e.target.value);
              }}
            />
          </div>

          <div className="modalInputContainer">
            <label htmlFor="season">Season Number</label>
            <input
              type="number"
              id="season"
              name="season"
              placeholder="Season Number.."
              onChange={(e) => {
                setSeriesSeason(e.target.value);
              }}
            />
          </div>
          <div className="modalInputContainer">
            <label htmlFor="episode">Episode Number</label>
            <input
              type="number"
              id="episode"
              name="episode"
              placeholder="Episode Number.."
              onChange={(e) => {
                setSeriesEpisode(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="modalFooter">
          <button className="btn-cancel" onClick={() => closeHandle()}>
            Cancel
          </button>
          <button
            className="btn-addNew"
            onClick={() => {
              handleSubmit();
            }}
          >
            Add New
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
