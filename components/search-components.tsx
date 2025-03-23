"use client";

import { IconButton, Input } from "@material-tailwind/react";

export default function SearchComponents() {
  return (
    <Input label="Search File Name" icon={<i className="fas fa-search" />} />
  );
}
