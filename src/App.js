import { useState, useEffect } from "react";
import "./App.css";

import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import Header from "./Components/Header.js";
import Card from "./Components/Card.js";
import Modal from "./Components/Modal.js";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [series, setSeries] = useState([]);

  const seriesCollectionRef = collection(db, "series");

  useEffect(() => {
    const getSeries = async () => {
      const data = await getDocs(seriesCollectionRef);
      setSeries(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getSeries();
  }, []);

  return (
    <div className="App">
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <div className="container">
        <Header data={series} modal={setOpenModal} />

        <div className="series">
          {series.map((seri) => {
            return <Card key={seri.id} data={seri} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
