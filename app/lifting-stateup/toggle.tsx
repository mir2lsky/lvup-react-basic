"use client";

import { useState } from "react";

type ToggleProps = {
  isOn: boolean;
  onClick: () => void;
};

const Toggle = ({ isOn, onClick }: ToggleProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-white font-bold rounded ${
        isOn ? "bg-blue-500" : "bg-red-400"
      }`}
    >
      {isOn ? "On" : "Off"}
    </button>
  );
};

const StatusDisplay = ({ isOn }: { isOn: boolean }) => {
  return (
    <div className={`text-lg ${isOn ? "text-blue-500" : "text-red-100"}`}>
      {isOn ? "상태: 켜짐" : "상태: 꺼짐"}
    </div>
  );
};

const ToggleParentComponent = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div
      className={`flex flex-col items-center justify-center space-y-4 p-4 ${
        isToggled ? "bg-blue-100" : "bg-red-600"
      }`}
    >
      <Toggle isOn={isToggled} onClick={() => setIsToggled(!isToggled)} />
      <StatusDisplay isOn={isToggled} />
    </div>
  );
};

export default ToggleParentComponent;
