import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const API_KEY = "4CYORfbosG7H7YIoTjRZwvi2bHYl2mgS";
const randomGifUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
// const specificGifUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`

export default function useGiphy(tag) {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData(tag) {
    setLoading(true);

    const { data } = await axios.get(
      tag ? `${randomGifUrl}&tag=${tag}` : randomGifUrl
    );
    const imgUrl = data.data.images.downsized_large.url;
    // console.log(imgUrl)
    setGif(imgUrl);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { gif, loading, fetchData };
}
