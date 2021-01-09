import React from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  Typography,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles/";
import { gravatarPath } from "../gravatar";

const useStyles = makeStyles({
  inline: {
    display: "inline",
  },
});

export const MessageItem = ({ name, text }) => {
  const classes = useStyles();
  const avatarPath = gravatarPath(name);
  return (
    <>
      <ListItem divider={true}>
        <ListItemAvatar>
          <Avatar src={avatarPath} />
        </ListItemAvatar>
        <ListItemText
          primary  ={name}
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
