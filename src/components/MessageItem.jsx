import React, { useRef, useEffect } from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  Typography,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles/";
import { gravatarPath } from "../gravatar";

const useStyles = makeStyles(() => ({
  inline: {
    display: "inline",
  },
}));

export const MessageItem = ({ name, text, isLastItem }) => {
  const ref = useRef(null);
  const classes = useStyles();
  const avatarPath = gravatarPath(name);

  useEffect(() => {
    if (isLastItem) {
      //ここで最新のtextにスクロールする挙動を実装
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isLastItem]);

  return (
    <>
      <ListItem 
        divider={true} 
        ref={ref}//ここでrefを参照する
      >
        <ListItemAvatar>
          <Avatar src={avatarPath} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <Typography
              color="textPrimary"
              component="span"
              className={classes.inline}
              variant="body2"
            >
              {text}
            </Typography>
          }
        />
      </ListItem>
    </>
  );
};
