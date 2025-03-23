"use client";

export default function FileUploadZone() {
  return (
    <section className="w-full h-24 mt-2 flex flex-col justify-center items-center border-2 border-dashed border-upload-border rounded-md">
      <i className="fas fa-download text-4xl text-gray-500" />
      <span className="text-gray-500 mt-2">Upload File</span>
    </section>
  );
}
