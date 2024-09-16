"use client";

import dynamic from "next/dynamic";
import React, { useMemo } from "react";
import { Quill } from "react-quill";

import "react-quill/dist/quill.snow.css";
// @ts-ignore
import ImageUploader from "quill-image-uploader";
import { requestHandler, showNotification } from "@/Utils";
import { fileUploadRequest } from "@/fetchHandlers/file";

Quill.register("modules/imageUploader", ImageUploader);

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

type RichTextEditorProps = {
  placeholder?: string;
  value?: string;
  onChange?(value: string): void;
  onModal: string;
  id: string;
};

const RichTextEditor = ({
  placeholder = "",
  value = "",
  onChange,
  onModal,
  id,
}: RichTextEditorProps) => {
  const imageUploader = useMemo(
    () => ({
      upload: (file: File) => {
        return new Promise(async (resolve, reject) => {
          // check if valid image exists
          const extension = file.name.toLowerCase().split(".").pop();
          if (!["png", "jpg", "jpeg", "gif"].includes(extension!)) {
            const errMessage = "Invalid file type";
            showNotification("error", errMessage);
            return reject(errMessage);
          }

          if (file.size > 1024 * 1024 * 3) {
            const errMessage = "File size should be less than 3 MB";
            showNotification("error", errMessage);
            return reject(errMessage);
          }

          const formData = new FormData();
          formData.append("file", file);
          formData.append("onModal", onModal);

          await requestHandler(
            async () => await fileUploadRequest(formData),
            null,
            (res: any) => {
              // console.log("uploaded file details:", res);
              resolve(res.data.url);
            },
            (errMessage) => {
              showNotification("error", errMessage);
              reject(errMessage);
            }
          );
        });
      },
    }),
    [onModal]
  );

  return (
    <ReactQuill
      theme="snow"
      className="custom-input-editor w-full rounded-md disabled:cursor-not-allowed disabled:opacity-50"
      onChange={onChange}
      value={value}
      modules={{ ...RichTextEditor.modules, imageUploader }}
      formats={RichTextEditor.formats}
      placeholder={placeholder}
      id={id}
    />
  );
};

export default RichTextEditor;

RichTextEditor.modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }, { font: [] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

RichTextEditor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "imageBlot",
];
