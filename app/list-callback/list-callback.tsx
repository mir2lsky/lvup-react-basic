"use client";

import { memo, useCallback, useEffect, useState } from "react";

/* React.memo는 컴포넌트를 메모이즈하는 고차 컴포넌트로 속성이 변경되지 않았다면
   다시 랜더링하지 않음
   cf) React.useMemo는 비둉이 많이 드는 계산 함수를 메모이즈하므로 차이점 주의 필요
  
   memo를 사용하지 않으면 items의 항목이 모두 리랜더링됨
   memo를 사용하면 새로 추가되는 item만 랜더링되어 리스트 아이템들이 불필요하게 랜더링
   되는 것을 방지하여 성능을 향상
*/
// export const Item = ({ content }: { content: string }) => {
//   console.log("Item > content : ", content);
//   return <li className="p-2 mb-2 bg-gray-100 rounded shadow">{content}</li>;
// };
export const Item = memo(({ content }: { content: string }) => {
  console.log("Item > content : ", content);
  return <li className="p-2 mb-2 bg-gray-100 rounded shadow">{content}</li>;
});

export default function ItemList() {
  const [items, setItems] = useState(["Item 1", "Item 2"]);
  const [input, setInput] = useState("");
  const [unrelatedInput, setUnrelatedInput] = useState("");
  const [renderCount, setRenderCount] = useState(0);

  /* useCallback을 이용한 함수 메오이제이션
     input값이 변경될 때만 랜더링 -> 불필요한 랜더링을 방지하여 성능 개선
     이는 함수가 변경되지 않는한 같은 참조를 유지하므로 자식 컴포넌트에 전달된 속성이
     변경되지 않게 해 리랜더링을 최소화
  */
  const handleAdd = useCallback(() => {
    if (input) {
      setItems((prevItems) => [...prevItems, input]);
      setInput("");
    }
  }, [input]);

  useEffect(() => {
    setRenderCount((count) => count + 1);
  }, [unrelatedInput]);

  return (
    <div className="p-4">
      <input
        className="p-2 mb-2 border border-gray-300 rounded"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="새 아이템 입력"
      />
      <button
        className="p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        onClick={handleAdd}
      >
        아이템 추가
      </button>
      <ul className="mt-4">
        {items.map((item, index) => (
          <Item key={index} content={item} />
        ))}
      </ul>
      <input
        className="p-2 mt-2 border border-gray-300 rounded"
        value={unrelatedInput}
        onChange={(e) => setUnrelatedInput(e.target.value)}
        placeholder="별도의 필드 입력"
      />
      <p className="mb-4 text-sm text-gray-600">리랜더링 횟수: {renderCount}</p>
    </div>
  );
}
