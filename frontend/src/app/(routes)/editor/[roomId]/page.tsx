import React from "react";
import CodeEditor from "../components/code-editor";

type Params = Promise<{ roomId: string }>;
export default async function EditorPage({ params }: { params: Params }) {
  const { roomId } = await params;
  return (
    <div>
      <CodeEditor roomId={roomId} />
    </div>
  );
}
