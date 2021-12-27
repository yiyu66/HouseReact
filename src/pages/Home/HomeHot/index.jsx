import axios from "axios";
import React, { useState } from "react";

export default function HomeHot(props) {
  const homeHotUrl = "http://localhost:3001/api/homehot1";

  const [homeHot, setHomeHot] = useState({
    homehot1: "",
    homehot2: "",
  });
  const [testData, settestData] = useState(null);
  const city = props.city || localStorage.getItem("city") || "default";

  React.useEffect(() => {
    axios.get(homeHotUrl).then((res) => {
      settestData(res.data);
      console.log(res);
    });
  }, []);
  if (!testData) return "读取数据失败";
  return (
    <div>
      <button
        onClick={() => {
          setHomeHot({ homehot1: city, homehot2: "温州" });
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
