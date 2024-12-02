"use client";
import React, { useEffect, useState } from "react";
import { Editor } from "@monaco-editor/react";

export default function CodeEditor() {
  const [value, setValue] = useState<string>("");
  return (
    <div>
      <Editor
        theme="vs-dark"
        height={"100vh"}
        width={"100%"}
        value={value}
        onChange={(value) => setValue(value ?? "")}
      />
    </div>
  );
}
