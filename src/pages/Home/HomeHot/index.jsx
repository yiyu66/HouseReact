import axios from "axios";
import React, { useState } from "react";
import "antd/dist/antd.css";
import "./style.less";
import { Button, Card } from "antd";
const { Meta } = Card;

export default function HomeHot(props) {
  const houseDataUrl = "http://localhost:3001/api/houseData";

  const [homeHot, setHomeHot] = useState({
    homehot1: "",
    homehot2: "",
  });
  const [houseData, sethouseData] = useState(null);
  const city = props.city || localStorage.getItem("city") || "default";
  homeHot.homehot1 = city;
  React.useEffect(() => {
    async function gethouseData() {
      const res = await axios.get(houseDataUrl);
      sethouseData(res.data);
    }
    gethouseData();
  }, []);

  if (!houseData) return "读取数据失败";
  return (
    <div>
      <Button
        type="primary"
        style={{ margin: "5px" }}
        onClick={() => {
          console.log(houseData[0]);
        }}
      >
        打印房源信息
      </Button>
      <Button
        onClick={() => {
          setHomeHot({ homehot1: city, homehot2: "" });
        }}
      >
        {homeHot.homehot1.length > 0 ? <div>{homeHot.homehot1}</div> : <div>正在请求数据</div>}
      </Button>
      <div className="houseCard">
        <Card
          hoverable
          style={{ width: "100%", borderRadius: "20px" }}
          cover={
            <img
              style={{ width: "100%", borderRadius: "20px" }}
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title={houseData[0].title} description={houseData[0].detail} />
        </Card>
        <Card
          hoverable
          style={{ width: "100%", borderRadius: "20px",marginTop:"5%" }}
          cover={
            <img
              style={{ width: "100%", borderRadius: "20px" }}
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title={houseData[1].title} description={houseData[1].detail} />
        </Card>
      </div>
    </div>
  );
}
