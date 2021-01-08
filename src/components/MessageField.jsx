import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { pushMessage } from "../config/firebase";

export const MessageField = ({ text, setText, name, inputEl }) => {
  const [isComposed, setIsComposed] = useState(false);
  return (
    <TextField
      autoFocus
      fullWidth={true}
      inputRef={inputEl}
      onChange={(e) => {
        setText(e.target.value);
      }}
      onKeyDown={(e) => {
        if (isComposed) return;
        const text = e.target.value;
        if (text === "") return;
        if (e.key === "Enter") {
          pushMessage({ name: "とし", text });
          setText("");
          e.preventDefault();
        }
      }}
      onCompositionStart={() => {
        setIsComposed(true);
      }}
      onCompositionEnd={() => {
        setIsComposed(false);
      }}
      value={text}
    />
  );
};
