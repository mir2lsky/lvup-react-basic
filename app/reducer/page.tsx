import { CounterWithReducer } from "./counter-with-reducer";

export default function Home() {
  return (
    <main className="flex flex-col p-4 space-y-2">
      <CounterWithReducer />
    </main>
  );
}
