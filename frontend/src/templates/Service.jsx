import * as React from 'react';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import { Grid, Paper } from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    success: {
      dark: '#009688',
    },
  },
});

export default function Example(props) {
  return (
    <Grid item xs={12} sm={6} lg={3} my={5}>
    <Paper elevation={3} sx={{
        padding: "1rem"
    }}>
    <ThemeProvider theme={theme}>
        <Box sx={{ color: 'text.secondary',}}>{props.icon}</Box>
        <Box sx={{ color: 'text.primary', fontSize: 25, fontWeight: 'bold', fontFamily: "var(--logo-font)"}}>
          {props.title}
        </Box>
        <Box
          sx={{
            color: 'success.dark',
            display: 'inline',
            fontWeight: 'bold',
            mx: 0.5,
            fontSize: 16,
            fontFamily: "var(--text-font)"
          }}
        >
          {props.text}
        </Box>
    </ThemeProvider>
    </Paper>
    </Grid>
  );
}
