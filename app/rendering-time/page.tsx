import BasicList from "./basic-list-server";
import ItemList from "./item-list-client";
import RenderingInfo from "./render-info";

export default function Home() {
  const items = ["HTML", "자바스크립트", "CSS"];

  return (
    <main className="flex flex-col p-4 space-y-2">
      <RenderingInfo type="ssr" />
      <BasicList />
      <ItemList initialItems={items} />
    </main>
  );
}
