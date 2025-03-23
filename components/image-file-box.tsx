"use client";

import { Checkbox } from "@material-tailwind/react";

export default function ImageFileBox() {
  return (
    <div className="w-full flex-col justify-center items-center relative">
      <div className="absolute z-10 hidden">
        <Checkbox />
      </div>
      <img
        className="h-64 w-full rounded-lg object-cover object-center"
        src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
        alt="nature image"
      />
      <div className="text-center">
        <span>FileName.png</span>
      </div>
    </div>
  );
}
