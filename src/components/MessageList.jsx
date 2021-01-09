import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { meetingsRef } from "../config/firebase";

const useStyles = makeStyles({
  root: {
    gridRow: 1,
    backgroundColor: "skyblue",
  },
});

export const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    meetingsRef
      .orderByKey()
      .limitToLast(3)
      .on("value", (snapshot) => {
        // console.log(snapshot.val());
        const messagesObj = snapshot.val();
        if(messagesObj === null) return;
        // console.log(Object.entries(messagesObj));
        const entries = Object.entries(messagesObj);
        const newMessages = entries.map((entry) => {
          // console.log(entry);
          return { key: entry[0], ...entry[1] };
        });
        console.log(newMessages);
        setMessages(newMessages);
      });
  }, []);

  return <div className={classes.root}>MessageList</div>;
};
