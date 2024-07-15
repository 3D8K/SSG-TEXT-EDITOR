import React from "react";
import { Editor } from "./editor";

export function TextEditor({
  text,
  editable,
  handleCancel,
  handleSave,
  name
}: {
  text: string;
  editable: boolean;
  handleCancel: () => void;
  name: string;
  handleSave: (htmlContent: string) => void;
}) {
  return (
    <Editor
      text={text}
      name={name}
      editable={editable}
      handleCancel={handleCancel}
      handleSave={handleSave}
    />
  );
}
