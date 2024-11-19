"use client";

import { useEffect, useState } from "react";

function CounterEffect() {
  const [count, setCount] = useState(0);
  const [messages, setMessages] = useState<string[]>([]);

  // 처음 한번만 실행
  useEffect(() => {
    setMessages((msg) => [...msg, "컴포넌트 mount"]);
    console.log("컴포넌트 mount");
    return () => {
      setMessages((msg) => [...msg, "컴포넌트 unmount"]);
      console.log("컴포넌트 unmount");
    };
  }, []);

  // 카운트 상태가 변경될때마다 실행
  useEffect(() => {
    setMessages((msg) => [...msg, `컴포넌트 update : ${count}`]);
    console.log(`컴포넌트 update : ${count}`);

    // 의존성이 있는 useEffect의 리턴 함수는 언마운트 될때와
    // 의존성이 변경될 때 먼저 실행되어 이전 count값을 처리 가능
    return () => {
      setMessages((msg) => [...msg, "previous 컴포넌트 update"]);
      console.log(`previous 컴포넌트 update : ${count}`);
    };
  }, [count]);

  const onClick = () => {
    setCount((current) => current + 1);
  };
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-60 h-40 p-2 mb-4 overflow-auto border border-gray-300">
        {messages.map((msg, idx) => (
          <p key={idx} className="text-sm text-gray-700">
            {msg}
          </p>
        ))}
      </div>
      <div className="flex flex-col items-center">
        <p className="mb-2 text-lg font-bold">카운트 : {count}</p>
        <button
          onClick={onClick}
          className="px-4 font-semibold text-white bg-blue-500 hover:bg-blue-700"
        >
          증가
        </button>
      </div>
    </div>
  );
}

export default CounterEffect;
