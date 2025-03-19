"use client";

import FileUploadZone from "components/dropbox-file-upload-zone";
import ImageFileList from "components/image-file-list";
import Logo from "components/logo";
import SearchComponents from "components/search-components";

export default function UI() {
  return (
    <main>
      <Logo />

      <div className="w-10/12 m-auto">
        <SearchComponents />

        <FileUploadZone />

        <ImageFileList />
      </div>
    </main>
  );
}
