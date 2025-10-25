import React, { useState } from "react";
import axios from "axios";

function EpicLookup() {
  const [epic, setEpic] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleLookup = async () => {
    try {
      setError("");
      setResult(null);

      const res = await axios.post(
        "http://localhost:5000/api/epic/lookup",
        { epic },          // ✅ payload
        { headers: { "Content-Type": "application/json" } } // ensure JSON
      );

      console.log(res); // ✅ check response in browser console
      setResult(res.data);
    } catch (err) {
      console.error(err); // ✅ check full error in console
      setError("EPIC not found or server error");
    }
  };

  return (
    <div>
      <h2>EPIC Lookup</h2>
      <input value={epic} onChange={e => setEpic(e.target.value)} placeholder="Enter EPIC" />
      <button onClick={handleLookup}>Search</button>

      {result && (
        <div>
          <p>Name: {result.name}</p>
          <p>Polling Station: {result.pollingStation}</p>
        </div>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default EpicLookup;
