"use client";

import { useState } from "react";
import Button from "./button";

export function DefaultButton() {
  const [clicked, setClicked] = useState(false);

  return (
    <Button kind="default" onClick={() => setClicked(true)}>
      {clicked ? "Default 클릭됨" : "Default 버튼"}
    </Button>
  );
}

export function ImportantButton() {
  const handleMouseOver = () => {
    alert("마우스 오버 이벤트 처리");
  };

  return (
    <Button kind="important" onMouseOver={handleMouseOver}>
      {"Important 버튼"}
    </Button>
  );
}

export function ReferenceButton() {
  const handleDoubleClick = () => {
    alert("더블 클릭 이벤트 처리");
  };

  return (
    <Button kind="reference" onDoubleClick={handleDoubleClick}>
      {"Reference 버튼"}
    </Button>
  );
}
