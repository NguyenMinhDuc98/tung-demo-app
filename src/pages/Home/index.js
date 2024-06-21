import React from "react";
import "./index.css";
import Editor from "../../components/Editor";
import { Input, Tabs } from "antd";

const items = [
  {
    key: "1",
    label: "Tab 1",
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "Tab 2",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Tab 3",
    children: "Content of Tab Pane 3",
  },
];

const HomePage = () => {
  const onChangeTab = (key) => {
    console.log(key);
  };

  return (
    <div className="container">
      <div className="title">Policy Builder</div>
      <Editor />
      <Input.Search
        style={{ marginTop: 24, marginBottom: 24 }}
        placeholder="Search"
        enterButton="Search"
        size="large"
        onSearch={(value) => console.log(value)}
      />
      <Tabs defaultActiveKey="1" items={items} onChange={onChangeTab} />
    </div>
  );
};

export default HomePage;
