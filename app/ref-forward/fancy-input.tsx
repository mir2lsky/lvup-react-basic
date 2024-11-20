"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";

// forwardRef와 useImperativeHandle함수를 통해 부모에게 받은 ref와 자식의 input요소를 연결
export const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // 부모에게서 받은 inputRef 참조를 이용하여 내부의 input요소와 연결
  // 즉 부모에게 받은 ref에 자식의 inputRef의 focus메서드를 호출하는 focus메서드를 연결
  // 결과적으로 부모에서 자식 컴포넌트의 input요소의 focus 메서드를 호출 가능
  useImperativeHandle(ref, () => ({
    focus: () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
  }));

  return (
    <input
      ref={inputRef}
      className="p-2 border border-gray-300 rounded-lg focus:border-blue-500"
    />
  );
});

FancyInput.displayName = "FancyInput";

function FancyInputHolder() {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      {/* 자식 컴포넌트에 inputRef 참조를 넘김 */}
      <FancyInput ref={inputRef} />
      <button
        onClick={focusInput}
        className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700"
      >
        포커스
      </button>
    </div>
  );
}

export default FancyInputHolder;
