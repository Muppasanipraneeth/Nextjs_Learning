"use client";
import { useState } from "react";
import axios from "axios";
import Loading from "./Loading";

const getData = async () => {
  const response = await axios.get("https://favqs.com/api/qotd");
  return response.data;
};

export default function Data() {
  const [quote, setQuote] = useState(null);
  const [load, setLoad] = useState(true);
   

  const handleGetData = async () => {
    const userdata = await getData();
    setQuote(userdata);  // Store the response in state
    setLoad(false);  // Set loading to false after data is fetched
  };

  return (
    <div>
      {load ? (
        <Loading />
      ) : (
        <div>
          <button onClick={handleGetData} >Get the data</button>

          {quote && (
            <div>
              <p>Quote: {quote.quote?.body}</p>
              <p>Author: {quote.quote?.author}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
