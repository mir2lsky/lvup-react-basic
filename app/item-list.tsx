"use client";

import { useState } from "react";

type Props = {
  name: string;
  age?: number;
};

function Welcome(props: Props) {
  return <h1 className="text-3xl font-bold">Hello, {props.name}</h1>;
}

function ItemList() {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const addItem = () => {
    setItems([...items, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <Welcome name="Next.js" />
      <hr />
      <h5 className="text-xl font-bold">웹 기본</h5>
      <h1 className="text-2xl font-bold">구성 요소</h1>
      <ul id="itemList" className="List-disc list-inside">
        <li>HTML</li>
        <li>자바스크립트</li>
        <li>CSS</li>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="항목추가"
      />
      <button onClick={addItem}>항목 추가</button>
    </div>
  );
}

export default ItemList;
