import React from "react";
import CounterEffect from "./counter-effect";

const Home = () => {
  return (
    <div>
      <main className="flex flex-col p-4 space-y-2">
        <CounterEffect />
      </main>
    </div>
  );
};

export default Home;
