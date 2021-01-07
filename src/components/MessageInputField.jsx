import React , {useState}from "react";
import { Grid , Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {gravatarPath} from "../gravatar";
import { MessageField } from "./MessageField";
import { MessageSubmitButton } from "./MessageSubmitButton";

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin:"26px",
  },
});

export const MessageInputField = ({name}) => {
  const [ text , setText ]= useState("");
  const classes = useStyles();
  const avatarPath = gravatarPath(name);
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1}>
          <Avatar src={avatarPath}/>
        </Grid>
        <Grid item xs={10}>
          <MessageField text={text} setText={setText} name={name}/>
        </Grid>
        <Grid item xs={1}>
          <MessageSubmitButton text={text} setText={setText} name={name} />
        </Grid>
      </Grid>
    </div>
  );
};
