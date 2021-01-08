import React from "react";
import { pushMessage } from "../config/firebase";
import { IconButton } from "@material-ui/core/";
import SendIcon from "@material-ui/icons/Send";

export const MessageSubmitButton = ({ name, text, setText , inputEl }) => {
  return (
    <IconButton
      disabled={text === ""}
      onClick={() => {
        pushMessage({ name, text });
        setText("");
        inputEl.current.focus();
      }}
    >
      <SendIcon />
    </IconButton>
  );
};
