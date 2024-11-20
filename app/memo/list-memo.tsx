"use client";

import { ChangeEvent, useEffect, useMemo, useState } from "react";

export type Item = {
  id: number;
  name: string;
};

// 비싼 계산이라고 가정
const expensiveCalculation = (item: Item): Item => {
  console.log("Calculating for:", item.name);
  return { ...item, name: item.name.toUpperCase() };
};

type ListComponentProps = {
  items: Item[];
};

export default function ListComponent({ items }: ListComponentProps) {
  const [filter, setFilter] = useState("");
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    setRenderCount((count) => count + 1);
  }, [filter]);

  /*
    React.useMemo는 비둉이 많이 드는 계산 함수를 메모이즈하여 최적화
    cf) React.memo는 컴포넌트 랜더링을 최적화하하므로 주의 필요
    useMemo를 사용하지 않으면 필터에 문자를 타이핑 할 때 마다 expensiveCalculation이 배열 갯수만큼 실행
    되는데 각 실행이 시간이 많이 걸린다면 성능, 속도 저하 -> 불필요한 리랜더링 제거 필요
    const transformedItems = items.map((item) => expensiveCalculation(item));
  */
  // useMemo를 사용하여 items배열에 변화가 있을 때만 실행하고 그 외에는 기존 배열에 대한 계산된
  // 결과 값을 재사용하도록 하여 불필요한 계산을 줄일 수 있다.
  const transformedItems = useMemo(() => {
    return items.map((item) => expensiveCalculation(item));
  }, [items]);

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="필터 입력"
        className="p-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
      <p className="mb-4 text-sm text-gray-600">리랜더링 횟수: {renderCount}</p>
      <ul className="pl-5 list-disc">
        {transformedItems.map((item) => (
          <li key={item.id} className="text-lg text-gray-800">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
