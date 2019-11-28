import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import Button from "@material-ui/core/Button";

// Selectors
import { selectCount } from "../selectors";

// Components
import ProTip from '../src/ProTip';
import Link from '../src/Link';

const Copyright: FC = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const Index: FC = () => {
  const countValue = useSelector(selectCount);
  const dispatch = useDispatch();
  const handleOnClick = () => dispatch({type: 'INCREMENT'});
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Typography>{countValue}</Typography>
        <Button onClick={handleOnClick}>Add</Button>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
};

export default Index;