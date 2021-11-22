import React from "react";
import "./style.less";
import { Link } from "react-router-dom";
import { Input } from "antd";

export default function index() {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  return (
    // clear-fix是公共样式，待添加
    <div id="home-header" className="clear-fix">
      <div className="home-header-left">
        <Link to="/city">
          <span>上海</span>
        </Link>
      </div>

      <Search
        placeholder="请输入搜索内容"
        onSearch={onSearch}
        style={{ width: 300 }}
        enterButton
      />
    </div>
  );
}
