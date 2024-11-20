"use client";

import { addToCart, AddToCartState } from "./actions";
import { useActionState } from "react";

/**
 * 최신 리액트 폼입력 처리 : useFormState + Sever Acton
 * */

interface AddToCartFormProps {
  itemID: string;
  itemTitle: string;
}

export default function AddToCartForm({
  itemID,
  itemTitle,
}: AddToCartFormProps) {
  const initialState: AddToCartState = {
    success: null,
    cartSize: 0,
    message: "",
  };
  // server의 addToCart함수를 itemID로 연결해서 함수 생성
  const updateFormWithId = addToCart.bind(null, itemID);
  // 생성된 함수를 dispatch로, 초기 상태를 formState로 리턴
  const [formState, dispatch] = useActionState(updateFormWithId, initialState);
  console.log("formState :", formState);

  // 추가버튼을 클랙하면 form action에 연결된 dispatch, 즉 서버 함수를 호출
  return (
    <form
      action={dispatch}
      className="p-4 space-y-2 border-2 border-gray-200 rounded-lg shadow"
    >
      <h2 className="text-lg font-semibold">{itemTitle}</h2>
      <input type="hidden" name="itemID" value={itemID} />
      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        장바구니에 추가
      </button>
      {/* 서버의 처리 결과를 받아서 처리 */}
      {formState?.success && (
        <div className="p-2 text-green-800 bg-green-200 rounded">
          장바구니에 추가됨! 장바구니에는 현재 {formState.cartSize}개의 상품이
          있습니다.
        </div>
      )}
      {formState?.success === false && (
        <div className="p-2 text-red-800 bg-red-200 rounded">
          장바구니에 추가 실패: {formState.message}
        </div>
      )}
    </form>
  );
}
