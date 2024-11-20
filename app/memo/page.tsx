import ListComponent, { Item } from "./list-memo";

export default function Page() {
  const items: Item[] = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];

  return (
    <main className="flex flex-col p-4 space-y-2">
      <ListComponent items={items} />
    </main>
  );
}
