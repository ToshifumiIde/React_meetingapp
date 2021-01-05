import React from "react";
import { Grid , Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin:"26px",
  },
});

export const MessageInputField = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid xs={1}>
          <Avatar />
        </Grid>
        <Grid xs={10}>
          入力欄
        </Grid>
        <Grid xs={1}>
          ボタン
        </Grid>
      </Grid>
    </div>
  );
};
