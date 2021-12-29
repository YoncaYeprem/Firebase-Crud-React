import React, { useState } from "react";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function UpdateModal(props) {
  const [seriesName, setSeriesName] = useState("");
  const [seriesSeason, setSeriesSeason] = useState(0);
  const [seriesEpisode, setSeriesEpisode] = useState(0);

  function closeHandle() {
    props.setOpenModal(false);
  }

  async function updateSeries(id) {
    const seriesDoc = doc(db, "series", id);
    const newFields = {
      series_name: seriesName ? seriesName : props.data.series_name,
      series_season: seriesSeason
        ? Number(seriesSeason)
        : props.data.series_season,
      series_episode: seriesEpisode
        ? Number(seriesEpisode)
        : props.data.series_episode,
    };
    await updateDoc(seriesDoc, newFields);

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
              defaultValue={props.data.series_name}
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
              defaultValue={props.data.series_season}
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
              defaultValue={props.data.series_episode}
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
              updateSeries(props.data.id);
            }}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateModal;
