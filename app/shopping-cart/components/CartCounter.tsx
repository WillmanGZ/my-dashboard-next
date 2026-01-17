"use client";

import { useState } from "react";

interface Props {
  value?: number;
}

export default function CartCounter({ value = 0 }: Props) {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter((prev) => prev + 1);
  };

  const handleSubtraction = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <>
      <span className="text-9xl">{counter}</span>

      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-25 mr-2 cursor-pointer"
          onClick={handleAdd}
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-25 mr-2 cursor-pointer"
          onClick={handleSubtraction}
        >
          -1
        </button>
      </div>
    </>
  );
}
