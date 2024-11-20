"use server";

export interface AddToCartState {
  success: boolean | null;
  cartSize?: number;
  message?: string;
}

// 클라이언트에서 이 함수를 호출하면 연결된 itemID와 클라이언트의 현재 상태값, 현재 formData를
// 아규먼트로 넘겨고 내부에서 처리 후 클라이언트의 상태변수로 결과를 리턴하는 식으로 처리
export async function addToCart(
  id: string, // 클라이언트에서 호출한 itemI
  prevState: AddToCartState, // 클라이언트의 현재 상태
  formData: FormData // 클라이언의 폼 데이터
) {
  console.log("id, prevSate, formData", id, prevState, formData);
  const formItemId = formData.get("itemID");
  if (
    formItemId === id &&
    (prevState.cartSize === undefined || prevState.cartSize < 10)
  ) {
    const newCartSize = prevState.cartSize ? prevState.cartSize + 1 : 1;
    // 클라이언트의 formState로 리턴
    return {
      success: true,
      cartSize: newCartSize,
    };
  } else {
    return {
      success: false,
      message: "상품이 매진되었습니다.",
    };
  }
}
