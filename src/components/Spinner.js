import React from "react";
import loading from "../loader.gif";

export default function Spinner() {
  return (
    <div className="text-center my-3">
      <img src={loading} alt="Loading GIF" />
    </div>
  );
}
