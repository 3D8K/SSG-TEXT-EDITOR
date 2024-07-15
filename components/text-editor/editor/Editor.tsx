"use client";

import { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import { Toolbar } from "./Toolbar";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Heading from "@tiptap/extension-heading";
import Youtube from "@tiptap/extension-youtube";
import Dropcursor from "@tiptap/extension-dropcursor";
import ImageResize from "tiptap-extension-resize-image";
import Image from "@tiptap/extension-image";
import { Button } from "../../ui/Button";
import { useTranslation } from "react-i18next";
import { Loader } from "../../ui/Loader";

export const Editor = ({
  text,
  editable,
  handleCancel,
  name,
  handleSave,
}: {
  text: string;
  editable: boolean;
  name: string;
  handleCancel: () => void;
  handleSave: (htmlContent: string) => void;
}) => {
  const { t } = useTranslation();
  const [initialText, setInitialText] = useState(text);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Highlight.configure({ multicolor: true }),
      Color,
      Dropcursor,
      TextStyle,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Heading.configure({
        levels: [1, 2, 3],
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
      }),
      Youtube.configure({
        nocookie: true,
        interfaceLanguage: "en",
        loop: false,
      }),
      Image.configure({
        allowBase64: true,
        inline: true,
      }),
      ImageResize,
    ],
    editorProps: {
      attributes: {
        class: "px-4 py-2 rounded-md  border border-white-dirty h-[500px] w-[1000px] overflow-scroll prose max-w-none [&_ol]:list-decimal [&_ul]:list-disc focus:outline-none"
      },
    },
    content: text,
    editable: editable,
  });

  useEffect(() => {
    if (editor) {
      editor.commands.setContent(text);
    }
  }, [text, editor]);

  if (!editor) return <Loader/>;

  return (
    <>
      {editable && <Toolbar editor={editor} />}
      <EditorContent editor={editor} />
      {editable && (
        <div className="flex flex-row gap-6 items-center mt-4">
          <Button
            type="button"
            disabled={!!!name}
            onClick={() => {
              const htmlContent = editor.getHTML();
              setInitialText(htmlContent);
              handleSave(htmlContent);
            }}
          >
            <p>Save document</p>
          </Button>
        </div>
      )}
    </>
  );
};
