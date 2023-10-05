import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}
    className={styles.box}
    >
      <AppBar
      className={styles.bar}
      >
        <Toolbar
        className={styles.toolbar}
        >
          <Typography className={styles.Typography} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Typography className={styles.Typography}variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Contacto
          </Typography>
          <Typography className={styles.Typography}variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Reservas
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
