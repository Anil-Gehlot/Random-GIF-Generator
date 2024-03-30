import React from "react";
import "./SpecificGifs.css";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import useGiphy from "../hooks/useGiphy";

export default function SpecificGifs() {
  const [tag, setTag] = useState("");
  const { gif, loading, fetchData } = useGiphy(tag);

  return (
    <div className="specifi-gif-container">
      <h1 className="main-heading">Random Gif</h1>

      <div className="gif-container ">
        {loading ? (
          <Spinner className="spinner"></Spinner>
        ) : (
          <img src={gif} alt="" className="gif" />
        )}
      </div>

      <input
        className="input-choice"
        type="text"
        value={tag}
        onChange={(event) => setTag(event.target.value)}
        placeholder="Enter Your Choice"
      />

      <button className="generate-button" onClick={() => fetchData(tag)}>
        Generate GIF
      </button>
    </div>
  );
}
