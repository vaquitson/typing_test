"use client";

import React from 'react';

export default function Button({ text, onClick }) {
  return (
    <button onClick={onClick}
    className="mt-3 px-3 py-2 bg-blue-500 text-white rounded"
    id="startButton"
    onKeyDown={(e) => {
      if (e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
      }
    }}
    >
    {text}
    </button>
  );
}

