import React from "react";
import { Map } from "react-amap";

export default function index() {
  const AMAP_KEY = "575c39e9399bb4d468773983fb489d2a";
  return (
    <div>
      <div style={{ width: "100%", height: "400px" }}>
        <Map amapkey={AMAP_KEY} />,
      </div>
    </div>
  );
}
