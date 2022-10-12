import React, { useState } from "react";
import Editor from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export const ControlledEditor = () => {
  const [editorState, setEditorState] = useState(null);

  const onEditorStateChange = (editorState) => setEditorState(editorState);

  return (
    <Editor
      editorState={editorState}
      wrapperClassName="demo-wrapper"
      editorClassName="demo-editor"
      onEditorStateChange={onEditorStateChange}
    />
  );
};
