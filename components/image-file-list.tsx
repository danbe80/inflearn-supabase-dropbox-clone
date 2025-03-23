"use client";

import { Button, Checkbox, IconButton } from "@material-tailwind/react";
import ImageFileBox from "./image-file-box";

export default function ImageFileList() {
  return (
    <section className="mt-2">
      <div className="w-full flex">
        <Checkbox />
        {/* 체크박스 선택 시 나타날 버튼 */}
        <div className=" border border-red-200 hidden">
          <IconButton color="red" className="mr-2">
            <i className="fas fa-trash text-xl" />
          </IconButton>
          <Button color="cyan" className="text-sm" size="sm">
            다운로드
          </Button>
        </div>
      </div>
      {/* 업로드 파일 리스트 */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-2">
        <ImageFileBox />
        <ImageFileBox />
        <ImageFileBox />
        <ImageFileBox />
      </div>
    </section>
  );
}
