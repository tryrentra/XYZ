import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, IconButton } from '@material-ui/core';
import { AttachFile, EmojiEmotions, Mic, Send } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.default,
    position: 'fixed',
    bottom: 0,
    width: '100%',
    zIndex: 1,
  },
  input: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: theme.spacing(1),
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

function InputBox() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="attach file">
        <AttachFile />
      </IconButton>
      <IconButton className={classes.iconButton} aria-label="insert emoji">
        <EmojiEmotions />
      </IconButton>
      <TextField
        className={classes.input}
        placeholder="Type a message"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <IconButton className={classes.iconButton} aria-label="send message">
              <Send />
            </IconButton>
          ),
        }}
      />
      <IconButton className={classes.iconButton} aria-label="send voice message">
        <Mic />
      </IconButton>
    </div>
  );
}

export default InputBox;