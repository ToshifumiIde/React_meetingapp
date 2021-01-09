import React, { useState, useEffect } from "react";
import { List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { meetingsRef } from "../config/firebase";
import { MessageItem } from "./MessageItem";

const useStyles = makeStyles({
  root: {
    gridRow: 1,
    overflow:"auto",
    width: "100%",
  },
});

export const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    meetingsRef
      .orderByKey()
      .limitToLast(15)
      .on("value", (snapshot) => {
        const messagesObj = snapshot.val();
        if (messagesObj === null) return;
        const entries = Object.entries(messagesObj);
        const newMessages = entries.map((entry) => {
          return { key: entry[0], ...entry[1] };
        });
        setMessages(newMessages);
      });
  }, []);

  return (
    <List className={classes.root}>
      {messages.map(({ key, name, text }) => {
        return <MessageItem key={key} name={name} text={text} />;
      })}
    </List>
  );
};
