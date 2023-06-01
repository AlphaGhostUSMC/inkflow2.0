import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomePage from './pages/HomePage';

const theme = createTheme({
  // Customize the theme according to your requirements
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add routes for other pages */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
