import React, { useEffect, useRef } from "react";
import Editor from "./editor";
import Toolbar from "./toolbar";

import "./richTextEditor.css";
import Button from "../common/button";

const RichTextEditor = () => {
  const editorRef = useRef();

  useEffect(() => {
    editorRef.current.contentWindow.document.designMode = "On";
  }, []);

  const executeCommand = (command, value = null) => {
    if (editorRef.current) {
      editorRef.current.contentWindow.document.execCommand(
        command,
        false,
        value
      );
    }
  };

  const actionHandler = (event) => {
    const { command } = event.target.dataset;
    if (event.target.tagName === "INPUT") {
      const { value } = event.target;
      executeCommand(command, value);
    } else {
      executeCommand(command);
    }
  };

  const consoleHTMLHandler = () => {
    console.log(editorRef.current.contentWindow.document.body.innerHTML);
  };

  return (
    <div className="rich-text-editor">
      <Toolbar onActionApplied={actionHandler} />
      <Editor ref={editorRef} />
      <div className="console-html-container">
        <Button onClick={consoleHTMLHandler}>Console HTML</Button>
      </div>
    </div>
  );
};

export default RichTextEditor;
