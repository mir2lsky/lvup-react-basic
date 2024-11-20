import AddToCartForm from "./cart-form";

export default function Home() {
  return (
    <main className="flex flex-col p-4 space-y-2">
      <AddToCartForm itemID="1" itemTitle="리액트 완벽가이드" />
      <AddToCartForm itemID="2" itemTitle="리액트 실무 기술" />
    </main>
  );
}
