
import React from 'react';
import Button from './components/Button';
import TypingBox from './components/TypingBox';

export default function Home() {

  return (
    <div className="p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold text-center pt-2 pb-4">Typing Test</h1>
      <TypingBox></TypingBox>
    </div>
  );
}
