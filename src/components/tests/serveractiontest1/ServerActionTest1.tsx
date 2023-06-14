'use client';

import { useState } from 'react';

interface ServerActionTest1Interface {
  serverAction1: (text: string) => void;
}

export default function ServerActionTest1({
  serverAction1,
}: ServerActionTest1Interface) {
  const [value, setValue] = useState<string>('');

  return (
    <input
      value={value}
      type="text"
      className="text-black"
      onChange={(e) => {
        console.log(e.target.value);
        serverAction1(e.target.value);
        setValue(e.target.value);
      }}
    />
  );
}
