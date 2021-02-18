import React from "react";

import "./editor.css";

const Editor = ({ editorRef }) => {
  return (
    <iframe
      ref={editorRef}
      id="editorOutput"
      className="editor"
      contentEditable={true}
    />
  );
};

export default React.forwardRef((props, ref) => (
  <Editor {...props} editorRef={ref} />
));
