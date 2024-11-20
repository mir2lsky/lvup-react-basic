import {
  ContextClickCounterMinus,
  ContextClickCounterPlus,
  CounterStatus,
} from "./context-click-counter";
import { CounterProvider } from "./counter-context";

export default function Page() {
  return (
    <CounterProvider>
      <main className="flex flex-col p-4 space-y-2">
        <h1 className="text-xl font-bold text-gray-400">
          리액트 첫번째 컴포넌트
        </h1>
        <ContextClickCounterPlus />
        <h1 className="text-xl font-bold text-gray-400">
          아래는 두번째 컴포넌트
        </h1>
        <ContextClickCounterMinus />
        <h1 className="text-xl font-bold text-gray-400">
          아래는 세번째 컴포넌트
        </h1>
        <CounterStatus />
      </main>
    </CounterProvider>
  );
}
