import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: { flexGrow: 1 },
  flex: { flexGrow: 1 },
  bar: { background: '#6B7A8Fgit ' }
};

const Header = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Kontact.io
          </Typography>
          <Button color="inherit"> Add </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Header);
