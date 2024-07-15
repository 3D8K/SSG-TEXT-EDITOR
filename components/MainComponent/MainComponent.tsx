"use client";
import { useState } from "react";
import { TextEditor } from "../text-editor/TextEditor";
import { Block } from "../ui/Block";
import { Input } from "../ui/Input";

export default function MainComponent() {
  const [docName, setDocName] = useState("");

  const handleSave = (text: string) => {
    const htmlContent = `
        ${text}
    `;

    const blob = new Blob([htmlContent], { type: "text/html" });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${docName}.txt`;
    a.click();

    URL.revokeObjectURL(url);
  };


  return (
    <Block isEditable={false} classNames="m-10">
      <div className="flex flex-row items-center gap-2 font-semibold">
        <p className="text-nowrap">Document name:</p>
        <Input isNoValid={true} value={docName} onChange={(event: any) => setDocName(event.target.value)}/>
      </div>
      <TextEditor
        text={""}
        editable={true}
        handleCancel={() => {}}
        handleSave={handleSave}
        name={docName}
      />
    </Block>
  );
}
