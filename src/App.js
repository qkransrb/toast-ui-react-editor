import React, { useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

const App = () => {
  const editor = useRef();

  const onClickHandler = async () => {
    const description = editor.current.getInstance().getHTML();

    if (description.includes("image/")) {
      const types = ["jpg", "jpeg", "png"];
      const confirmType = types.find(
        (type) => type === description.split("image/")[1].split(";")[0]
      );

      if (!confirmType) {
        return alert("허용되지 않는 타입의 이미지");
      }
    }
  };

  return (
    <div>
      <Editor
        ref={editor}
        height="500px"
        initialEditType="wysiwyg"
        toolbarItems={[
          ["heading", "bold", "italic", "strike"],
          ["hr", "quote"],
          ["ul", "ol", "task", "indent", "outdent"],
          ["table", "image", "link"],
        ]}
      />
      <br />
      <button type="button" onClick={onClickHandler}>
        Submit
      </button>
    </div>
  );
};

export default App;
