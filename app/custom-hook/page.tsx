import { ScrollTracker } from "./scroll-tracker";

export default function Page() {
  return (
    <main className="flex flex-col p-4 space-y-2">
      <ScrollTracker />
    </main>
  );
}
