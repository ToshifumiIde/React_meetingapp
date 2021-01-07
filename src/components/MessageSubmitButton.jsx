import React from 'react'
import { pushMessage } from "../config/firebase";
import { IconButton } from "@material-ui/core/"
import SendIcon from "@material-ui/icons/Send"

export const MessageSubmitButton = ({ name , text , setText }) => {
  return (
    <IconButton 
      disabled={ text === "" } 
      onClick={()=>{
        pushMessage({name , text})
        setText("")
      }}
      >
      <SendIcon />
    </IconButton>
  )
};