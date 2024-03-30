import React from "react";
import "./RandomGifs.css";
import Spinner from "./Spinner";
import useGiphy from "../hooks/useGiphy";
import { useState } from "react";
import { useEffect } from "react";

export default function RandomGifs() {
  const { gif, loading, fetchData } = useGiphy();
  const [autoGenerate, setAutoGenerate] = useState(false);

  useEffect(() => {
    let interval;
    if (autoGenerate) {
      interval = setInterval(() => {
        fetchData();
      }, 5000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [autoGenerate, fetchData]);

  const toggleAutoGenerate = () => {
    setAutoGenerate(!autoGenerate);
  };

  return (
    <div className="random-gif-container">
      <h1 className="main-heaing">Random Gif</h1>

      <div className="gif-container">
        {loading ? (
          <Spinner className="spinner"></Spinner>
        ) : (
          <img src={gif} alt="" className="gif" />
        )}
      </div>

      <div className="control-container">
        <button onClick={() => fetchData()} className="generate-button">
          Generate GIF
        </button>
        <div className="toggle-container">
          <label className="toggle">
            <input
              type="checkbox"
              checked={autoGenerate}
              onChange={toggleAutoGenerate}
            />
            <span className="slider round"></span>
          </label>
          <span>{autoGenerate ? "Auto Generate On" : "Auto Generate Off"}</span>
        </div>
      </div>
    </div>
  );
}
