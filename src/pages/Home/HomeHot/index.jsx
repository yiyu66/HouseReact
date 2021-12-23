import React, { useState } from "react";

export default function HomeHot(props) {
  const [homeHot, setHomeHot] = useState({
    homehot1: "",
    homehot2: "",
  });

  const city = props.city || localStorage.getItem("city") || "default";
  return (
    <div>
      <button
        onClick={() => {
          setHomeHot({ homehot1: city, homehot2: "温州" });
          console.log(homeHot);
        }}
      >
        更新城市
      </button>
      {homeHot.homehot1.length > 0 ? (
        <div>{homeHot.homehot1}</div>
      ) : (
        <div>正在请求数据</div>
      )}
      {homeHot.homehot2.length > 0 ? (
        <div>{homeHot.homehot2}</div>
      ) : (
        <div>正在请求数据</div>
      )}
    </div>
  );
}
