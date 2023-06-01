import React from 'react';
import { Container, Typography, Button } from '@mui/material';

function HomePage() {
  return (
    <Container>
      <Typography variant="h1" component="h1" align="center">
        InkFlow!
      </Typography>
      <Typography variant="subtitle1" align="center">
        Get started by creating your first blog post or article.
      </Typography>
      <Button variant="contained" color="primary">
        Create Post
      </Button>
    </Container>
  );
}

export default HomePage;
